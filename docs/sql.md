# notions SQL

le langage SQL est divisé en plusieurs parties :

- DDL : data definition language (create table, alter table etc...) : tout ce qui sert à définir la structure des données
- DML : data manipulation language (insert, update, delete...) : tout ce qui sert à ajouter/modifier/effacer des données
- DQL : data query language (select) : tout ce qui sert à écrire des requêtes pour récupérer des données
- DCL : data control language (grant...) : tout ce qui sert à gèrer les droits des utilisateurs

## Typage

Il est important de remplir notre db avec des données aussi justes que possible (on parle de données qualifiées).
Pour ce faire on met en place un maximum de contraintes sur chaque colonne.

### types pour les chaines

il existe 3 types permettant de définir une chaine de caractères :

- `char(n)` : pour définir une chaine de longueur fixe définie
- `varchar(n)` : pour définir une chaine de longueur maximale définie
- `text` : pour définir une chaine de longueur indéterminée

à noter : il n'y a pas d'inconvénient au niveau performance à utiliser `text` plutôt que `varchar(n)`

### types pour les nombres

Il existe de nombreux types pour les nombres, les plus utilisés sont :

- `INT` pour les entiers
- `DECIMAL` ou `NUMERIC` pour les nombres à virgule (flottants)

### Durée

Il existe un type particulier permettant de définir une durée : `INTERVAL`.
Il est possible d'effectuer des opérations combinant un timestamp et un interval, par exemple, pour récupérer un timestamp correpondant à demain :

```sql
SELECT now() + '1 day'::INTERVAL;
```

### La valeur NULL

NULL est une valeur ayant un comportement particulier. Elle absorbe/avale toutes les autres valeurs lorsqu'elle fait partie d'une opération. Si on ajoute un nombre et `NULL` on obtient toujours `NULL`. Si on concatène des chaines de caractères avec `NULL`, le résultat sera également `NULL`. etc...
