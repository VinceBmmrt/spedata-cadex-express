# Récap du cours de vendredi 20/10 après-midi

Désolé mais j'ai du oublié de lancer le replay vendredi 20/10 après-midi, ou OBS m'a fait une vilaine farce... bref pour palier au problème, je vous fait cette petite fiche.

## correction du bug

La matinée nous nous sommes arrêter sur un bug au niveau de notre application qui au lieu de renvoyer un objet cadex renvoyait `[object Object]`.

Le souci provenait d'une de nos boucles qui énumérait les propriétés de l'objet cadex pour éventuellement leur assigner une valeur transmise par l'utilisateur. En faisant cela, nous énumérions la propriété `toString` qui était écrasée par la propriété `request.body.toString`.

```javascript
updateCadex(request, response) {
    debug('updateCadex', request.body);
    cadexService.updateData(request.body);
    const cadexObject = cadexService.generate();
    // le bug est dans cette boucle, cadexObject a une proriété énumérable toString
    // request.body a une propriété du même nom...
    Object.keys(cadexObject).forEach((key) => {
      if (request.body[key]) {
        cadexObject[key] = request.body[key];
      }
    });
    response.json({ ...cadexObject, cadex: `${cadexObject}` });
  },
```

2 moyens de régler le problème :

- faire une autre boucle (sur `request.body` par exemple) avec test de la présence d'une propriété de même nom sur l'objet cadex.

```javascript
Object.keys(request.body).forEach((key) => {
  if (cadexObject[key]) {
    cadexObject[key] = request.body[key];
  }
});
```

- rendre la propriété `toString` non énumérable.

```javascript
// dans le service cadex
const cadexObject = {
  name,
  adjective,
  verb,
  complement,
};
// on ajoute une dernière propriété 'toString' à notre objet.
// on souhaite qu'elle ne soit ni énumérable, ni modifiable
Object.defineProperty(cadexObject, "toString", {
  enumerable: false,
  writable: false,
  value() {
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    // crée 2 variables, toString et parts. toString, vaut la propriété toString,
    // parts vaut un objet contenant toutes les autres propriétés
    const { toString, ...parts } = this;
    return Object.values(parts).join(" ");
  },
});
```

## Mise en place de routeurs multiples

En essayant de mettre en place un middleware pour gérer les erreurs 404 on se rend compte qu'on veut des erreurs différentes sur l'api (json) et le front (html).
Pour régler le problème avec élégance, on a séparé notre unique routeur en 2 routeurs `website` et `api` qu'on vient brancher sur un routeur principal sur des chemins différents

```javascript
// routeur api
router.get("/", apiController.getCadex);
router.post("/", apiController.updateCadex);
router.use(errorController.resourceNotFound);

// routeur website
router.get("/", mainController.getHome);
router.use(errorController.pageNotFound);

// routeur principal
router.use("/cadex", apiRouter);
router.use("/", websiteRouter);
```

cette manière de faire rend les chemins facilement modifiables, Les routes dans les sous module commençant toutes par '/' nous pourrons les "brancher" où on veut.
