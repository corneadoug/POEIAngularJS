# Final - Cocktail Bar

Pour cet evaluation finale, nous allons faire une application similaire a celles que vous avez fait dans les Exo03 et Exo04.

Pour cela, vous allez encore une fois utiliser votre fork de mon repository `POEIAngularJS`.

## Etape 00

* Creez une branche `final`

* Vous devrez faire une Pull Request de cette branche sur **votre** `master` afin que je puisse corriger.

## Etape 01 - La page Finale

Comme vous avez deja fait souvent, vous allez devoir creer une nouvelle page:

* L'URL d'acces devra etre `/final`

* Il vous faudra rajouter un lien d'access vers cette page dans `home.html`

* Creer le dossier `src/app/final`

* Creer les fichiers `final.html`, `final.controller.js`, `final.less`

## Etape 02 - La barre de recherche

Nous allons comme dans l'Exo04 creer une barre de recherche, elle sera composé:

* D'un `<input>` pour recevoir du texte
* D'un `<button>` avec comme label `Buvons!`
* Ces deux elements devront être cote a cote et dans une `<div>` de 300px de hauteur
* Le background de cette `<div>` de vra etre une image de boisson

## Etape 03 - Recherchons

* Creer un service `searchConfig.service.js` dans `src/components/searchConfig/`
* Ce service devra avoir une variable publique `ingredient = ''`
* Ce service devra sauvegarder la valeur de la barre de recherche dans la variable `ingredient` lorsque l'on appuie sur le boutton `Buvons!`
* Vous devrez afficher `ingredient` sous la div de la barre de recherche aligné a gauche

## Etape 04 - La recherche de cocktail

* Creer un service `cocktailSearch.service.js` dans `src/components/cocktailSearch/`
* Ce service devra avoir une variable publique `cocktailList = []`
* Ce service devra avoir une fonction publique `getCocktails`

* Dans notre fonction `getCockails` nous allons devoir faire une requete `$http.get()`
	* L'URL de la Requete est: `http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka`
	* Il faudra remplacer `Vodka` par la variable `ingredient` de notre service `searchConfig`
	* En cas de success de la requete, `cocktailList = response.data.drinks`
	* En cas d'erreur de la requete, `cocktailList = []`
* Appeler la fonction `getCocktails` lorsque l'on appuie sur le boutton `Buvons!`

## Etape 05 - Un cocktail nommé directive

* Creer une directive `coktail` dans `src/components/cocktail/`
	* `cocktail.directive.js`, `coktail.controller.js`, `coktail.html`
* La directive devra accepté `cocktailElement` comme property
* Le fichier `.html` devra contenir la photo du cocktail (`cocktailElement.strDrinkThumb`), et son nom (`cocktailElement.strDrink`)

## Etape 06 - Montrer les cocktails

* Dans la page `final`, il faudra montrer les elements de `cocktailList` grace a un `ng-repeat`
* Chaque element de la liste devra etre affiché en utilisant la directive de `cocktail.directive.js`

## Etape 07 - Besoin d'un tuto?

Helas, notre requete ne nous donne pas les details de la boisson, il va falloir s'en occuper.

* Dans notre service `cocktailSearch.service.js`, rajouter une variable publique `cocktailDetail = {}`
* Ainsi q'une fonction publique `getCocktailDetails`
* Cette fonction prendra un parametre `cocktailId`
* Cette fonction devra faire une requete `$http.get()` et son URL est `http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=13060`
* Et il faudra remplacer la valeur `13060` par le `cocktailId`
* En cas de success de la requete, `cocktailDetail = response.drinks[0]`
* En cas d'erreur de la requete, `cocktailDetail = {}`

## Etape 08 - Une page descriptive

Creer une nouvelle page:

* L'URL d'acces devra etre `/cocktailDetail`

* Creer le dossier `src/app/cocktailDetail`

* Creer les fichiers `cocktailDetail.html`, `cocktailDetail.controller.js`, `cocktailDetail.less`

* Redirigez vers cette page quand on clique sur un cocktail de notre liste de cocktails

## Etape 09 - Rajouter les infos

* Lorsque l'on clique sur un coktail de notre liste de cocktails, appeller `getCocktailDetails` en lui passant comme parametre la propriete `idDrink` de notre cocktail.

* Dans la page `cocktailDetail.html`, ajouter un boutton `back` pour revenir sur la liste des cocktails

* Dans la page `coktailDetail.html` il faudra montrer les informations suivantes de `cocktailDetail`:
	* `strDrink`
	* `strCategory`
	* `strIngredient1` -> `strIngredient15`
	* `strInstructions`
	* `strAlcoholic`

## Etape 10 - Trop Facile? Voici un Bonus

Cette Etape est un exercice Bonus, pour ceux qui trouvent l'Exam trop facile.

Pour cette Etape il vous faudra jouer avec des choses que vous n'avez pas vu en cours.

### Et sinon c'est quoi l'Etape?

Utiliser `ng-repeat` pour afficher une longue liste est mauvais pour les performances, nous allons donc essayer de limiter le nombre de cocktails sur la page `final` a l'aide d'un systeme de paging.

### Il ressemble a quoi?

* Le systeme de paging permettra de montrer au maximum 6 cocktails a la fois
* Il devra se placer sous la liste des cocktails
* Il devra ressembler a: ` 1/12 >` ou `< 2/12 >` ou `< 12/12 `

### Et je fais ca comment?

http://jsfiddle.net/2ZzZB/56/

(J'avoue c'est un peu la solution complete)
