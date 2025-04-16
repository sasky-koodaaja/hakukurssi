# API-rajapinnat

API on lyhenne sanoista Application Programming Interface ja se tarjoittaa liittymää eli rajapintaa, jonka välityksellä eri sovellukset voivat keskustella keskenään.

Kuvittele, että haluat tilata ruokaa ravintolasta. Sinun ei tarvitse tietää, miten kokki laittaa ruokaa, vaan riittää, että kerrot tarjoilijalle mitä haluat. Samalla tavalla ohjelmat käyttävät API-rajapintoja puhuakseen toisilleen. API on siis joukko sääntöjä ja ohjeita, joiden avulla ohjelmat voivat pyytää ja vaihtaa tietoja.

Kun käytät API-rajapintaa, sinun täytyy tietää kaksi tärkeää asiaa:

1. Minne lähetät pyynnön (eli verkkopalvelun osoite, esim. https://www.esimerkki.fi).

2. Missä muodossa haluamasi tieto lähetetään tai vastaanotetaan (usein JSON-formaatissa, joka on kuin selkeä tekstirakenne).

Esimerkki:

- Haluat hakea säätiedot ”Helsinki”-nimiselle kaupungille.
- API määrää, että pyyntö tehdään osoitteeseen https://api.saa.fi/helsinki?päivä=2025-04-16 (tämä on vain mielikuvitusosoite).
- Vastauksena voi tulla JSON-tiedosto, jossa lukee esimerkiksi:

```json
{
  "kaupunki": "Helsinki",
  "lämpötila": 15,
  "säätila": "Aurinkoinen"
}
```

Ohjelmasi ei tarvitse tietää miten säätiedot on kerätty tai miten palvelu toimii sisäisesti. Riittää, että API kertoo, miten pyyntö pitää tehdä ja miten tieto palautuu.

### Miksi API on kätevä?

- Voit hyödyntää valmiita tietoja tai palveluita ilman, että sinun tarvitsee rakentaa kaikkea itse.

- Voit esimerkiksi hakea elokuvien tietoja, musiikkia, karttoja tai vaikkapa vitsejä.

### Esimerkkejä avoimista ja ilmaisista API-rajapinnoista

Kaikki alla mainitut API:t eivät vaadi rekisteröitymistä tai mitään erityistä avainta, joten voit kokeilla niitä heti.

1. Cat Facts (https://catfact.ninja/)
    - Palauttaa erilaisia satunnaisia faktoja kissoista.

2. Dog Facts & Dog API (https://dog.ceo/dog-api/)
    - Palauttaa tietoja koiraroduista ja satunnaisia kuvia koirista.

3. Chuck Norris Jokes (https://api.chucknorris.io/)
    - Tarjoaa hauskoja (ja joskus kuivahkoja) Chuck Norris -vitsejä.

4. Advice Slip API (https://api.adviceslip.com/)
    - Antaa satunnaisia neuvoja tai elämänohjeita.

5. Bored API (https://www.boredapi.com/)
    - Ehdottaa tekemistä, jos sinulla on tylsää.

6. PokeAPI (https://pokeapi.co/)
    - Tarjoaa tietoja Pokémon-hahmoista (nimiä, ominaisuuksia, kuvia jne.).

7. REST Countries (https://restcountries.com/)
    - Palauttaa tietoja eri maiden lipuista, pääkaupungeista ja kielistä.

8. Random User (https://randomuser.me/)
    - Luo satunnaisia ”feikkikäyttäjiä” (esim. nimi, sähköposti), joita voi käyttää testaamiseen.

9. Public Holiday API (https://date.nager.at/)
    - Näyttää yleiset pyhäpäivät eri maissa.

10. Open Trivia Database (https://opentdb.com/api_config.php
    - Tarjoaa tietokilpailukysymyksiä (triviaa) monista eri kategorioista.

### Miten näitä kokeillaan?

- Avaa verkkoselain.

- Liitä osoiteriville jonkin API:n kutsu, esimerkiksi https://api.chucknorris.io/jokes/random.

- Näet JSON-rakenteisen vastauksen, joka sisältää Chuck Norris -vitsin. Se voi näyttää tältä (lyhennetty esimerkki):

```json
{
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "abc123",
    "value": "Chuck Norris can divide by zero."
}
```

Tämä on yksinkertaisin tapa ”puhua” API:lle. Varsinaisessa koodissa tehdään yleensä fetch-pyyntö tai joku vastaava tapa hakea tietoa, ja sitten koodi käsittelee tulokset.

Yhteenveto: API on siis kuin ravintolan menu, josta ohjelmat voivat tilata tietoa tai palveluita. Sinä voit vain seurata rajapinnan (eli API-dokumentaation) ohjeita ja pyytää haluamasi tiedot – sinun ei tarvitse tietää, miten itse ravintola (palvelu) on toteutettu sisäisesti. Kokeilemalla avoimia API-rajapintoja opit, miten helppoa tiedon hakeminen ohjelmallisesti voi olla!