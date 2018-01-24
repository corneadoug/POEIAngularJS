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

Bientot

## [Directives](#directives)

Bientot