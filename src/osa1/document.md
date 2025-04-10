# HTML-dokumentti
 
HTML-dokumentilla on selkeä ja tarkasti määritelty rakenne. Alla on yksinkertaisen HTML5-dokumentin peruspohja.
 
```html
<!DOCTYPE html>
<html lang="fi">
  <head>
    <meta charset="UTF-8">
    <title>Sivun otsikko</title>
  </head>
  <body>
    <h1>Sivun otsikko</h1>
    <p>Tämä on tekstikappale.</p>
  </body>
</html>
```
 
## `<!DOCTYPE html>`
 
Dokumentti alkaa aina dokumenttityypillä (`DOCTYPE`), joka määrittelee, mitä HTML-suositusta dokumentti noudattaa. Dokumenttityyppi on tärkeä määritellä, koska sen perusteella  selaimet tulkitsevat dokumentin merkkausta. Vuosien saatossa HTML:stä on tullut useita suosituksia, joista jokaisella on oma dokumenttityyppinsä.
 
Aikaisemmissa suosituksissa dokumenttityyppien määrittelyt olivat pitkiä tekstipätkiä. HTML5-suosituksen myötä dokumenttityyppi typistettiin lyhyeksi ja ytimekkääksi.
 
## `<html lang="fi">`
 
`html`-elementti aloittaa koko HTML-dokumentin eli se määrittelee koko dokumentin juuren.
 
Elementin aloitustagiin on hyvä sijoittaa myös lang-määrite, jolla kerrotaan millä kielellä dokumentin sisältö on esitetty. Tätä tietoa hyödyntävät mm. puhesyntetisoijat ja erilaiset käännöstyökalut. Arvo määritellään kielikoodilla, esimerkiksi `fi` (suomi), `en` (englanti) ja `sv` (ruotsi). Dokumentti voi sisältää ainoastaan yhden `html`-elementti.
 
## `<head>`
 
`head`-elementti sisältää HTML-dokumentin metadatan eli sen tiedon, joka ei suoraan
näy sivulla. Sinne sijoitetaan paljon erilaista tietoa sivusta, kuten esimerkiksi sivun merkistökoodauksesta sekä sivulle linkitetyt tyylimäärite- ja skriptitiedostot. Dokumentti voi sisältää ainoastaan yhden `head`-elementin.
 
## `<meta charset="UTF-8">`
 
`meta`-elementti määrittelee HTML-dokumentin metatietoa, kuten sivun merkistökoodauksen, kuvauksen, avainsanat, tekijät ja selainikkunan määritykset.
 
Yleisin meta-elementti on sivun merkistökoodauksen määrittely. HTML5 suosittelee sivun koodaamista UTF-8 –merkistökoodauksella, koska sillä saadaan kattava merkistötuki kohtuullisella tilankulutuksella. Tällöin sivu tallennetaan tekstieditorissa UTF-8 -muodossa ja käytetty merkistökoodaus kerrotaan meta-tagissa.
 
## `<title>`
 
`title`-elementti määrittelee HTML-dokumentin nimen tai otsikon, joka tyypillisesti näkyy selaimen välilehden tekstinä tai tallennetun kirjanmerkin tekstinä.
 
Huomaa, että dokumentin nimi on usein eri kuin sivun ensimmäinen otsikko, sillä otsikko on usein kiinteä osa sivun kokonaisuutta ja usein se ei toimi dokumentin nimenä. Dokumentti voi sisältää ainoastaan yhden `title`-elementin.
 
## `<body>`
 
`body`-elementti sisältää HTML-dokumentin oleellisimman osuuden eli itse sisällön. Sille voi määritellä myös yhteisiä elementtimääritteitä, kuten `lang`, `class` ja `id`. Huomaa, että dokumentilla voi olla ainoastaan yksi `body`-elementti.