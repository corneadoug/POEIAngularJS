## Exo04-part2

### Etape 09

* Creez un dossier `more` dans `src/app`

	* Creez les fichiers `more.html`, `more.controller.js` et `more.less`

	* Ajoutez une nouvelle route vers `/more` dans `app.js`

	* Noubliez pas de mettre `more.less` dans `app.less` et `more.controller.js` dans `index.html`

	* Laissez `more.html` vide pour le moment

	* Vous devez avoir declarez un controller dans le fichier `more.controller.js`, mais pas besoin d'avoir autre chose que `var vm = this;` dans la fonction.

### Etape 10

A L'aide des examples du Cour04 sur les [liens](Cour.md/#links)

* Ajouter un lien avec comme texte `More` sous la div de meteo de `exo04.html`

* Ce lien ne devra pas avoir ne devra pas utiliser de `href` mais un `ng-click` et `$location` a la place pour rediriger sur `/more`

* Dans `more.html` ajoutez un lien avec comme texte `Back` utilisant `href` et qui pointe sur `/exo04`

* Dans `more.controller.js` injecter `meteoService`

### Etape 11

A L'aide des examples du Cour04 sur les [directives](Cour.md/#directives)

* Creer une directive `weather` dans `src/components/weather/weather.directive.js`

* Il vous faudra aussi dans le dossier `src/components/weather` un fichier `weather.html` et `weather.controller.js`

* La directive acceptera une seule property `meteoElement`

### Etape 12

* Dans `weather.html` on y trouvera une div avec un `background-color` contenant:

	* Comme pour la page `exo04` une image et la temperature en fonction de `meteoElement`
	* Et sous cette div la date trouvable dans `meteoElement.dt_txt`

* Dans la page `more.html`, inserer 3 fois la directive `weather` en leur passant par l'attribut `meteoElement` les 3 premier element de la variable `meteoListe` de `meteoService`.
(meteoListe[0] pour la premiere directive, meteoListe[1] pour la deuxieme etc...)


