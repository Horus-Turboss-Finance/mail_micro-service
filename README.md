<div align="center">
  <h1>Cash Eyes (mail-service api documentation)</h1>
  <h6>Ce repository contien toutes les routes (et routines) du micro service d'email de Cash Eyes.</h6>
</div>

### Table des matières.
- [Packages](#packages)
  - [Dev-packages](#dev-packages)
  - [Packages](#packages-1)
- [Backend installation](#backend-installation)
- [Démarer le backend de l'application](#démarer-le-backend-de-lapplication)
- [API](#api)
  - [Notice d'expiration période d'essaie](#notice-dexpiration-période-dessaie)
    - [URL](#url)
  - [Rappel d'expiration période d'essaie](#rappel-dexpiration-période-dessaie)
    - [URL](#url-1)
  - [Invitation utilisateur](#invitation-utilisateur)
    - [URL](#url-2)
  - [Invitation beta](#invitation-beta)
    - [URL](#url-3)
  - [Recettes](#recettes)
    - [URL](#url-4)
  - [Factures](#factures)
    - [URL](#url-5)
  - [Update Notification](#update-notification)
    - [URL](#url-6)
  - [Notification d'actions](#notification-dactions)
    - [URL](#url-7)
  - [Mot de passe oublié](#mot-de-passe-oublié)
    - [URL](#url-8)
  - [Relance](#relance)
    - [URL](#url-9)
- [About :](#about-)

## Packages
### Dev-packages
- `@commitlint/cli` - Un module très utile pour la normalisation des noms de commit git [^1].
- `@commitlint/config-conventional`  - configuration conventionnel de commitlint [^2]. 
- `@types/express` - Définitions des types du module express [^3].
- `@types/jest` - Définitions des types du module jest [^4].
- `@types/node` - Définitions des types du module nodejs [^5].
- `@types/nodemailer` - Définitions des types du module nodemailer [^6].
- `@types/supertest` - Définitions des types du module supertest [^7].
- `@typescript-eslint/eslint-plugin` - Un plugin ESLint qui fournit des règles de contrôle pour les bases de code TypeScript [^8].
- `@typescript-eslint/parser` - Un analyseur ESLint qui exploite TypeScript ESTree pour permettre à ESLint d'analyser le code source TypeScript [^9].
- `eslint` - ESLint est un outil permettant d'identifier et de signaler les schémas trouvés dans le code ECMAScript/JavaScript [^10].
- `eslint-plugin-jest` - ESLint plugin for Jest [^11].
- `husky` - Husky améliore vos commits et plus encore [^12].
- `jest` - Des tests JavaScript délicieux [^13].
- `nodemon` - nodemon est un outil qui redémarre automatiquement l'application node lorsque des changements sont détectés [^14].
- `supertest` - Module pour teste HTTP [^15].
- `ts-jest` - Un transformateur Jest avec le support de la carte source qui vous permet d'utiliser Jest pour tester des projets écrits en TypeScri [^16].
- `ts-node` - Exécution TypeScript et REPL pour node.js, avec support source map et ESM natif [^17].
- `typescript` - Javascript avec typage fort [^18].

### Packages
- `checks` - fonctions pour vérifier le typage [^19].
- `constraint` - fonction de contrainte (surtout texte) [^20].
- `dateformat` - fonction de modifications sur la date [^21].
- `dotenv` - Dotenv est un module à dépendance zéro qui charge les variables d'environnement d'un fichier .env dans process.env [^22].
- `express` - Framework web minimaliste, rapide et sans opinion pour Node.js [^23].
- `mailgen` - Un paquet Node.js qui génère des e-mails HTML propres et réactifs pour l'envoi de courriers transactionnels [^24].
- `nodemailer` - Envoyer des courriels à partir de Node.js - c'est simple comme bonjour [^25].
- `signed-service` - fonction de signature entre services [^26].


## Backend installation

**1. Packages**

```shell
npm install
```

**2. Créer les fichiers de configuration**

```shell
cd ./config
nano .env
```

```env
# Dans le fichier `.env`
URLAPP=String # L'url de l'application (mettre localhost si vous n'en avez pas)

EMAILPUBLICADRESS=String # L'email manager
EMAILAPIPRIVATEKEY=String # Le mdp pour accéder à cet email manager
```

## Démarer le backend de l'application
Pour démarer le backend vous avez besoin de faire les étapes précédemment expliquées puis les commandes suivantes.
```shell
npm run build
npm run prod
# OR
npm start
```

## API

> [!CAUTION]
> Actuellement, aucune route n'est implémenté.

### Notice d'expiration période d'essaie
#### URL
```http
POST /mail/trial-expiration/notice
```

### Rappel d'expiration période d'essaie
#### URL
```http
POST /mail/trial-expiration/reminders
```

### Invitation utilisateur
#### URL
```http
POST /mail/invitations/users
```

### Invitation beta
#### URL
```http
POST /mail/invitations/beta
```

### Recettes
#### URL
```http
POST /mail/receipts
```

### Factures
#### URL
```http
POST /mail/invoices
```

### Update Notification
#### URL
```http
POST /mail/notification/update
```

### Notification d'actions
#### URL
```http
POST /mail/notification/actions
```

### Mot de passe oublié
#### URL
```http
POST /mail/password/reset
```

### Relance
#### URL
```http
POST /mail/dunning
```

------------
## About :
- `CHANGELOG` [source](./CHANGELOG.md)

Ref :
[^1]: [Url du dépot `@commitlint/cli`](https://www.npmjs.com/package/@commitlint/cli)
[^2]: [Url du dépot `@commitlint/config-conventional`](https://www.npmjs.com/package/@commitlint/config-conventional)
[^3]: [Url du dépot `@types/express`](https://www.npmjs.com/package/@types/express)
[^4]: [Url du dépot `@types/jest`](https://www.npmjs.com/package/@types/jest)
[^5]: [Url du dépot `@types/node`](https://www.npmjs.com/package/@types/node)
[^6]: [Url du dépot `@types/nodemailer`](https://www.npmjs.com/package/@types/nodemailer)
[^7]: [Url du dépot `@types/supertest`](https://www.npmjs.com/package/@types/supertest)
[^8]: [Url du dépot `@typescript-eslint/eslint-plugin`](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
[^9]: [Url du dépot `@typescript-eslint/parser`](https://www.npmjs.com/package/@typescript-eslint/parser)
[^10]: [Url du dépot `eslint`](https://www.npmjs.com/package/eslint)
[^11]: [Url du dépot `eslint-plugin-jest`](https://www.npmjs.com/package/eslint-plugin-jest)
[^12]: [Url du dépot `husky`](https://www.npmjs.com/package/husky)
[^13]: [Url du dépot `jest`](https://www.npmjs.com/package/jest)
[^14]: [Url du dépot `nodemon`](https://www.npmjs.com/package/nodemon)
[^15]: [Url du dépot `supertest`](https://www.npmjs.com/package/supertest)
[^16]: [Url du dépot `ts-jest`](https://www.npmjs.com/package/ts-jest)
[^17]: [Url du dépot `ts-node`](https://www.npmjs.com/package/ts-node)
[^18]: [Url du dépot `typescript`](https://www.npmjs.com/package/typescript)
[^19]: [Url du dépot `checks`](https://github.com/Horus-Turboss-Finance/Packages/tree/main/checks)
[^20]: [Url du dépot `constraint`](https://github.com/Horus-Turboss-Finance/Packages/tree/main/constraint)
[^21]: [Url du dépot `dateformat`](https://github.com/Horus-Turboss-Finance/Packages/tree/main/dateformat)
[^22]: [Url du dépot `dotenv`](https://www.npmjs.com/package/dotenv)
[^23]: [Url du dépot `express`](https://www.npmjs.com/package/express)
[^24]: [Url du dépot `mailgen`](https://www.npmjs.com/package/mailgen)
[^25]: [Url du dépot `nodemailer`](https://www.npmjs.com/package/nodemailer)
[^26]: [Url du dépot `signed-service`](https://github.com/Horus-Turboss-Finance/Packages/tree/main/signed-service)


git commit -m "feat: creation de la base de travail pour les mails"
