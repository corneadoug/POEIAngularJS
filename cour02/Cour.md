## Build tools

Les Builds tools sont des elements importants du developpement web moderne, ils permettent de pouvoir de separer son code correctement (JS, HTML, CSS), mais aussi de traiter son code avant l'envoie en production.

Il existe beaucoup de build tools pour le developpement Web comme: Gulp, Webpack, Grunt

Ces outils sont importants et permettent une sorte de compilation du code Javascript, pendant le developpement ou afin de produire du code pour la producation.

Voici certains cas d'utilisation:

* Servir le code avec un serveur

* Rafraichir la page a chaque modification du code

* Lancer la verification du style du code

* Lancer les tests

* Creer un seul fichier avec tous les fichier Javascript

* Transformer le CSS pour tous les Browsers

## Yeoman

[Yeoman](http://yeoman.io/) est un outil permettant de generer des architectures de projet prêt à l'utilisation.

Il y a beaucoup de [generateurs](http://yeoman.io/generators/) disponibles, que ce soit pour AngularJS, React, ou une application simple.

Vous pouvez l'installer facilement sur votre ordinateur a l'aide de la commande: `npm install -g yeoman`, et chaque generateur de la meme facon.

## MVC

Le Principe du MVC (Modele, Vue, Controller) est de separer le code de facon logique.

Le Modele represente les données, la Vue est la partie visible de votre application, et le Controller fait la relation entre la Vue et les données.

## Organisation du code

[AngularJS](https://angularjs.org/)

### App.js

Ce fichier est la base de l'application, et contient la definition de notre projet et sa configuration

### Index.html

Un fichier contenant les liens des librairies (rempli par le build tool en general), mais ou il faudra aussi rajouter tous les fichiers Javascript que l'on fait.

Par example tous nos fichiers: `controller.js`

### Dossier pour le code

Pour bien organiser son code, je conseille de creer un dossier `src`, puis des sous-dossier `app` et `components`.

`app` contiendra les pages principales de notre application (organisé autour des routes)

`components` contiendra tous les composants réutilisable, ou classes et services

### Noms des fichiers

Les fichiers sont generalement nommés en fonction de leur type, par example `home.controller.js` pour un controller. 

## Scope

AngularJS possède un systeme de data-binding.

Une variable peut etre affiché dans une page, mais si elle est changée dans le controller, la vue sera automatiquement changée pour montrer la nouvelle valeur.

Ce systeme fonctionne dans les deux sens (de la vue vers le controller, du controller vers la vue)

### Utiliser le Scope

Le Scope est unique a chaque controller, cependant la vue peut acceder aux valeurs du scope des controller parents.

Du coté du controller on peut l'utiliser comme cela:

```
$scope.maVariable = 2;
```

et dans le html:

```
Mon nombre est: {{maVariable}}
```

## Routing

La plupart des Framework web implementent maintenant leur propre routing. 

Avant c'etait generalement le serveur et le code du Back-end qui en fonction de l'URL nous donnait une page html.

Dans les framework JS, le serveur envoie tout le code d'un coup avec le fichier `index.html`, lorsque l'utilisateur de deplace avec des urls, c'est le Javascript qui generer les nouvelles pages.

En Angular, la configuration des routes se fait dans le fichier `app.js` de cette facon:

```
angular.module('plop').config(function($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'src/app/home/home.html',
        controller: 'HomeCtrl'
    });
    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/'});

});
```

On Ajoute des cas de redirection (`when`) et une route par defaut (`otherwise`);

Dans le cas de la configuration d'une route, on choisit le fichier html a afficher avec `templateURL`, et on precise eventuellement le controller a attacher a cette vue `controller`.

Le controller peut etre attaché directement dans le code HTML, mais nous verrons cela plus tard, et cela evite les oublis.


## Generer un projet AngularJS

Configurer un projet AngularJS a la main est long et compliqué, deux methodes existent: Utiliser un [seed project](https://github.com/angular/angular-seed) ou utiliser un generateur.

Pour ce cour, nous utiliserons le [generator-cg-angular](https://github.com/cgross/generator-cg-angular)

Pour cela, il faut d'abord installer le necessaire:

`npm install -g grunt-cli yo bower generator-cg-angular`

Puis il vous suffit de taper `yo cg-angular` dans le dossier de votre projet, puis de vous laisser guider.

### Petites modifications

`generator-cg-angular` est un bon debut, mais sa structure n'est pas parfaite de mon point de vue, et il nous manque un *Hello World* pour bien commencer.

* Supprimer le fichier `gulpfile.js`

* Ajouter dans votre `.gitignore` si vous utilisez GIT

```
bower_components
node_modules
```

* Creer des dossiers pour le code:

```
src
src/app
src/components
``` 

### Pre-requis

Lorsque vous récupérez un projet pour la premiere fois, vous aurez souvent a lancer une commande pour obtenir les librairies utilisées par le projet, sans quoi il sera inutilisable.

Le plus souvent il s'agira de `npm install`

Dans notre projet, il y a deux commandes:

* `npm install`
* `bower install`

### Utiliser notre build systeme

* `grunt serve` lance un serveur de developement et recompile quand il y a des modifications (**localhost:9001**)
* `grunt test` lance les tests
* `grunt build` creer une application de production dans le dossier `/dist`

## Premiers pas de notre projet

### Le routing de base

Dans le fichier `app.js`, changez la config par:

```
$routeProvider.when('/', {
        templateUrl: 'src/app/home/home.html',
        controller: 'HomeCtrl'
});

/* Add New Routes Above */
$routeProvider.otherwise({redirectTo:'/'});
```

### La premiere page

 Ajouter les fichiers suivants pour avoir une premiere page:
 
 `app/home/home.html`
 
 ```
 <div>
 	<p>Hello {{plat}}!</p>
 </div>
 ```
 
 `app/home/home.controller.js`
 
 ```
 (function() {
  'use strict';

  function HomeCtrl($scope) {
    $scope.plat = "pizza";
  }
  
  angular.module('VOTREAPP')
    .controller('HomeCtrl', HomeCtrl);

  HomeCtrl.$inject = ['$scope'];

})();
 ```

`index.html`

```
<!-- Main App JS -->
<script src="app.js"></script>
<script src="src/app/home/home.controller.js"></script>
<!-- Add New Component JS Above -->
```
