# Démarrage d'un projet

```bash
git init
npm init -y
eslint --init
jest --int
```

on ajoute ensuite éventuellement un fichier `.editorconfig`.

# création de snippets

Pour les bouts de code qu'on retape souvent, on peut créer des snippets:

ctrl-shift-p / configure user snippets
On choisit le langage pour lequel on veut créer un snippet.

exemple de snippet javascript pour créer un serveur express

```json
{
	"express monolith" : {
		"prefix": "express",
		"body": [
			"require('dotenv').config();",
			"const path = require('node:path');",
			"const express = require('express');",
			"const router = require('./app/routers');",
			"",
			"const PORT = process.env.PORT ?? ${1:3000};",
			"",
			"const app = express();",
			"",
			"app.set('view engine', '${2:ejs}');",
			"app.set('views', './views');",
			"",
			"app.use(express.json());",
			"app.use(express.urlencoded({ extended: true }));",
			"app.use(router);",
			"",
			"app.listen(PORT, () => console.log(`sever ready http://localhost:\\${PORT}`));"
		]
	}
}
```

exemple de snippet SQL pour créer une table

```json
{
	"create table": {
		"prefix": "create table",
		"body": [
			"CREATE TABLE \"${1:table_name}\" (",
			"  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,",
			"  $0"
			");",
		]
	}
}
```

ensuite si suffit de taper le prefix dans un fichier du bon langage pour que CSV propose de l'utiliser;