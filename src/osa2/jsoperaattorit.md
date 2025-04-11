## JavaScriptin perusteet – Operaattorit

Operaattorit ovat symboleita, joilla voidaan tehdä laskutoimituksia ja muokata muuttujien arvoja. Ne ovat ohjelmoinnin perusrakennuspalikoita, aivan kuten matikassa + ja -.

### Laskuoperaattorit

Yksi tärkeimmistä operaattoreista on **sijoitusoperaattori** jota merkitään yhdellä yhtysuuruusmerkillä (=). Se on tavallaan suora määräys tietokoneelle, että **sijoita merkin oikealla puolella oleva arvo vasemmalla olevaan muuttujaan**. Muista, aina oikealta vasemmalle.

Näitä esimerkkejä oli jo aiemmin, mutta tässä vielä kertauksena:

```javascript
let nimi
nimi = "Eino"
let ika = 35
```

JavaScript tukee kaikkia tuttuja peruslaskuja:

**Yhteenlasku (+)**
- Numeroiden laskemiseen:

```javascript
let a = 10 + 5 // 15
```

- Tekstien yhdistämiseen (yhdistely eli katenointi yhdistää merkkijonot):
```javascript
let tervehdys = "Hei " + "Maija" // "Hei Maija"
```

**Vähennyslasku (-)**
- Vähentää luvut normaalisti.

```javascript
let erotus = 20 - 4 // 16
```

**Kertolasku (*)**
- Kertoo kaksi lukua.

```javascript
let tulo = 6 * 3 // 18
```

**Jakolasku (/)**
- Jakaa luvut.

```javascript
let jako = 30 / 5 // 6
```

**Potenssi (\*\*)**
- Korottaa luvun potenssiin.

```javascript
let potenssi = 2 ** 4 // 16 (eli 2*2*2*2)
```

**Jakojäännös (modulo) (%)**
- Palauttaa jakolaskun jakojäännöksen

```javascript
let jakojaannos = 10 % 3 // 1
```

### Muuttujan arvon muuttaminen

**Kasvatus yhdellä (++)**
- Lisää muuttujan arvoon yksi:

```javascript
let luku = 4
luku++ // nyt luku on 5
```

**Vähennys yhdellä (--)**
- Vähentää yhdellä:

```javascript
let luku = 4
luku-- // nyt luku on 3
```

### Toimintojen järjestys
Operaattoreilla on tietty laskujärjestys (kuten matikassa):

- Sulut ()
- Potenssi **
- Kertolasku, jakolasku ja jakojäännös *, /, %
- Yhteen- ja vähennyslasku +, -

Esimerkiksi:

```javascript
let tulos = (2 + 3) * 4 // tulos on 20, koska sulut lasketaan ensin
```

### Yhteenveto
- Käytä operaattoreita laskemiseen ja tekstin yhdistämiseen.
- \+ toimii sekä lukujen että tekstin kanssa.
- Modulo (%) kertoo, mitä jää jäljelle jaossa.
- ++ ja -- ovat lyhenteitä yhden lisäämiselle tai vähentämiselle.
- Käytä sulkuja selkeyttämään laskujen järjestystä.


## Harjoitukset

### Harjoitus 6
Laske kahden luvun summa ja näytä tulos sivulla (innerHTML-tekniikkla)

### Harjoitus 7
Vähennä yksi luku toisesta ja tulosta tulos alert-ikkunassa.

### Harjoitus 8
Kerro kaksi lukua ja näytä tulos console.log-komennolla.

### Harjoitus 9
Laske jakojäännös kahdesta luvusta ja näytä tulos HTML:ssä.

### Harjoitus 10
Lisää muuttujaan yksi ja näytä uusi arvo innerHTML:ssä.


## Harjoitusten mallivastaukset

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Harjoitus 6 – Summa</title>
</head>
<body>
  <p id="summa"></p>
  <script>
    let luku1 = 7
    let luku2 = 5
    let summa = luku1 + luku2
    document.getElementById("summa").innerHTML = "Summa on: " + summa
  </script>
</body>
</html>
```

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Harjoitus 7 – Vähennys</title>
</head>
<body>
  <script>
    let luku1 = 10
    let luku2 = 4
    let erotus = luku1 - luku2
    alert("Erotus on: " + erotus)
  </script>
</body>
</html>
```


```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Harjoitus 8 – Kertolasku</title>
</head>
<body>
  <script>
    let luku1 = 6
    let luku2 = 3
    let tulo = luku1 * luku2
    console.log("Tulo on: " + tulo)
  </script>
</body>
</html>
```


```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Harjoitus 9 – Jakojäännös</title>
</head>
<body>
  <p id="mod"></p>
  <script>
    let luku1 = 13
    let luku2 = 5
    let jakojaannos = luku1 % luku2
    document.getElementById("mod").innerHTML = "Jakojäännös on: " + jakojaannos
  </script>
</body>
</html>
```


```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Harjoitus 5 – ++ Operaattori</title>
</head>
<body>
  <p id="luku"></p>
  <script>
    let pisteet = 10
    pisteet++
    document.getElementById("luku").innerHTML = "Pisteet nyt: " + pisteet
  </script>
</body>
</html>
```

### Vertailuoperaattorit

JavaScriptissä on operaattoreita, joita käytetään vertaamaan arvoja keskenään. Näitä kutsutaan vertailuoperaattoreiksi (comparison operators).

Vertailun tuloksena saadaan tosi (true) tai epätosi (false) arvo.

#### Tärkeimmät vertailuoperaattorit
|Operaattori|Selitys|Esimerkki|Tulos
|-----------|-------|---------|-----
|==	|Onko arvot yhtäsuuret?|a == 6|false
|!=	|Onko arvot erisuuret?|a != 6|true
|>	|Onko suurempi kuin?|	a > 4|true
|<	|Onko pienempi kuin?|	a < 4|false
|>=	|Onko suurempi tai yhtä suuri?|a >= 5|true
|<=	|Onko pienempi tai yhtä suuri?|a <= 4|false


### Esimerkkejä vertailuista
Alla on kolme yksinkertaista esimerkkiä, jotka voit avata selaimessa ja nähdä tulokset suoraan:

**esimerkki4.html**
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Vertailuoperaattorit – Esimerkki 4</title>
</head>
<body>
  <p id="tulos1"></p>
  <script>
    let a = 5
    let vertailu = (a == 5)
    document.getElementById("tulos1").innerHTML = "Onko a yhtä kuin 5? " + vertailu
  </script>
</body>
</html>
```

**esimerkki5.html**
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Vertailuoperaattorit – Esimerkki 5</title>
</head>
<body>
  <p id="tulos2"></p>
  <script>
    let a = 5
    let vertailu = (a < 4)
    document.getElementById("tulos2").innerHTML = "Onko a pienempi kuin 4? " + vertailu
  </script>
</body>
</html>
```

**esimerkki6.html**
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Vertailuoperaattorit – Esimerkki 6</title>
</head>
<body>
  <p id="tulos3a"></p>
  <p id="tulos3b"></p>
  <p id="tulos3c"></p>

  <script>
    let a = 5
    document.getElementById("tulos3a").innerHTML = "a != 6 on " + (a != 6)
    document.getElementById("tulos3b").innerHTML = "a >= 5 on " + (a >= 5)
    document.getElementById("tulos3c").innerHTML = "a <= 4 on " + (a <= 4)
  </script>
</body>
</html>
```