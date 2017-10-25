(vsechny prikazy se vztahuji k root adresari vuci package.json)

# Instalace pro vyvoj jadra
Pokud se stane ze potrebujes zmenit nejakou funkci jadra wysiwygu, je treba pripravit prostredi pro vývoj:

1. nainstaluj nodejs (LTS verzi) z https://nodejs.org/en/

2. nainstaluj zavislosti jadra: ```npm install```

3. spust si prekladac: ```npm run start:dev```

4. upravuj... 

5. jakmile mas hotovo, je vhodne buildnout produkcni (minimalizovanou) verzi

# Struktura elementů

- kazdy element ma svou slozku: ```/elements/{nazevelementu}/```
- kazdy element ma soubory:
- ```{nazevelementu}.js``` (definice elementu)
- ```{nazevelementu}-preview.html``` (sablona s dizajnem pro editor)
- ```{nazevelementu}-properties.html``` (sablona s hejblatkama pro editor)


# Seznam připravených příkazů pro prekladač

- Spusteni realtime prekladace pri vyvoji (sleduje zmeny souboru a vse spoji do balicku)

```npm run start:dev```

- Spusteni ziveho prekladace pri publikaci (sleduje zmeny souboru a vse spoji do balicku a minimalizuje)

```npm run start:dist```

- Jednorazove spusteni prekladace pri vyvoji

```npm run build:dev```

- Jednorazove spusteni prekladace pri vyvoji

```npm run build:dist```

# Adresa kde je testovaci soubor

http://www.vyfakturuj.czlc/utils/wbk-wysiwyg/example/test.html
