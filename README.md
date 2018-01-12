# Node.js [![Build Status][]](https://travis-ci.org/oncletom/nodebook)

> Bonnes pratiques pour la programmation JavaScript applicative, universelle et modulaire

Le contenu est actuellement **en cours d'écriture** 🚧. Certaines sections sont terminées ✅. Tu peux suivre la progression en lisant le [journal de bord][].

# Table des matières

| Statut | Chapitre                  | Objectif d'apprentissage | |
| -------|---------------------------|--------- |---|
| 🚧      | [Préface de David Bruant][foreword] | - | -
| ✅      | [Avant-propos][preamble] | - | -
| ✅      | **[Histoire, écosystème et gouvernance][ch01]** | _ça marche comment la vie de Node et des gens qui le font ?_ | [issues][ch01-issues]
| ✅      | **[Installer, mettre à jour et développer][ch02]** | _ça marche comment Node sur une machine ?_ | [issues][ch02-issues]
| 🚧      | **[Jouer avec JavaScript][ch03]** | _ça marche comment JavaScript ?_ | [issues][ch03-issues]
| 🚧      | **[Jouer avec Node.js][ch04]** | _ça marche comment les modules ?_ | [issues][ch04-issues]
| 🚧      | **[Jouer avec npm][ch05]** | _ça marche comment l'outil npm ?_ | [issues][ch05-issues]
| 🚧      | **[Déployer notre code][ch06]** | _ça marche comment côté hosting ?_ | [issues][ch06-issues]
| 🚧      | **[Faire une application web][ch07]** |  _ça marche comment HTTP ?_ | [issues][ch07-issues]
| 🚧      | **[Faire un outil en ligne de commande][ch08]** | _ça marche comment du code métier dans le terminal ?_ | [issues][ch08-issues]
| ✅      | **[Faire une application frontend][ch09]** | _ça marche comment les modules Node dans les navigateurs web ?_ | [issues][ch09-issues]
| 🚧      | **_Annexe_ : [Sélection de modules npm][a01]** | - | [issues][appendix-issues]
| 🚧      | **_Annexe_ : [Design Patterns][a02]** | - | [issues][appendix-issues]

# Lire

## En ligne

L’épreuve est consultable gratuitement dans un navigateur Web à cette adresse : [https://oncletom.io/node.js/][livre-web] 🌎.

De nombreux exemples sont interactifs sans avoir à installer le moindre logiciel sur son ordinateur.

**Fonctionnalités** : exemples interactifs, vidéos, renvois.

## Au format papier / e-book

À venir.

## Avec Node.js

Cette commande télécharge une copie du livre, les exemples associés ainsi que leurs dépendances pour une utilisation hors-ligne.

Le livre s'installe de cette manière, via un terminal :

```bash
$ npm install --global nodebook@latest
```

Une fois installé, le manuel d'utilisation s'invoque de cette manière :

```bash
$ nodebook --help
nodebook

Commands:
  nodebook chapters [list]        Liste les chapitres de l'ouvrage.
  nodebook install <chapter|all>  Installe les dépendances d'un chapitre.
  nodebook open <chapter>         Ouvre les examples d'un chapitre.
  nodebook read                   Démarre la lecture du livre au format HTML

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]

Examples:
  nodebook install chapter-04  Installe les dépendances du chapitre 4
  nodebook install all         Installe les dépendances de tous les chapitres
  nodebook open chapter-04     Ouvre le chapitre 4 dans un explorateur de
                               fichiers
```

# Contribuer

Le moyen le plus simple de contribuer est de proposer une _pull request_.
L'**interface en ligne de GitHub** est de loin la plus simple à prendre en main.

## Installation

Il est possible de travailler sur une copie locale de l'épreuve en la dupliquant avec Git. [git-lfs](https://git-lfs.github.com/) est nécessaire à la récupération des fichiers volumineux.

```bash
$ git clone --single-branch https:/github.com/oncletom/nodebok
$ cd nodebook
$ npm install
$ git lfs pull # si vous avez installé git-lfs après avoir cloné le dépôt
```

## Prévisualiser

Un serveur local est également disponible pour prévisualiser vos modifications sans être connecté à Internet.

```bash
$ PORT=3000 npm start
```

## Tests

Le code des exemples est vérifié à l'aide d'[ESLint](http://eslint.org/).
La commande suivante vérifiera que la syntaxe ECMAScript n'entraine pas d'effet secondaires indésirables.

```bash
$ npm test
```

## Génération de l'épreuve HTML

```bash
$ npm run build:html
$ open ./dist
```

# Mentions légales

_Node.js — bonnes pratiques pour la programmation JavaScript applicative, universelle et modulaire_ est un ouvrage rédigé par [Thomas Parisot](https://oncletom.io). Il est édité et publié en format papier et e-book par [Eyrolles](http://www.eyrolles.fr).

L’épreuve est soumise à la licence [Creative Commons NC-BY-SA][cc-nc-by-sa] (_Attribution, Non-Commercial, Share Alike_).

Les exemples de code sont placés sous la [licence MIT][].

[Build Status]: https://travis-ci.org/oncletom/nodebook.svg
[journal de bord]: JOURNAL.md
[livre-web]: https://oncletom.io/node.js
[licence MIT]: LICENSE
[cc-nc-by-sa]: https://creativecommons.org/licenses/by-nc-sa/3.0/deed.fr
[foreword]: foreword/foreword-fr.adoc
[preamble]: foreword/preamble.adoc
[ch01]: chapter-01/index.adoc
[ch01-issues]: https://github.com/oncletom/nodebook/labels/chapitre:1
[ch02]: chapter-02/index.adoc
[ch02-issues]: https://github.com/oncletom/nodebook/labels/chapitre:2
[ch03]: chapter-03/index.adoc
[ch03-issues]: https://github.com/oncletom/nodebook/labels/chapitre:3
[ch04]: chapter-04/index.adoc
[ch04-issues]: https://github.com/oncletom/nodebook/labels/chapitre:4
[ch05]: chapter-05/index.adoc
[ch05-issues]: https://github.com/oncletom/nodebook/labels/chapitre:5
[ch06]: chapter-06/index.adoc
[ch06-issues]: https://github.com/oncletom/nodebook/labels/chapitre:6
[ch07]: chapter-07/index.adoc
[ch07-issues]: https://github.com/oncletom/nodebook/labels/chapitre:7
[ch08]: chapter-08/index.adoc
[ch08-issues]: https://github.com/oncletom/nodebook/labels/chapitre:8
[ch09]: chapter-09/index.adoc
[ch09-issues]: https://github.com/oncletom/nodebook/labels/chapitre:9
[a01]: appendix-a/index.adoc
[appendix-issues]: https://github.com/oncletom/nodebook/labels/chapitre:annexes
[a02]: appendix-b/index.adoc
