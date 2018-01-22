## Exo01

### Etape 01

* Creez un dossier `Angular-Exo01`

* Creez un fichier `index.html` avec comme contenu:

```
<html>
	<head>
	</head>
	<body>
	</body>
</html>
```

* Rajoutez le texte `Hello Pizza!` avec une balise paragraphe dans le fichier `index.html`

* Ouvrez le fichier `index.html` avec votre browser et verifiez que le texte s'affiche

### Etape 02

* Creez un fichier `css/my.css`

* Ajoutez dans le fichier `my.css` une regle donnant la couleur bleu aux balises de paragraphe.

* Inclure le fichier `my.css` dans `index.html`

### Etape 03

* Ajoutez un bouton dans votre fichier `index.html`

* Ajoutez du code Javascript inline dans votre fichier `index.html`

* A chaque fois que l'on utilise le bouton on devra lancer une alerte avec un plat different: Pizza, Pasta, Salade

### Etape 04

* Mettre le code Javascript dans son propre fichier: `js/my.js`

* Inclure le fichier Javascript dans `index.html`

### Etape 05

* Creez un fichier `package.json` pour npm

* Sauvegardez les librairies: `bootstrap` et `lodash`

* Inclure ces librairies dans le fichier `index.html`

### Etape 06

* Appliquez du style Bootstrap sur votre boutton afin d'avoir un boutton large avec des outline et de style warning.

* Ajoutez ce code dans votre Javascript

```
var plats = [
  { 'plat': 'pasta',  'prix': 10 },
  { 'plat': 'pizza',    'active': 12 },
  { 'plat': 'salade', 'active': 8 }
];
```
* Ajoutez une dropdown contenant le nom de tous ces plats

* Utilisez la fonction `findIndex` de lodash pour afficher le prix dans une alerte a chaque fois qu'un plat est selectionné.


### Etape 07

* Remplacez vos chemins de fichiers a inclure par des chemins absolus

* Utilisez `http-server` pour lancer votre application sur le port `4242`


### Etape 08

* Installez et sauvegardez `jquery` avec NPM

* Utilisez Jquery pour changer le plat dans le message `Hello Pizza!` par le plat selectionné dans la dropdown
