## [ng-model](#ng-model)

`ng-model` est le dernier type de d'attribut special que l'on va voir.

Son role est de creer un double binding entre un champs, par example input et une variable public de notre controller.

```
<input ng-model="home.plat" />
```

Dans l'example ci-dessus, a chaque fois que l'on tape dans l'input, `home.plat` sera changé automatiquement.

AngularJS possede de nombreux outils pour gerer les formulaires, et `ng-model` peut etre utilisé sur d'autre elements, mais nous resterons sur son utilisation avec un input.

## [services](#services)

Les Services sont un element tres important d'AngularJS.

Un service est:

* Une instance unique partagée dans toute l'application
* Generalement une bibliotheque de fonctions utilitaire (par example: une fonction addition, soustraction, multiplication)
* Peut etre utilisé pour partager des données entre controllers
* C'est là que l'on retrouve en general nos appels API

Un service se declare avec une structure assez similaire au controller:

```
(function() {
    'use strict';
  
    function monService() {
      var service = {};
      service.maProp = '';

      return service;
    }

    monService.$inject = [];
    
    angular.module('daproject')
        .factory('monService', monService);
  
})();
```
Le service retourne un object (ici on l'appelle `service`), et toutes les variables et fonctions déclarés dans cet object seront publiques et accessible.

### Injecter un Service

Les services peuvent être injecter et utiliser dans nos controllers, mais aussi dans d'autres services.

Pour cela il suffit des les ajouter via `$inject`, par example pour un controller:

```
(function() {
    'use strict';
  
    function HomeController(monService) {
      var vm = this;
      vm.superService = monService;
    }

    HomeController.$inject = ['monService'];
    
    angular.module('daproject')
        .controller('HomeController', HomeController);
  
})();
```

**Attention** : Il est important de bien relier le service entier avec le `vm` de notre controller.

Si jamais on utilisait `vm.prop = monService.prop` le data binding ne serait pas automatique et si prop changeait dans notre service, la nouvelle valeur ne serait pas mise a jour dans notre vue. (Un [article](http://stsc3000.github.io/blog/2013/10/26/a-tale-of-frankenstein-and-binding-to-service-values-in-angular-dot-js/) tres bien fait sur le sujet)


## [http](#call-http)

`$http` est un service d'AngularJS permettant de faire des appels serveur.

Vous trouverez la documentation de toutes ses options [ici](https://docs.angularjs.org/api/ng/service/$http), mais voici un cas d'utilisation simple

```
function getData(toto, tata) {
	return $http.get('http://monapi.com/monEndPoint?param1=' + toto + '&param2=' + tata)
            .then(function(response){
                console.log('Success: %o', response);
            })
            .catch(function(error){
                console.log('Error: %o', error);
            });
}
```

`$http` renvoie ce que l'on appelle une promesse (promise).
C'est un fait un object qui expose quelques methodes utiles comme le `then` ou `catch`

en faisant le `return $http` dans notre fonction, cela nous permet de renvoyer notre promesse et de gerer le retour de la query dans notre controller plutot que dans notre service par example.

```
	monService.getData('a', 'b')
		.then(function(response){
           console.log('Success: %o', response);
       })
       .catch(function(error){
           console.log('Error: %o', error);
       });
```

Vous pouvez en apprendre plus sur les promesses [ici](http://andyshora.com/promises-angularjs-explained-as-cartoon.html)

### Injecter $http

`$http` etant un service AngularJS, il s'injecte comme tous les autres services, par le `$inject`;

```
(function() {
    'use strict';
  
    function HomeController($http) {
      var vm = this;
    }

    HomeController.$inject = ['$http'];
    
    angular.module('daproject')
        .controller('HomeController', HomeController);
  
})();
```

**Attention** D'un point de vue MVC il est preferable de faire appel a `$http` dans des services et non dans les controllers

## [Liens](#links)

Il y a 2 facons de rediriger vers une autre page dans notre application AngularJS.

### href

On peut faire un lien en utilisant le tag HTML `<a>` et sa propriete `href`. Il faudra seulement penser a rajouter `/#/` devant le chemin voulu.

Les URLs en AngularJS ressemblent a: `locahost:9001/#/profile`, du coup il faut bien penser a rediriger sur `/#/profile`

### Avec $location

AngularJS possède un service permettant de changer de page depuis votre code Javascript.

Le nom de ce service est `$location` et s'injecte comme les autres services.

En utilisant `$location.path('/profile');` vous redirigez l'utilisateur sur une nouvelle page.

Vous remarquerez que quand on parle de path dans le contexte d'AngularJS, on a pas besoin d'ajouter le `/#/` a notre route.

## [Directives](#directives)

Faire une directive, c'est faire son propre tag HTML, par exemple `<ma-directive></ma-directive>`

L'avantage de faire une directive c'est que cela represente un composant qui est facilement reutilisable.


**La directive**

```
(function() {
  'use strict';
	
	angular.module('daproject')
    .directive('maDirective', function() {
      return {
        templateUrl: 'src/components/madirective/madirective.html',
        restrict: 'E',
        bindToController: {
          pizza: '=',
          camelCase: '='
        },
	scope: {},
        controller: 'MaDirectiveController',
        controllerAs: 'ma'
      };
    });

})();
```

La directive a en plus besoin d'un controller et d'un fichier `.html`

Dans le fichier `.html` on retrouvera notre code comme pour le cas d'un `ng-inject`, par exemple:

```
<div>{{ma.pizza}}</div>
```

Dans le modele de directive ci-dessus, voici les valeurs que vous pouvez modifier:

* Le chemin du template (pour votre fichier `.html`)
* Le nom de votre controller
* Le nom de votre controllerAs
* Ajouter ou enlever des elements dans l'obect `bindToController`

Exemple d'utilisation de la directive:

```
<ma-directive pizza="home.plat" camel-case="home.msg"></ma-directive>
```

Dans cet exemple, la variable `pizza` est deja incluse dans le `vm` du controller de notre directive.

Il y a aussi un double binding entre `home.plat` et la variable `pizza`

**Attention** Tous les noms en `camelCase` comme le nom de la directive et se ses attributs, sont au format `camel-case` dans l'usage de la directive
