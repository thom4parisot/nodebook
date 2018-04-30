# Node.js [![Build Linux][ci-linux]](https://travis-ci.org/oncletom/nodebook) [![Build Windows][ci-windows]](https://ci.appveyor.com/project/oncletom/nodebook)

> Apprendre par l'exemple • Devenez autonome avec JavaScript, l'écosystème npm, le développement frontend, les applications web et en ligne de commande.

Le contenu est actuellement **en cours d'écriture** 🚧. Certaines sections sont terminées ✅. Tu peux suivre la progression en lisant le [journal de bord][].

# Table des matières

| Statut | Chapitre                  | Objectif d'apprentissage | |
| -------|---------------------------|--------- |---|
| 🚧      | [Préface de David Bruant][foreword] | - | -
| ✅      | [Avant-propos][preamble] | - | -
| ✅      | **[Histoire, écosystème et gouvernance][ch01]** | _ça marche comment la vie de Node et des gens qui le font ?_ | [issues][ch01-issues]
| ✅      | **[Installer, mettre à jour et développer][ch02]** | _ça marche comment Node sur une machine ?_ | [issues][ch02-issues]
| ✅      | **[Jouer avec JavaScript][ch03]** | _ça marche comment JavaScript ?_ | [issues][ch03-issues]
| ✅      | **[Jouer avec Node.js][ch04]** | _ça marche comment les modules ?_ | [issues][ch04-issues]
| 🚧      | **[Jouer avec npm][ch05]** | _ça marche comment l'outil npm ?_ | [issues][ch05-issues]
| 💭      | **[Déployer notre code][ch06]** | _ça marche comment côté hosting ?_ | [issues][ch06-issues]
| 🚧      | **[Faire une application web][ch07]** |  _ça marche comment HTTP ?_ | [issues][ch07-issues]
| 🚧      | **[Faire un outil en ligne de commande][ch08]** | _ça marche comment du code métier dans le terminal ?_ | [issues][ch08-issues]
| ✅      | **[Faire une application frontend][ch09]** | _ça marche comment les modules Node dans les navigateurs web ?_ | [issues][ch09-issues]
| 🚧      | **_Annexe_ : [Sélection de modules npm][a01]** | - | [issues][appendix-issues]

# Lire

## Avec un navigateur web

L’épreuve est consultable gratuitement dans un navigateur Web à cette adresse : [https://oncletom.io/node.js/][livre-web] 🌐.

De nombreux **exemples sont interactifs** sans avoir à installer le moindre logiciel sur son ordinateur.

**Fonctionnalités** : exemples interactifs, vidéos, renvois.

## Au format papier / e-book

À venir.

## Avec Node.js et npm

Le livre est disponible en tant que **module npm** : [`nodebook`][livre-npm].
C'est le moyen recommandé pour **exécuter les exemples sur son ordinateur**.

```bash
$ npm install --global nodebook
```

La commande précédente télécharge une copie du livre, les exemples associés ainsi que leurs dépendances pour une utilisation hors-ligne.

Une fois installé, le manuel d'utilisation s'invoque avec l'argument `--help` :

```bash
$ nodebook --help

Commandes:
  nodebook chapters               Liste les chapitres de l'ouvrage.
  nodebook dir <chapter>          Affiche le chemin vers un chapitre.
  nodebook install <chapter|all>  Installe les dépendances d'un chapitre.
  nodebook read                   Démarre la lecture du livre au format HTML

Options:
  --version  Affiche le numéro de version                              [booléen]
  --help     Affiche de l'aide                                         [booléen]

Exemples:
  nodebook install chapter-04               Installe les dépendances du chapitre
                                            4
  nodebook install all                      Installe les dépendances de tous les
                                            chapitres
  cd $(nodebook dir chapter-04)             Place le terminal dans le répertoire
                                            d'exemples du chapitre 4
  cd $(nodebook dir chapter-04 --root)      Place le terminal dans le répertoire
                                            racine du chapitre 4
```

# Contribuer

Le moyen le plus simple de contribuer est de proposer une _pull request_.
L'**interface en ligne de GitHub** est de loin la plus simple à prendre en main.

## Installation

Il est possible de travailler sur une copie locale de l'épreuve en la dupliquant avec Git.

```bash
$ git clone --single-branch https:/github.com/oncletom/nodebok
$ cd nodebook
$ npm install
```

Optionellement, [git-lfs](https://git-lfs.github.com/) est nécessaire à la récupération des fichiers volumineux.

```bash
$ git lfs pull
```

## Prévisualiser

Un serveur local est disponible pour prévisualiser les modifications sans être connecté à Internet.

```bash
$ npm start
```

## Tests

La bonne santé des exemples est vérifiée à l'aide d'[ESLint](http://eslint.org/) et de [tape-spawn](https://npmjs.com/tape-spawn).

```bash
$ npm test
```

## Génération de l'épreuve HTML

```bash
$ npm run build:html
$ open ./dist
```

## Génération de l'épreuve DocBook

```bash
$ npm run build:docbook
$ soffice ./dist/book.xml
```

# Mentions légales

_Node.js — bonnes pratiques pour la programmation JavaScript applicative, universelle et modulaire_ est un ouvrage rédigé par [Thomas Parisot](https://oncletom.io). Il est édité et publié en format papier et e-book par [Eyrolles](http://www.eyrolles.fr).

L’épreuve est soumise à la licence [Creative Commons NC-BY-SA][cc-nc-by-sa] (_Attribution, Non-Commercial, Share Alike_).

Les exemples de code sont placés sous la [licence MIT][].

[ci-linux]: https://travis-ci.org/oncletom/nodebook.svg
[ci-windows]: https://ci.appveyor.com/api/projects/status/crewvvqeybl8f16c?svg=true
[journal de bord]: JOURNAL.md
[livre-web]: https://oncletom.io/node.js
[livre-npm]: https://npmjs.com/nodebook
[licence MIT]: LICENSE
[cc-nc-by-sa]: https://creativecommons.org/licenses/by-nc-sa/3.0/deed.fr
[foreword]: foreword/foreword-fr.adoc
[preamble]: foreword/preamble.adoc
[ch01]: chapter-01/index.adoc
[ch01-issues]: https://github.com/oncletom/nodebook/labels/:book:%20chapitre:1
[ch02]: chapter-02/index.adoc
[ch02-issues]: https://github.com/oncletom/nodebook/labels/:book:%20chapitre:2
[ch03]: chapter-03/index.adoc
[ch03-issues]: https://github.com/oncletom/nodebook/labels/:book:%20chapitre:3
[ch04]: chapter-04/index.adoc
[ch04-issues]: https://github.com/oncletom/nodebook/labels/:book:%20chapitre:4
[ch05]: chapter-05/index.adoc
[ch05-issues]: https://github.com/oncletom/nodebook/labels/:book:%20chapitre:5
[ch06]: chapter-06/index.adoc
[ch06-issues]: https://github.com/oncletom/nodebook/labels/:book:%20chapitre:6
[ch07]: chapter-07/index.adoc
[ch07-issues]: https://github.com/oncletom/nodebook/labels/:book:%20chapitre:7
[ch08]: chapter-08/index.adoc
[ch08-issues]: https://github.com/oncletom/nodebook/labels/:book:%20chapitre:8
[ch09]: chapter-09/index.adoc
[ch09-issues]: https://github.com/oncletom/nodebook/labels/:book:%20chapitre:9
[a01]: appendix-a/index.adoc
[appendix-issues]: https://github.com/oncletom/nodebook/labels/:book:%20chapitre:annexes
[a02]: appendix-b/index.adoc
