
## JavaScriptin perusteet – Ohjausrakenteet ja lohko

Ohjausrakenteet ovat ohjelmoinnissa keinoja hallita, mitä osia koodista suoritetaan ja missä järjestyksessä. Ne mahdollistavat esimerkiksi ehtojen tarkistamisen ja toistuvien toimintojen suorittamisen. Ilman ohjausrakenteita ohjelma suorittaisi koodirivit vain ylhäältä alas, yksi kerrallaan, ilman mahdollisuutta valintoihin tai toistoihin.

Lohko tarkoittaa joukkoa koodirivejä, jotka kuuluvat yhteen. Lohko merkitään JavaScriptissä aaltosulkujen ```{ }``` sisään. Esimerkiksi if-ehtolauseessa lohko kertoo, mitä tapahtuu, jos ehto toteutuu.

Tyypillisesti eri ohjausrakenteet ovat alla olevan muotoisia:
```javascript
ohjauskomento (ehto) {
    koodilause
    koodilause
    koodilause
}
```

Yllä olevassa esimerkissä "ohjauskomento" voisi olla esimerkiksi ```while``` tai ```if```. Ohjauskomennon jälkeen on normaalisti suluissa oleva ehto (tai muun tyyppinen  lauseke, kuten ```for```-rakenteessa), joka määrää, suoritetaanko kyseinen lohko. 

Lohko suoritetaan aina kokonaisuudessaan tai jätetään kokonaan väliin – yksittäisiä lauseita ei hypitä yli. Näin lohko sitoo useamman lauseen yhdeksi ehjäksi kokonaisuudeksi.

### Esimerkkejä

**if-else (ehtolause):**

Alla olevassa if-else-rakenteessa tarkistetaan, onko muuttujan ```numero``` arvo suurempi kuin 0. Jos ehto ```numero > 0``` on tosi, suoritetaan lohkossa oleva koodi ja tulostetaan "Luku on positiivinen". Jos ehto ei ole tosi, siirrytään else-haaraan ja tulostetaan "Luku ei ole positiivinen". Tämä rakenne on hyödyllinen silloin, kun halutaan tehdä eri asioita tilanteen mukaan. Ohjelma siis tekee joko/tai -päätöksiä annetun ehdon perusteella.

```javascript
let numero = 5;
if (numero > 0) {
  console.log("Luku on positiivinen");
} else {
  console.log("Luku ei ole positiivinen");
}
```

**while (toistolause, kunnes ehto ei enää pidä paikkaansa):**

While-rakenteessa ohjelma toistaa lohkon sisällä olevaa koodia niin kauan kuin annettu ehto on tosi. Tässä esimerkissä ehto on ```i < 3```, eli toisto jatkuu niin kauan kuin muuttuja ```i``` on pienempi kuin 3. Jokaisella kierroksella tulostetaan "Toisto numero: " ja muuttujan ```i``` arvo. Lohkon viimeisellä rivillä ```i```-muuttujaa kasvatetaan yhdellä, jotta toisto lopulta päättyy. Tämä rakenne sopii tilanteisiin, joissa ei välttämättä tiedetä etukäteen montako kertaa toistoa tarvitaan.

```javascript
let i = 0;
while (i < 3) {
  console.log("Toisto numero: " + i);
  i++;
}
```

**for (toistolause, jolla toistoa ohjataan laskurimuuttujalla):**

For-rakenteessa toisto tapahtuu ennalta määrätyn määrän kertoja. Esimerkissä toisto alkaa, kun muuttuja ```i``` on 0, ja jatkuu niin kauan kuin ```i < 5```. Jokaisella kierroksella tulostetaan "Luku: " ja ```i```-muuttujan arvo. Toiston lopussa ```i``` kasvaa yhdellä (```i++```), kunnes se saavuttaa arvon 5 ja ehto ei enää täyty. For-silmukka on kätevä silloin, kun tiedetään tarkalleen, montako kertaa toistoa tarvitaan.

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Luku: " + i);
}
```
