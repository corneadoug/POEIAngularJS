## Exo03

### Etape 01

* Faire un fork de `https://github.com/corneadoug/POEIAngularJS` si ce n'est pas deja fait.

* Creer une branche `exo03` sur votre fork

* Creer une Pull Request pointant sur la branche `master` de votre fork

* Une fois l'exercice terminé, vous pourrez merger dans votre branche `master` si vous le souhaitez, la Pull Request me permettra de corriger l'exercice plus tard.

* Vous devrez travailler sur le projet Angular deja present dans le dossier `project`

### Etape 02

A L'aide des examples du Cour03 sur [VM](Cour.md/#view-model) et de la [page](../project/src/app/home) dans le projet:

* Creer une nouvelle page: `exo03`
	* Un dossier `exo03` dans `src/app`
	* les fichiers `exo03.html`, `exo03.less`, `exo03.controller.js` dans ce dossier

* Ne pas oublier:
	* Ajouter le fichier `exo03.less` dans `app.less`
	* Ajouter le fichier `exo03.controller.js` dans `index.html`
	* Ajouter une route pour `/exo03` dans `app.js`

### Etape 03

* Dans le fichier `exo03.html` on y trouvera 2 div ayant la meme width, et prenant toute la hauteur [voir Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

* La div de gauche aura comme **id**: `listeFilmes`

* La div de droite aura comme **id**: `detailFilm`

### Etape 04

A l'aide du Cour03 sur [ng-include](Cour.md/#ng-include) et [ng-controller](Cour.md/#ng-controller)

* Creer un sous-dossier `detail-partial` dans `exo03`

* Creer dans ce sous-dossier les fichiers `detail.html`, `detail.less`, `detail.controller.js`

* N'oubliez pas de declarer `detail.less` et `detail.controller.js`

* Ajouter une `<div>` dans `detail.html` et lui mettre un `ng-controller`

* Inserer `detail.html` dans la div de droite de `exo03.html` a l'aide de `ng-include`

### Etape 05

A l'aide du Cour03 sur [ng-repeat](Cour.md/#ng-repeat) et [ng-click](Cour.md/#ng-click)

* Rajouter l'object suivant dans `exo03.controller.js` et faire en sorte qu'il soit utilisable dans `exo03.html`.

```
films = [
	{name: 'Fast and Furious', img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/AkSMd8AXSpA1L1SbBPc2AfVJfmE.jpg', year: 2001},
	{name: '2 Fast 2 Furious', img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/u1Snfl40rXmAJNiMyZUczUyFVuf.jpg', year: 2003},
	{name: 'Fast & Furious: Tokyo Drift', img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/4ceW7kWPAc2uFG5WzYDbP8Od3gw.jpg', year: 2006}
];
```

* Dans la div de gauche, utiliser `ng-repeat` pour montrer les images des films (Flexbox peut etre utile pour les aligner)
