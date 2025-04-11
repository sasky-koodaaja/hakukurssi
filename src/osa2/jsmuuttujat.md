
## JavaScriptin perusteet – Muuttujat ja tietotyypit
### Muuttujat
Muuttujat ovat säilytyspaikkoja arvoille eli datalle. Ne mahdollistavat sen, että koodisi voi käsitellä vaihtelevaa tietoa – kuten käyttäjän nimeä tai laskun summaa. Tieto pysyy muuttujassa tallessa koko ohjelman suorituksen ajan. 

Ohjelmoija voi halutessaan muuttaa muuttujan arvoja ohjelman suorituksen aikana vaikka monta kertaa, esimerkiksi pelissä voi pelaajan pistemäärä olla tallennettuna muuttujaan ja aina kun pelaaja onnistuu jossain uudessa asiassa, hänen piste-muuttujansa arvoa kasvatetaan.

Muuttuja **esitellään** ennen sen ensimmäistä käyttöä varatulla komentosanalla ```let```. Koodi toimii valitettavasti myös, vaikka let-komennon jättää pois, mutta tällöin muuttujasta tulee vahingossa ns. globaali. Muista siis esitellä aina muuttuja oikealla tavalla.

JavaScriptin koodilause päättyy joko rivinvaihtoon (ENTER) tai puolipisteeseen. Nykytavan mukaan puolipisteitä ei enää käytetä, mutta niiden käyttö ei ole virhe. Alla olevat kaksi koodilausetta päättyvät puolipisteeseen.

``` javascript
let nimi = "Anna";
let ika = 16;
```

Seuraavat koodirivit päättyvät rivinvaihtoon ilman puolipistettä. Huomaa, desimaalierotin on desimaalipiste eikä suomen kielen kieliopin mukainen pilkku. Kolmannella rivillä ```hinta```-muuttujaan tallennetaan uusi arvo, joka korvaa vanhan. Vain viimeisin arvo jää jäljelle. Myöskään muuttujaa ei kolmannella rivillä enää uudelleen esitellä, koska se on ```let```-komennolla esitelty jo aiemmin.

``` javascript
let hinta = 5.95
let alePros = 0.2
hinta = 4.76
```


Muistettavaa muuttujista:

- Käytä kuvaavia nimiä (ika, etunimi) – ei pelkkiä kirjaimia (x, y).
- Muuttujan nimi ei saa sisältää välilyöntejä.
- Vältä muuttujien nimeämisessä skandinaavisia kirjaimia, osa työkaluista tai kirjastoista voi toimia väärin
- Käytä camelCase-tyyliä: esim. ```kokoNimi``` tai alaviivoja esim. ```ale_prosentti``` kun muuttujan nimi on pitkä yhdyssana.

### 1.2 Yksinkertaiset tietotyypit (primitiiivit)
Muuttujille voi antaa eri tyyppisiä arvoja. JavaScript tunnistaa tyypin automaattisesti.

Tärkeimmät tietotyypit:

| Tyyppi | Esimerkki | Selitys |
|--------|-----------|---------|
|String	|"Moikka" | Teksti (merkkijono)
|Number|	42, 3.14 | Luku (kokonais- tai desimaali)
|Boolean|	true, false	| Totuusarvo (kyllä/ei)
|Undefined|	muuttuja ilman arvoa | Esim. let x
|Null| null	| Tarkoituksella "tyhjä"

```javascript
let teksti = "Hei"
let luku = 100
let totuus = true
let eiMaaritetty
let tyhja = null
```

### Tekstin kirjoitus
Koska tekstimuotoinen data voi sisältää kaikkia merkkejä, myös välilyöntejä ja erikoismerkkejä, tekstimuotoinen data on ympäröitävä erotinmerkeillä, joita on kolmea tyyppiä. Voit käyttää tekstiin heittomerkkejä eli 'hipsuja', lainausmerkkejä tai backtick-merkkejä:

```javascript
let eka = 'Hei'
let toka = "Moi"
// tämä on kommentti
let kolmas = `Terve, ${eka}` // muuttujan upotus tulostukseen
```

### Kommentit ja "kaltevat" viivat

Koodin joukkoon voi lisätä yllä olevan esimerkin mukaan **kommentteja**, eli ohjelmoijan omia muistiinpanoja. Ne eivät vaikuta ohjelman toimintaan vaan ovat pelkästään ihmisen luettavaksi tarkoitettuja huomautuksia tai vastaavaa. Kommentti aloitetaan kirjoittamalla peräkkäin kaksi kauttaviivaa ```// tämä on kommentti```. Kauttaviivat ovat eri merkki, kuin seuraavassa esiteltävät **kenoviivat**, jotka osoittavat ikään kuin kello 11:een, kun taas kauttaviivat osoittavat kello 1:een.

Muista: kauttaviiva ```/``` ja kenoviiva ```\``` ovat eri merkki ja saavat aikaan eri toimintoja. Seuraavaksi eräs kenoviivan käyttötarkoitus, eli escape-merkit.

**Escape-merkit** ovat erikoismerkkejä, joita käytetään ohjelmoinnissa, kun halutaan lisätä koodiin merkkejä, joita ei voi kirjoittaa suoraan sellaisenaan. Näitä merkkejä tarvitaan, koska jotkut merkit JavaScriptissä (ja muissa kielissä) tulkitaan erikoistarkoitukseen, eikä niitä voi käyttää normaalina tekstinä ilman erityistä käsittelyä.

Escape-merkki on kenoviiva ```\```, jota seuraa jokin muu merkki. Tämä yhdistelmä kertoo JavaScriptille: "älä käsittele seuraavaa merkkiä tavalliseen tapaan, vaan tulkitse se erikoismerkkinä".

Muutama Escape-merkki:
- \\' ja \\" sallivat kirjoittaa lainausmerkin osaksi merkkijonoa
- \n tekee rivinvaihdon
- \\ lisää kenoviivan

Esimerkki merkkijonosta, joka sisältää Escape-merkkejä:
```javascript
let eka = "Täällä on kenoviiva \\ ja lainausmerkki \" tekstin joukossa."
```

Ylläolevan muuttujan tulostus tuottaa tällaisen rivin:
```text
Täällä on kenoviiva \ ja lainausmerkki " tekstin joukossa.
```

Kun haluat tulostaa tekstin kahdelle riville, lisää haluamaasi kohtaan \\n.
```javascript
let esimerkki = "Hei, mitä kuuluu?\nKaikki hyvin."
```

### Tietotyypin tarkistus
Voit tarkistaa muuttujan tietotyypin komennolla typeof.

```javascript
let luku = 10
console.log(typeof luku) // "number"
```

### Tyyppimuunnokset
JavaScript muuntaa joskus tyyppejä automaattisesti. Tämä voi yllättää:

```javascript
let a = 2
let b = "2"
console.log(a + b) // "22" (yhdistää tekstiksi)
```

Voit myös muuntaa tyyppejä itse:

```javascript
Number("123")  // 123
String(456)    // "456"
Boolean("")    // false
```

### Yhteenveto 

- Käytä let muuttujien luomiseen.
- Muista tietotyypit: teksti, luku, tosi/epätosi.
- Kirjoita kuvaavia muuttujanimiä.
- Tarkista tyyppi typeof-komennolla.
- Tyyppimuunnokset voivat aiheuttaa yllätyksiä.

<br>

## Esimerkit

JavaScript-koodi kirjoitetaan HTML-sivulle ```<script>```-elementin sisään. Tämä tarkoittaa, että voit lisätä koodin suoraan HTML-tiedostoon, ja selain suorittaa sen, kun sivu avataan. Kaikki JavaScript kirjoitetaan ```<script>```- ja ```</script>```-tägien väliin. Se voi olla sivun alussa, lopussa tai erillisessä tiedostossa. 

### Missä kohtaa HTML:ää ```<script>```-elementti voi olla?
- ```<script>```-elementti voidaan sijoittaa kahteen yleiseen paikkaan:
- ```<head>```-elementin sisälle
- ```<body>```-elementin sisälle

Usein ```<script>``` sijoitetaan ```<body>```-elementin sisään ja sen loppuun. Kun selain lukee HTML-tiedostoa ylhäältä alas, se lukee ja suorittaa koodin heti kun se kohtaa sen. Jos JavaScript yritetään suorittaa ennen kuin sivun sisältö on ehtinyt latautua (esimerkiksi ennen kuin elementit kuten ```<p id="tulos">``` ovat olemassa), koodi ei välttämättä toimi oikein – selain ei vielä "näe" niitä elementtejä.

Siksi on hyvä tapa sijoittaa ```<script>```-elementti juuri ennen sivun rungon lopettavaa ```</body>```-tagia,

Alla on muutamia esimerkkejä ja niiden jälkeen harjoituksia, joiden avulla voit itse kokeilla miten koodaaminen onnistuu.

### Esimerkki 1

Luo muuttuja nimeltä ```ilmoitus```, jonka arvo on ```"Tervetuloa koodauskurssille!```. 

**Suoritusohje:** Tulosta se alert-ikkunassa. Tee koodistasi kokonainen html-tiedosto ja tallenna se nimellä ```esimerkki1.html```. Avaa luomasi tiedosto selaimessa.

#### esimerkki1.html:
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Esimerkki 1</title>
</head>
<body>
  <script>
    let ilmoitus = "Tervetuloa koodauskurssille!"
    alert(ilmoitus)
  </script>
</body>
</html>
```
### Esimerkki 2
Luo muuttuja ```oppilas```, jonka arvo on ```"Lauri"```, ja muuttuja ```pisteet```, jonka arvo on ```95```. Tulosta console.log-komennolla teksti

```
Oppilas: Lauri, Pisteet: 95
```

#### esimerkki2.html:
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Esimerkki 2</title>
</head>
<body>
  <script>
    let oppilas = "Lauri"
    let pisteet = 95
    console.log("Oppilas: " + oppilas + ", Pisteet: " + pisteet)
  </script>
</body>
</html>
```

### Esimerkki 3
Luo muuttuja ```ekaLuku```, jonka arvo on ```12```, ja ```tokaLuku```, jonka arvo on ```8```. Laske niiden summa ja näytä se sivulla HTML-elementissä, jonka id on ```tulos```.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Esimerkki 3</title>
</head>
<body>
  <p id="tulos"></p>

  <script>
    let ekaLuku = 12
    let tokaLuku = 8
    let yhteensa = ekaLuku + tokaLuku
    document.getElementById("tulos").innerHTML = "Lukujen yhteissumma on: " + yhteensa
  </script>
</body>
</html>
```



## Harjoitukset

### Harjoitus 1
Luo muuttuja nimeltä ```tervehdys```, jonka arvo on ```"Hei maailma!"```. Tulosta se alert-ikkunassa.

### Harjoitus 2
Luo muuttuja ```nimi```, jonka arvo on ```"Emma"```, ja muuttuja ```ika```, jonka arvo on ```23```. Tulosta console.log-komennolla teksti

```
Nimi: Emma, Ikä: 23
```

### Harjoitus 3
Luo muuttuja ```luku1```, jonka arvo on ```5```, ja ```luku2```, jonka arvo on ```3```. Laske niiden summa ja näytä se sivulla HTML-elementissä, jonka id on ```summa```.

### Harjoitus 4
Luo muuttuja ```teksti```, jonka arvo on ```"JavaScript on kivaa"``` ja näytä se HTML-elementissä, jonka id on ```viesti```.

### Harjoitus 5
Luo muuttuja ```totuus``` arvolla ```true``` ja näytä sen tietotyyppi HTML-elementissä, jonka id on ```tyyppi```.

