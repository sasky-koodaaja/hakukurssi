# Oma pieni API-harjoitussovellus

Tämä ohje toteuttaa yhden mallisovelluksen, jossa julkista ja avointa API-rajapintaa käyttäen noudetaan tsekin nimipäiväkalenteri-sovelluksesta annetulla päivämäärällä kyseisen nimipäiväsankarin nimi.

### Mitä haluamme ohjelman tekevän:
Käyttäjä valitsee päivämäärän selaimessa. Kun hän painaa "Hae nimipäivä" -painiketta, ohjelma:

1. Lukee HTML-lomakkeesta valitun päivämäärän.
2. Muotoilee sen oikeaan muotoon.
3. Tekee API-kutsun Tšekkiläiseen nimipäiväpalveluun.
4. Hakee vastauksen (jos löytyy nimipäivä).
5. Näyttää nimipäivän käyttäjälle.

## HTML-runko

Käytämme alla olevaa HTML-runkoa, johon lisätään toiminnallisuutta useammassa vaiheessa. Alkuvaiheen runko on samanlainen, kuin aiemmatkin tämän materiaalin HTML-sivut.

```html
<!DOCTYPE html>
<html lang="fi">
<head>
    <meta charset="UTF-8">
    <title>Tsekin nimipäiväkalenteri</title>
    <script>
        // tähän kirjoitetaan JavaScript-sovellus, joka
        // suorittaa varsinaisen  datan noudon ja käsittelyn
    </script>
</head>
<body>
    <h1>Tsekin nimipäiväkalenteri</h1>

    <!-- tähän täydennetään HTML-lomake päivämäärän valitsemiseksi -->

</body>
</html>
```

## HTML-osion täydennys valmiiksi

Ensin lisäämme kaksi riviä HTML-koodiin:
- label on pelkkä ohjeteksti
- lomakekenttä, johon käyttäjä voi valita kalenterista päivämäärän.
- id="paivamaara" antaa sille yksilöllisen tunnisteen, jota JavaScript voi käyttää.

```html
<label for="paivamaara">Valitse päivämäärä:</label>
<input type="date" id="paivamaara">
```

Lisätään nappi, jota painettaessa kutsutaan JavaScript-funktiota ```haeNimipaiva()```. Funktiota ei vielä ole, mutta kirjoitamme sen itse.

```html
<button onclick="haeNimipaiva()">Hae nimipäivä</button>
```

Lisätään elementti, johon tulos (nimipäivä tai virheilmoitus) näytetään. Tässä käytetään teksikappale-elementtiä ```<p>```, mutta muitakin voi käyttää. Tämäkin elementti vaatii tunnisteen (id), jotta JavaScriptilla on siihen pääsy. Tunniste "tulos" on aika tavalla itsensä selittävä.

```html
<p id="tulos"></p>
```
Nämä edellä luetellut neljä HTML-riviä lisätään <body>-elementin sisään siellä olevan kommentin sijaan.

## JavaScript-funktio API-kutsun suorittamiseksi

```javascript
async function haeNimipaiva() {
```

- Määritellään asynkroninen funktio nimeltä haeNimipaiva. Sitä voidaan käyttää await-avainsanan kanssa (odotetaan API-vastausta rauhassa ilman että selain jäätyy).

### Haetaan päivämäärä

```javascript
const paiva = document.getElementById('paivamaara').value
```

- Etsitään HTML:stä kenttä, jonka id on paivamaara.
- Otetaan sen arvo (value), eli käyttäjän valitsema päivämäärä. Se tulee muodossa "2025-04-16" (ISO-formaatti).

### Tarkistetaan, onko päivämäärä valittu

```javascript
if (!paiva) {
    alert('Valitse ensin päivämäärä!')
    return
}
```

- Jos käyttäjä ei ole valinnut päivää, näytetään ilmoitus.
- ```return``` lopettaa funktion suorittamisen tähän.

### Muotoillaan päivämäärä oikeaan muotoon

```javascript
const paivaObj = new Date(paiva)
```
- Luodaan JavaScriptin Date-objekti käyttäjän syötteestä.

```javascript
const paivaStr = ("0" + paivaObj.getDate()).slice(-2)
const kuukausiStr = ("0" + (paivaObj.getMonth() + 1)).slice(-2)
```

- getDate() palauttaa päivän (esim. 3). Lisäämme alkuun nollan ja otamme viimeiset 2 merkkiä → saadaan 03.
- getMonth() palauttaa kuukauden nollapohjaisesti (0 = tammikuu, 11 = joulukuu), joten lisätään +1.
- Lopputulos: jos päivä on 3. huhtikuuta, saadaan "03" ja "04".


### Rakennetaan API-kutsun osoite

```javascript
const apiUrl = `https://svatky.adresa.info/json?date=${paivaStr}${kuukausiStr}`
```

- Luodaan URL-osoite, jota API käyttää.
- Esimerkiksi 03.04. → API-kutsu on:

```javascript
https://svatky.adresa.info/json?date=0304
```

### Tehdään API-kutsu ja käsitellään vastaus

```javascript
const vastaus = await fetch(apiUrl)
```

- Tehdään verkko- eli API-kutsu. await odottaa vastauksen saapumista.

```javascript
const tiedot = await vastaus.json()
```

- Muutetaan saatu vastaus JSON-muotoon, jotta voimme käsitellä sitä JavaScriptillä.

### Näytetään nimipäivä tai virheilmoitus

```javascript
if (tiedot.length > 0) {
    document.getElementById('tulos').textContent = 
        `Nimipäivä ${paivaStr}.${kuukausiStr}.: ${tiedot.map(nimi => nimi.name).join(', ')}`;
} else {
    document.getElementById('tulos').textContent = 'Ei löytynyt nimipäiviä valitulle päivälle.';
}
```

- Jos API palauttaa tietoa (taulukko ei ole tyhjä), tulostetaan nimipäivät.
- ```map(nimi => nimi.name)``` hakee kaikki nimikentät taulukosta.
- ```join(', ')``` yhdistää ne pilkulla erotetuksi listaksi.
- Jos mitään ei tule, ilmoitetaan ettei nimipäiviä löytynyt.

### Virheiden käsittely

```javascript
} catch (virhe) {
    document.getElementById('tulos').textContent = 'Virhe haettaessa nimipäivää.'
    console.error(virhe)
}
```
- Jos kutsu epäonnistuu (esim. ei nettiä), näytetään virheilmoitus ja tulostetaan virhe konsoliin.



### Koko sovellus valmiina

Voit kokeilla tätä sovellusta klikkaamalla linkkiä: [Tsekin nimipäiväsovelluksen malli](http://neutroni.hayo.fi/~peterf/nameday).

Alla koko koodi yhtenäisenä.

```html
<!DOCTYPE html>
<html lang="fi">
<head>
    <meta charset="UTF-8">
    <title>Tsekin nimipäiväkalenteri</title>
    <script>
        async function haeNimipaiva() {
            const paiva = document.getElementById('paivamaara').value
            if (!paiva) {
                alert('Valitse ensin päivämäärä!')
                return
            }

            const paivaObj = new Date(paiva)
            const paivaStr = ("0" + paivaObj.getDate()).slice(-2)
            const kuukausiStr = ("0" + (paivaObj.getMonth() + 1)).slice(-2)

            const apiUrl = `https://svatky.adresa.info/json?date=${paivaStr}${kuukausiStr}`

            try {
                const vastaus = await fetch(apiUrl)
                const tiedot = await vastaus.json()
                if (tiedot.length > 0) {
                    document.getElementById('tulos').textContent = 
                        `Nimipäivä ${paivaStr}.${kuukausiStr}.: ${tiedot.map(nimi => nimi.name).join(', ')}`
                } else {
                    document.getElementById('tulos').textContent = 'Ei löytynyt nimipäiviä valitulle päivälle.'
                }
            } catch (virhe) {
                document.getElementById('tulos').textContent = 'Virhe haettaessa nimipäivää.'
                console.error(virhe)
            }
        }
    </script>
</head>
<body>
    <h1>Tsekin nimipäiväkalenteri</h1>

    <label for="paivamaara">Valitse päivämäärä:</label>
    <input type="date" id="paivamaara">
    <button onclick="haeNimipaiva()">Hae nimipäivä</button>

    <p id="tulos"></p>
</body>
</html>```
