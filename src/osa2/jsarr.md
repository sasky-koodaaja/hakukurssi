
# Taulukkomuuttujat

## Taulukkomuuttuja eli Array

JavaScriptin taulukkomuuttuja eli array on muuttuja, johon voit tallentaa useita arvoja samanaikaisesti. Se toimii kuin lista, johon arvot järjestetään peräkkäin. Taulukkoon tallennettuja tietoja kutsutaan alkioiksi, ja jokaisella alkiolla on oma paikkansa, jota kutsutaan indeksiksi. Indeksit alkavat aina numerosta 0.

Taulukkomuuttujia (array) kannattaa käyttää ohjelmoinnissa silloin, kun halutaan käsitellä useita saman tyyppisiä tietoja tehokkaasti ja helposti. Esimerkiksi kymmenen henkilön nimet yhdessä taulukossa ```nimet``` on paljon kätevämpi ratkaisu, kuin luoda kymmenen erillistä muuttujaa. Taulukko on parempi, koska tarvitaan vähemmän koodia, nimiä on helppo lisätä ja poistaa myöhemmin eikä tarvitse luoda uutta muuttujaa jokaiselle nimelle. Lisäksi taulukot mahdollistavat tietojen läpikäymisen silmukan avulla.

### Yhteenveto tilanteista, joissa taulukoita kannattaa käyttää:
|Tilanne|Miksi taulukko on hyvä?|
|-------|-----------------------|
|Useita saman tyyppisiä tietoja|Vähemmän koodia ja selkeämpi rakenne|
|Tietoja käsitellään silmukalla|Helppo käsitellä suuri määrä tietoja|
|Tietojen määrä voi muuttua|Joustava lisäys ja poisto|
|Tietojen järjestys tärkeä|Säilyttää aina järjestyksen|

<br>

Lisätietoja ja lisäharjoituksia löytyy esimerkiksi sivustosta [W3Schools Arrays](https://www.w3schools.com/js/js_arrays.asp).


## Esimerkit

### Taulukon luonti

```javascript
// Luodaan taulukko, jossa on kolme nimeä
let nimet = ["Anna", "Jukka", "Maria"]
}
```

Tässä taulukossa on kolme alkiota:
- Alkio indeksissä 0 on "Anna"
- Alkio indeksissä 1 on "Jukka"
- Alkio indeksissä 2 on "Maria"

### Alkioiden hakeminen taulukosta

Taulukon alkioihin pääsee käsiksi indeksin avulla. 

```javascript
let nimet = ["Anna", "Jukka", "Maria"];

console.log(nimet[0])  // Tulostaa: Anna
console.log(nimet[1])  // Tulostaa: Jukka
console.log(nimet[2])  // Tulostaa: Maria
```

Huomaa, että indeksi alkaa aina nollasta, eli ensimmäinen alkio on indeksissä 0, toinen 1, kolmas 2, jne.

### Alkioiden lisääminen taulukkoon

Talukkoon lisätään alkio seuraavasti:
```javascript
nimet.push("Minni")  // Lisätään alkio "Minni" taulukon loppuun
console.log(nimet)   // Tulostaa: ["Anna", "Jukka", "Maria", "Minni"]
```

### Alkion muuttaminen taulukossa

Olemassa olevan alkion arvoa voi muuttaa indeksin avulla:
```javascript
let maat = ["Suomi", "Ruotsi", "Norja"]
maat[1] = "Tanska"   // Muutetaan indeksissä 1 oleva alkio
console.log(maat)    // Tulostaa: ["Suomi", "Tanska", "Norja"]
```

### Taulukon pituus (length)

Taulukon pituuden saa helposti JavaScriptin length-ominaisuudella:

```javascript
let hedelmat = ["omena", "banaani", "kiivi"]
console.log(hedelmat.length)   // Tulostaa: 3
```

### Taulukon läpikäyminen silmukalla

Taulukon kaikki alkiot voi käydä läpi silmukan avulla:
```javascript
let kaupungit = ["Helsinki", "Tampere", "Oulu"];

for (let i = 0; i < kaupungit.length; i++) {
    console.log(kaupungit[i]);
}

// Tulostaa:
// Helsinki
// Tampere
// Oulu
```

### Yhteenveto:

- Taulukko (array) on muuttuja, joka tallentaa useita arvoja yhteen paikkaan.
- Arvot (eli alkiot) ovat numeroituja kokonaislukuindekseillä alkaen luvusta 0.
- Taulukon luonnissa käytetään hakasulkuja [] 
- Yksittäistä taulukon alkiota käytetään indeksillä, joka kirjoitetaan hakasulkujen sisään

## Harjoitukset

### Harjoitus 20

Tee HTML-sivu, jossa on JavaScript-taulukko, johon tallennat kolme lempiväriäsi. Tulosta sitten JavaScriptin avulla taulukon ensimmäinen väri sivulle.

**Vinkki:** Käytä ```document.getElementById``` ja ```.innerHTML``` arvon näyttämiseen.


### Harjoitus 21
Luo HTML-sivu, jossa teet JavaScript-taulukon kolmesta eri eläimestä. Tulosta taulukon pituus (eli alkioiden määrä) sivulle.

**Vinkki:** Käytä taulukon ```.length``` -ominaisuutta.

### Harjoitus 22

Luo HTML-sivu, jossa on ensin taulukko kahdesta kaupungista. Lisää JavaScriptillä yksi kaupunki lisää taulukkoon. Lopuksi tulosta koko taulukko sivulle niin, että jokainen kaupunki näkyy omalla rivillään.

**Vinkki:** Käytä ```.push()```-metodia lisätäksesi uuden kaupungin taulukkoon. Käytä lisäksi silmukkaa tulostamiseen.


## Mallivastaukset harjoituksiin

### Mallivastaus 20

```javascript
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Harjoitus 20</title>
</head>
<body>
    <p id="tulos"></p>

    <script>
        let varit = ["sininen", "punainen", "keltainen"]
        document.getElementById("tulos").innerHTML = "Ensimmäinen väri on: " + varit[0]
    </script>
</body>
</html>
```

### Mallivastaus 21

```javascript
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Harjoitus 21</title>
</head>
<body>
    <p id="tulos"></p>

    <script>
        let elaimet = ["kissa", "koira", "hevonen"]
        document.getElementById("tulos").innerHTML = "Eläinten määrä: " + elaimet.length
    </script>
</body>
</html>
```

### Mallivastaus 22

```javascript
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Harjoitus 22</title>
</head>
<body>
    <div id="kaupungit"></div>

    <script>
        let kaupungit = ["Helsinki", "Tampere"]
        kaupungit.push("Oulu")

        let tulos = ""
        for (let i = 0; i < kaupungit.length; i++) {
            tulos += kaupungit[i] + "<br>"
        }

        document.getElementById("kaupungit").innerHTML = tulos
    </script>
</body>
</html>
```