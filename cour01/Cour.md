## Servir ses fichiers

Les fichiers HTML peuvent etre ouvert sur son ordinateur directement avec un Browser internet de son choix.

#### Code JS inline

On peut rajouter du code Javascript dans un fichier HTML a l'aide de la balise `<script></script>` par example:

```
<script>
	var a = 2;
	console.log("Nombre: " + a);
</script>

```

#### Inclure des fichiers

Dans un fichier HTML, on peut inclure des fichiers externes CSS et Javascript.

Avec la balise `<link />` ([Doc](https://developer.mozilla.org/fr/docs/Web/HTML/Element/link)) comme par exemple pour du CSS:
```
<link href="css/my.css" rel="stylesheet">
```

Ou pour inclure du code Javascript partout dans le code:

```
<script src="js/my.js"></script>
```

#### Chemin Relatif vs Absolu

Dans les exemples precedents, on utilise des **chemins relatif** a notre fichier html pour nos fichiers externes.

Notre dossier ressemble donc a:

- my.html
- js/
	- my.js
- css/
	- my.css

Il est aussi possible d'utiliser des **chemins absolus**:

* `/js/my.js` au lieu de `js/my.js`
*  `/css/my.css` au lieu de `css/my.css`

Le `/` representant la racine de notre projet, cependant ils ne peuvent etre utilisés sans serveur.

## Utiliser un serveur local

Il est facile d'utiliser un serveur web sur notre ordinateur afin de tester notre site correctement.

Il existe de nombre outils comme le programme [WAMP](http://www.wampserver.com/), le `SimpleHTTPServer` de python ou [http-server](https://github.com/indexzero/http-server) par NPM.

Pour la simplicité, installez `http-server` a l'aide de la commande:

```
npm install -g http-server
```

Vous pourrez ensuite utiliser la commande `http-server` dans le dossier de votre projet, et vous rendre a l'adsresse `localhost:8080` dans votre browser.

### Page d'acceuil

Par default la page qui s'ouvre en premier est toujours `index.html`

## Utiliser NPM pour ajouter des librairies

[NPM](https://www.npmjs.com/) est un gestionaire de librairies, il permet de telecharger des librairies ou composants que l'on peut alors utiliser dans nos projets.

Par example, [Lodash](https://lodash.com/) ou [Bootstrap](https://getbootstrap.com/)

NPM peut installer des outils de façon global avec l'option `-g` comme vu precedemment, ou alors de façon local dans le dossier où la commande est utilisée.

Toutes les librairies locales se trouveront dans un dossier: `node_modules`
 
### Utiliser le fichier package.json

Pour pouvoir sauvegarder la liste des librairies de votre projet, on utilise un fichier: `package.json`

Pour creer le fichier utilisez: `npm init -y`

Les librairies sont sauvegardées en fonction de leur utilisation.

`devDependencies` pour le developpement, par example les librairies de test. (`npm install PACKAGE --save-dev`)

`dependencies` pour celle que l'application va utiliser en production. (`npm install PACKAGE --save`)

### Les versions

Lors de l'ajout d'une librairie dans le fichier `package.json` une ligne similaire apparait: `grunt-dom-munger": "~3.4"`

Les versions utilisent le systeme [semver](http://putaindecode.io/fr/articles/semver/): `Major.Minor.Fix`

Devant le numero de version on peut ajouter des elements permettant de definir quand mettre a jour les librairies.

* `~` pour authoriser la mise a jour pour les versions fix ( ~1.0.1 -> 1.0.30)

* `^` pour authoriser la mise a jour pour les versions minor ( ^1.2.1 -> 1.6.4)

### Ne pas oublier le .gitignore

Le dossier `node_modules` est lourd et ne necessite pas d'etre sur votre repository GIT, n'oubliez donc pas de le rajouter a votre fichier `.gitignore`
