## [VM](#view-model)

Bien que le $scope et AngularJS en general soit facile d'utilisation, de nombreuses bonnes pratiques ont été découvertes.

Le [Styleguide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md) de Johnpapa fait parti de ces documents de references.

Un concept important est celui de `controllerAs` et `ViewModel`

En utilisant ce concept, on a plus besoin du $scope à l'interieur de nos controllers (gain de performance), et l'on peut facilement faire une séparation entre nos variables publiques (pour la vue) et privées (pour le controller uniquement)

### Avant

**Le router  dans `app.js`**

```
$routeProvider.when('/', {
     templateUrl: 'src/app/home/home.html',
     controller: 'HomeCtrl'
});
```

**Le controller**

```
function HomeCtrl($scope) {
      $scope.plat = "pizza";
}

HomeCtrl.$inject = ['$scope'];
```

**La vue**

```
<p>Hello {{plat}}!</p>
```

### Avec ViewModel et ControllerAs

**Le router  dans `app.js`**

```
$routeProvider.when('/', {
     templateUrl: 'src/app/home/home.html',
     controller: 'HomeCtrl',
     controllerAs: 'home'
});
```

**Le controller**

```
function HomeCtrl() {
	 var vm = this;
    vm.plat = "pizza";
}

HomeCtrl.$inject = [];
```

**La vue**

```
<p>Hello {{home.plat}}!</p>
```

Le `controllerAs` permet d'avoir une valeur pour le scope et de toujours savoir dans quel scope on prend la valeur.

L'utilisation de `var vm = this;` permet de se passer du $scope

## [ng-controller](#ng-controller)

`ng-controller` permet d'affecter un controller a un tag HTML.

Par example:

```
<div ng-controller="HomeCtrl">
	{{plat}}
</div>
```
ou en utilisant le `controllerAs` et `vm`

```
<div ng-controller="HomeCtrl as home">
	{{home.plat}}
</div>
```


## [VM Parent](#vm-parent)

Il faut savoir que lorsque l'on utilise que dans une vue, on a access a tous les controllers parent.

Par example:

```
<div ng-controller="HomeCtrl as home">
	{{home.plat}}
	<div ng-controller="MeteoCtrl as meteo">
		{{home.plat}} et temps de {{meteo.temps}}
	</div>
</div>
```
A l'interieur de notre `<div>` avec le `MeteoCtrl` on peut utiliser la variable `{{home.plat}}` car `HomeCtrl` est un parent.

En revanche on ne peut pas utiliser `{{meteo.temps}}` en dehor de la `div` avec `MeteoCtrl`

## [ng-repeat](#ng-repeat)

`ng-repeat` est un element dangereux a utiliser pour des raisons de performances (imaginez une liste de 10000 elements avec un databinding), cependant il est tres utile si limites peu d'elements.

Si on a une liste:

```
var liste = [
	{name: 'Jean'},
	{name: 'Luc'},
	{name: 'Regis'}
]
```

On peut l'utiliser de la façon suivante:

```
<ul>
	<li ng-repeat="personne in home.liste">{{personne.name}}</li>
</ul>
```
Il peut etre couplé avec `ng-controller` pour que chaque element puisse avoir son propre controller. (plusieurs instances du meme controller peuvent exister)

## [nb-include](#ng-include)

`ng-include` est une facon de separer son code HTML sans faire de veritable composant Angular.

Par exemple en utilisant:

```
<div>
	<ng-include src="'src/app/home/home-userform.html'"></ng-include>
</div>
```

Le fichier inclu pourra bien sur utiliser tous les controllers parent deja present a l'endroit de son inclusion.

Cependant le fichier inclu devra avoir un seul noeud d'entrée

**Oui**

```
<div>
	{{home.plat}}
</div>
```

**Non**

```
<div>
	Hello
</div>
<p>{{home.plat}}</p>
```

## [ng-click](#ng-click)

Vous utiliserez beaucoup `ng-click` car il remplace le classique `onclick`.

On l'utilise de façon similaire:

```
<div ng-click="home.changerDePlat()">Coucou</div>
```

Ou bien pour changer une valeur directement

```
<div ng-click="home.plat = 'pasta'">Coucou</div>
```

Si besoin, on peut aussi passer l'evenement click

```
<div ng-click="home.changerDePlat($event)">Coucou</div>
```

## [ng-if](#ng-if)

`ng-if` permet de montrer un element si la condition est respectée

Par example:

```
<div ng-if="home.plat === 'pizza'">
	4 fromages baby!
</div>
```

Dans cet example, si `home.plat` n'est pas une pizza, la `div` sera enlevée du DOM, detruisant par example tous les controllers present a l'interieur.

### Elseif et Else?

Il n'y a pas de Elseif ou Else, il faudra donc utiliser plusieurs `ng-if` ou recourir au `ng-switch`

## [ng-switch](#ng-switch)

`ng-switch` est similaire a `ng-if` dans son comportement, mais gere plusieurs conditions.

Son avantage est qu'il utilise moins de ressources que plusieurs `ng-if`.

On l'utilise de cette façon:

```
<div ng-switch="home.plat">
  <span ng-switch-when="salade">Vive les legumes</span>
  <span ng-switch-when="pizza">Hmm le gras!</span>
  <span ng-switch-default>Miam Miam</span>
</div>
```

## [ng-show / hide](#ng-show)

`ng-show` et `ng-hide` sont assez similaire a `ng-if`.

Cependant la difference principale est qu'au lieu d'enlever l'element du DOM, ils le cachent.

Ce qui permet entre autre de ne pas detruire les controllers et de rapidement montrer l'element de nouveau.

```
<div ng-show="home.plat === 'pizza'">
	Pizza Hut ce soir?
</div>
<div ng-hide="home.plat !== 'salade'">
	5 fruits et legumes par jour!
</div>
```

## Utiliser des ternaires

Petit Tips pour l'utilisation des variables dans nos vues, il est possible d'utiliser des ternaires.

```
<span>{{ home.plat === 'salade' ? '5 fruits et legumes' : 'Berk!' }}</span>
```
