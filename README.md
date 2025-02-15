# kaplay-space-battle-implement-movements

Et repo hvor børn selv skal implementere koden til at bevæge et 'spaceship' og dets 'bullets' i jagten på at nedskyde nogle "Alien 'Beanies'" i et "Space Battle" spil lavet med [KAPLAY](https://kaplayjs.com/), hvor al anden kode er implementeret.

## Nødvendigt software

For selv at kunne implementere koden til dette spil, er det nødvendigt at man har Node.js installeret.

Node.js er dog heldigvis ret simpelt at installere, hvorfor man blot skal følge dette link for at installere det:

- [Node.js](https://nodejs.org/en)

## Download denne kode

For selv at komme i gang, skal du først hente denne kode, hvilket kan gøres på 2 måder via:

1. [git](https://git-scm.com/)
2. zip download

### Hent koden via 'git'

Hvis du ved, hvad 'git' er, så kan du hente dette repos kode ved køre følgende kommando fra din terminal/kommandolinje:

```bash
git clone https://github.com/coding-pirates-hillerod/kaplay-space-battle-implement-movements.git
```

Når du har kørt denne kommando, så skal du for nu blot gå ned i den hentede kode via følgende kommando, evt. åbn det IDE du bruger, og så gå til næste afsnit for at læse mere om, hvad du skal:

```bash
cd kaplay-space-battle-implement-movements
```

### Hent koden via 'zip download'

Har du ikke har 'git' installeret, så kan du hente dette repos kode ved at downloade det som en zip fil. Det gør ved først at trykke på grønne knap med teksten <code>Code</code>, og så efter trykke på <code>Download ZIP</code> fra drop down menuen

<img width="497" alt="Screenshot 2025-02-07 at 13 25 06" src="https://github.com/user-attachments/assets/66009d86-35b1-4ced-ace4-5d2be6d67934" />

Pak derefter den downloade zip fil ud, og åbn repoet i den IDE du bruger.

## Om dette repo

I dette repo vil du kunne finde følgende 2 mapper:

1. finished-code
2. starter-code

### Mappen 'finished-code'

Mappen kaldet 'finished-code' indeholder den komplet færdige kode, hvor koden til bevægelse af spillets 'spaceship' og dets 'bullets' er lavet.

**MEN** hvis du vitterligt gerne vil lære at kode, så brug kun denne mappe som en hjælp, hvis nu du går i stå e.lign. For du lærer nemlig ikke noget af bare at kopiere koden fra denne mappe, vel!?

### Mappen 'starter-code'

Mappen kaldet 'starter-code' er den mappe, hvor du selv skal implementere koden til at bevæge spillets 'spaceship' og 'bullets', således at du herefter har dit eget komplet fungerende spil(!).

## Inden du går i gang

Inden du går i gang med denne opgave, så skal du først lige have installeret de pakker, som spillet afhænger af.

Gå derfor først ned i <code>starter-code</code> mappen vhja. denne kommando fra din terminal/kommandolinje:

```bash
cd starter-code
```

Når det er gjort, så skal man dernæst installere de pakker, som spillets kode afhænger af. Kør derfor denne kommando fra terminalen/kommandolinjen for at installere dem:

```bash
npm i
```

Så snart pakkerne er installeret kan man så bare køre denne sidste kommando, hvorefter ens spil vil kunne ses i ens browser, når man følger det link som vises i terminalen (linket plejer at være <code>http://localhost:3001/</code>):

```bash
npm run dev
```

Følger man således linket, så åbnes ens browser, og man skulle gerne se dette billede:

<img width="1324" alt="Screenshot 2025-02-15 at 14 32 13" src="https://github.com/user-attachments/assets/23e7c130-e1d5-487f-bb5c-877b614cfcd2" />

Og ja, trykker man herfra på <code>space</code> tasten på sit keyboard, så begynder spillet, hvor man vil se et 'spaceship' ude i venstre side af skærmen, der dog hverken kan bevæge sig op og ned, og ej heller rigtig skyde nogle 'bullets' i retning mod de "Alien 'beanies'", som vilkårligt kommer flyvende ind fra skærmens højre side:

<img width="1278" alt="Screenshot 2025-02-15 at 14 43 04" src="https://github.com/user-attachments/assets/08b36f37-ab54-47c4-a53d-1a12344d2eab" />

Og når ens 'spaceship' på et tidspunkt rammes af en af der grusomme "Alien 'beanies'", så er spillet så at sige slut, og man vil således se dette sidste skærmbillede (hvorfra man dog kan trykke på ens <code>space</code> tast for igen at spille spillet, som vist på forrige skærmbillede):

<img width="1211" alt="Screenshot 2025-02-15 at 14 56 42" src="https://github.com/user-attachments/assets/c559e9be-3f18-463a-a184-a3968c7cb975" />

## Forklaring af kodestrukturen

Før du selv skal kode din løsning på at få spillets 'spaceship' til at kunne bevæge sig op og ned på skærmen, og dets 'bullets' til at bevæge sig fra venstre til højre, så kommer her lige en kort gennemgang af, hvordan koden i <code>starter-code</code> mappen er strukturet, så du forstår den bedre inden du går i gang.

### 'src' mappen

Selve koden til spillet findes under <code>src</code> mappen, hvor du vil finde én JavaScript fil med navet <code>main.js</code>, og én mappe med navnet <code>scenes</code>.

#### main.js

I <code>main.js</code> filen findes den kode som starter hele spillet. Denne fil skal **ikke** bruges til denne opgave (men nu ved du i hvert fald lidt om, hvad den bruges til).

#### 'scenes' mappen

I <code>scenes</code> mappen findes følgende 3 filer, hvoraf det **kun** er <code>gameScene.js</code> filen du skal kode i:

1. gameOverScene.js
2. gameScene.js
3. mainMenuScene.js

Og kort fortalt bruges disse filer på følgende måde i nedenstående rækkefølge:

##### mainMenuScene.js

Filen <code>mainMenuScene.js</code> indeholder den kode, som er det første som vises på skærmen, når projektet køres med <code>npm run dev</code>.

_Indholdet i denne fil skal vi **ikke** rode med i denne omgang._

##### gameScene.js

Filen <code>gameScene.js</code> indeholder koden til selve spillet - altså koden som får de dersens "Alien 'beanies'" til at bevæge sig fra højre mod venstre, og senere både dit 'spaceship' og dets 'bullets' til at bevæge sig (når DU snart har kodet det).

Så .. det **er** altså i denne fil at du skal skrive din _vilde_ kode (mere herom lige om lidt)!

##### gameOverScene.js

Filen <code>gameOverScene.js</code> indeholder koden for det der vises på skærmen, når ens 'spaceship' er blevet ramt af en "Alien 'bean'", og spillet så at sige er slut.

_Denne fil skal vi så heller **ikke** rode med her._

## Kod selv dit 'spaceship' og 'bullets' bevægelser

Freakin' endelig .. nu skal det 'vilde' ske! For nu skal DU nemlig selv til at kode dette spil, så både 'spaceship' og 'bullets' bevæger sig, således at dette spil færdiggøres og bliver .. **episk** (_eller noget.._)!

_Meenn_ .. du får selvfølgelig lidt hjælp! Så det kommer herunder.

### Det du skal kode

Det du skal kode er følgende funktionalitet:

1. Når en spiller trykker på keyboardets piltast der peger opad, så skal spillets 'spaceship' bevæge sig opad på skærmen (dog uden at måtte "forsvinde" ud af skærmen)
2. Når en spiller trykker på keyboardets piltast der peger nedad, så skal spillets 'spaceship' bevæge sig nedad på skærmen (dog igen uden at måtte "forsvinde" ud af skærmen)
3. Når spilleren affyrer en 'bullet' fra sit 'spaceship' - hvilket sker når han/hun trykker på keyboardets "space" tast - så den affyrede bullet bevæge sig fra venstre mod højre

### Skriv din kode i 'gameScene.js'

Som allerede beskrevet, så er det i filen kaldet <code>gameScene.js</code>, at du skal skrive din kode.

I denne fil vil du derfor på linje **7**, **11** og **29** kunne finde en kommentar som følgende, under hvilken det er at du skal skrive din kode:

```javascript
// SKRIV DIN KODE HERUNDER
```

Din kode under de 2 første kommentarer af disse (dvs. dem på hhv. linje 7 og 11) vil være for at kunne bevæge spillets 'spaceship' op og ned, mens din kode under sidste kommentar (dvs. den på linje 29) vil være for at bevæge en 'bullet' fra venstre mod højre.

Og i øvrigt kan et hint være, at du for både dit 'spaceship' og 'bullet' _**måske, måske**_ skal bruge <code>move()</code> metoden på hver af disse for at få dem til at bevæge sig .. ;)

## Held og lykke!

Forhåbentlig bliver du med ovenstående selv i stand til at kode spillet færdigt. Så nu er det bare om at komme i gang med at .. **kode, kode, kode!**

## Contributions

Denne opgave (og koden dertil) er skabt med bidrag fra:

- [Jonas Bak Phillipson](https://github.com/jbakchr) (_Formand og Kaptajn for Coding Pirates Hillerød_)
