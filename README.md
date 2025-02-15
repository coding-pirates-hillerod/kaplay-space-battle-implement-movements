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

Og når ens 'spaceship' afslutningsvist rammes af en af der grusomme "Alien 'beanies'", så er spillet så at sige slut, og man vil således se dette sidste skærmbillede (hvorfra man dog kan trykke på ens <code>space</code> tast for igen at spille spillet, som vist på forrige skærmbillede):

<img width="1211" alt="Screenshot 2025-02-15 at 14 56 42" src="https://github.com/user-attachments/assets/c559e9be-3f18-463a-a184-a3968c7cb975" />
