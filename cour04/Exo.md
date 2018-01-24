## Exo04

### Etape 01

* Pour cet exercice, tout comme pour l'Exo03, nous allons travailler a partir du dossier `project` de votre fork de `https://github.com/corneadoug/POEIAngularJS`.

* Si ce n'est pas deja fait, faites une Pull Request de votre branche `exo03` sur votre master et mergez la.

* Une fois fait, mettez a jour votre branche `master` locale (`git pull`), puis creez une branche `exo04`.

### Etape 1.5

Avant de commencer, nous allons faire de petites modifications pour vous aider.

* Allez dans le fichier `.jshintrc` et enlevez la ligne `indent: 2`, cela vous evitera d'avoir des erreurs d'indentation.

* L'Exo04 devrait comme l'Exo03 couvrir la journee, du coup nous allons modifier dans `src/app/home/home.html`:

	* Supprimer la ligne `<a class="highscoreLink" href="/#/exo06">Exo06</a>`

	* Changer la ligne
      `<a class="highscoreLink" href="/#/exo05">Exo05</a>` en 
      `<a class="highscoreLink" href="/#/exo04">Exo04</a>`


### Etape 02

* Pour commencer, nous allons creer une nouvelle page:
	* Comme pour l'Exo03 il nous faut un dossier `exo04` dans `src/app`

	* Creez les fichiers `exo04.html`, `exo04.controller.js` et `exo04.less`

	* Ajoutez une nouvelle route vers `/exo04` dans `app.js`

	* Noubliez pas de mettre `exo04.less` dans `app.less` et `exo04.controller.js` dans `index.html`

	* Ajouter le texte `Bonjour` dans `exo04.html`

	* Vous devez avoir declarez un controller dans le fichier `exo04.controller.js`, mais pas besoin d'avoir autre chose que `var vm = this;` dans la fonction.

### Etape 03

A L'aide des examples du Cour03 sur [ng-click](../cour03/Cour.md/#ng-click) et du Cour04 sur [ng-model](Cour.md/#ng-model)

* Enlever le texte `Bonjour` et ajoutez un input dans votre page.

* Ajoutez un boutton avec comme label: `search`, le bouton devra etre sur la meme ligne que votre `<input>` et a sa droite.

* L'input et le boutton doivent etre centré horizontalement.

* Relier l'input a une valeur de votre controller a l'aide de `ng-model`

* Ajouter un `ng-click` sur le bouton et lorsque l'on click dessus, lancer un `console.log` de la valeur de l'input

### Etape 04

A L'aide des examples du Cour04 sur les [services](Cour.md/#services)

* Creez un nouveau fichier `setting.service.js` dans le dossier `src/components/setting/`

* Dans le fichier `setting.service.js` ajoutez un service avec comme nom: `settingService`

* Le service devra contenir 2 variables:
	* `city = ''`
	* `isCelsius = true`

* Ne pas oublier d'ajouter `setting.service.js` dans `index.html`

### Etape 05

A L'aide des examples du Cour04 sur les [services](Cour.md/#services)

* Injectez `settingService` dans votre controller `exo04.controller.js`

* Reliez `settingService` a votre `vm`

* Afficher la variable `city` du settingService en gros dans une `<div>` sous la ligne de l'input.

* Enlevez le `console.log` de la fonction de click, et a la place, enregistrez la valeur de la variable d'input dans la variable `city` du `settingService`

### Etape 06

* Aller sur: `https://home.openweathermap.org/users/sign_up` et inscrivez vous (vous allez recevoir votre API key par email) - C'est gratuit :)

A L'aide des examples du Cour04 sur les [services](Cour.md/#services)

* Creez un service `meteoService` de la meme facon que pour `settingService` dans `src/components/meteo/`

* Le service devra contenir une variable `meteoListe = []`

* Le service devra contenir une fonction `getMeteo()`

* Injectez `$http` dans votre service

* Injectez `settingService` dans votre service

* Inclure `meteoService` dans `exo04.controller.js`

### Etape 07

A L'aide des examples du Cour04 sur [http](Cour.md/call-http)

* Dans la fonction `getMeteo` de `meteoService` faites un appel a une api a l'aide de `$http.get`.

* L'url a appeler est:

`http://api.openweathermap.org/data/2.5/forecast?q=London&APPID=5a1ead7d5602175c55&units=metric`

* Dans cette URL vous allez devoir remplacer des valeurs:
	*  `5a1ead7d5602175c55` par votre API Key
	*  `London` par la variable city de `settingService`

* Lors d'un success de la requete, vous devrez sauvegarder `data.list` de la reponse dans la variable `meteoListe` du service

* En cas d'echec, `meteoListe = [];`

### Etape 08

A L'aide des examples du Cour03 sur [ng-show](../cour03/Cour.md/#ng-show)

* Ajoutez une `<div>` dans `exo04.html` sous le gros texte

* Dans cette div, Affichez une image a partir de l'url `http://openweathermap.org/img/w/10d.png` et en remplacant le nom (`10d`) de l'image dans l'url par la variable qui se trouve dans `weather[0].icon` du premier element de la variable `meteoListe`

* A droite de l'image, il faudra afficher en gros texte la variable `main.temp` du premier element de la variable `meteoListe`



