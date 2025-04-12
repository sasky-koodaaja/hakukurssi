
# Funktiot

## Mikä on funktio ohjelmoinnissa ja miksi niitä tarvitaan?

Funktio on ohjelmoinnissa kuin pieni ohjelma ohjelman sisällä. Se on nimetty kokonaisuus koodia, joka suorittaa tietyn tehtävän. Funktio voi ottaa syötteitä (eli parametreja), käsitellä ne, ja palauttaa tuloksen. Funktioita käytetään, jotta ohjelmakoodista tulee **selkeämpää**, **uudelleenkäytettävää**, ja **helpommin ylläpidettävää**.

Ilman funktioita joutuisi kirjoittamaan saman koodin moneen kertaan. Funktio mahdollistaa saman toiminnon suorittamisen monta kertaa eri tilanteissa vain yhdellä koodinpätkällä. Esimerkiksi jos haluat laskea kahden luvun summan useassa kohdassa ohjelmaa, voit tehdä sen yhden summalaskufunktion avulla – etkä toista samaa koodia moneen kertaan.
Miten funktio määritellään JavaScriptissä?

JavaScriptissä funktio voidaan määritellä usealla tavalla, mutta tavallisin perusmuoto on seuraava:

```javascript
function nimi(parametri1, parametri2) {
  // täällä suoritetaan toimintoja
  return tulos;
}
```
- ```function``` on varattu sana, joka kertoo että ollaan tekemässä funktiota.

- nimi on funktion nimi. Sen avulla funktiota voidaan kutsua myöhemmin.

- uluissa ```()``` määritellään parametrit eli syötteet, joita funktio ottaa vastaan.

- altosulkujen ```{}``` sisällä on funktion sisältö eli mitä se tekee. Tämä on lohko, johon tutustiomme jo aiemmin.

- ```return``` palauttaa arvon funktion kutsujalle. Jos return-lausetta ei ole, funktio palauttaa undefined.

## Esimerkit

### Esimerkki 1: yksinkertainen tervehdysfunktio
```javascript
function tervehdi() {
  console.log("Hei maailma!")
}
```

#### Selitys vaiheittain:

1. ```tervehdi()``` määrittelee funktion nimeltä tervehdi, joka ei ota mitään parametreja.

2. ```{ ... }``` sisältää funktion rungon.

3. ```console.log("Hei maailma!")``` tulostaa tekstin konsoliin.

4. Funktiota ei suoriteta automaattisesti – se pitää kutsua erikseen. Kutsu on ikäänkuin uusi komentosana, joka voi esiintyä muualla koodissa omana lauseenaan. Kutsu voidaan myös kytkeä jonkin tapahtuman seuraukseksi, esimerkiksi käyttäjä klikkaa painiketta, joka kutsuu funktiota. Funktion kutsu tämän funktion tapauksessa on yksinkertaisesti rivi, jossa on funktion nimi ja sulut, jotka ovat pakolliset.

```javascript
tervehdi()
```

Olet jo aiemmin käyttänyt JavaScriptin sisäisivä funktioita ```alert()``` ja ```console.log()```. Ne on samalla tavalla määritelty ja ovat osa JavaScript-kieltä. Jou on siis koodannut nämä funktiot valmiiksi ja nyt me voimme vain käyttää niitä suoraan, eikä meidän tarvitse edes tietää, mitä funktion sisällä tapahtuu. Riittää, että tiedämme esimerkiksi sen, että ```alert("moi")``` avaa pienen ikkunan ja tulostaa sen sisään parametrina antamamme viestin. Tämä on esimerkki uudelleenkäytettävyydestä.

### Esimerkki 2: Funktio, joka laskee summan

```javascript
function laskeSumma(a, b) {
  return a + b
}
```
#### Selitys vaiheittain:

1. ```function laskeSumma(a, b)``` määrittelee funktion nimeltä laskeSumma, joka ottaa kaksi parametria: ```a``` ja ```b```.

2. ```return a + b``` laskee muuttujien summan ja palauttaa sen.

Funktiota kutsutaan näin:

```javascript
let tulos = laskeSumma(3, 4)    // tulos saa arvon 7
console.log(tulos)              // tulostaa: 7
```
#### Selitys:
Funktion kutsussa sulkujen sisällä on kaksi lukua; 3 ja 4.Kutsuttaessa ensimmäinen näistä parametreista, eli 3, asetetaan ensimmäisen funktion parametrimuuttujan ```a``` arvoksi. Toinen parametri 4 menee parametrimuuttujan ```b``` arvoksi. Tässä vaiheessa ohjelman suoritus "hyppää" funktioon, jossa siis a:n arvona 3 ja b:n arvona 4. 

Sen jälkeen funktio suorittaa laskutoimituksen ja **palauttaa** vastauksen. Samalla funktio päättyy ja ohjelman suoritus palaa takaisin sinne, missä funktiota kutsuttiin.  Kyseisellä rivillä on sijoituslause ```let tulos = laskeSumma(3, 4)``` jolloin funkiokutsun palautusarvo sijoitetaan muuttujan ```tulos``` arvoksi.

Lopuksi ohjelma tulostaa saamansa arvon näytölle.

Klikkaa alla olevaa kuvaa, niin näet yksinkertaisena animaationa kyseisen funktiokutsun etenemisen vaihe vaiheelta.

<a href="https://youtu.be/YZe5mIHbzkE" target=_blank><img src="funcani.jpg"></a>


### Yhteenveto

Funktiot tekevät koodista loogisempaa, jakamalla sen pienempiin osiin. JavaScriptissä funktion voi luoda helposti function-avainsanalla. Harjoittelemalla yksinkertaisilla esimerkeillä opit nopeasti, kuinka tehokas työkalu funktio on ohjelmoinnissa!

