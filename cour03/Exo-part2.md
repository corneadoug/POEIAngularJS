## Exo03-Part2

Suite de l'Exo03

### Etape 06

A L'aide des examples du Cour03 sur [ng-click](Cour.md/#ng-click)

* Lors d'un click sur une image de film, sauvegardez l'image selectionnée dans `exo03.controller.js`

* L'image du film doit avoir une bordure rose quand elle est selectionnée

* Le film peut être déselectionner et seulement 1 film peut être sélectionné a la fois

### Etape 07

A L'aide des examples du Cour03 sur [ng-if](Cour.md/#ng-if) et [VM parent](Cour.md/#vm-parent)

* Ajouter la div de `detail.html` le code suivant:

```
<div ng-if="UNFILMESTSELECTIONE">
	<p>{{ LETITREDUFILMSELECTIONE }}<p>
	<p>{{ LANNEEDUFILMSELECTIONE }}</p>
</div>
```

* Faites en sortes que les details du film soit visible lorsqu'un film est selectioné

### Etape 08

A L'aide des examples du Cour03 sur [ng-show](Cour.md/#ng-show) et [ng-click](Cour.md/#ng-click)

* Rajouter des balises dans `detail.html` pour obtenir

```
<div ng-if="UNFILMESTSELECTIONE">
	<div ng-show="">
		<p>{{ LETITREDUFILMSELECTIONE }}<p>
		<p>{{ LANNEEDUFILMSELECTIONE }}</p>
	</div>
	<button></button>
</div>
```

* Lorsque l'on click sur le boutton, on devra sauvegarder le status dans `detail.controller.js`, et cacher le detail du film a l'aide du `ng-show`

* Le nom du bouton devra etre `Cacher` ou `Montrer` en fonction du status
