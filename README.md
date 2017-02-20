# Node.js [![Build Status](https://travis-ci.org/oncletom/nodebook.svg)](https://travis-ci.org/oncletom/nodebook)

> Bonnes pratiques pour la programmation JavaScript applicative, universelle et modulaire

![](cover.png?raw=1)

# Table des matières

Écriture    | Relecture  | Chapitre
:----------:|:----------:|:--------
            |            | [Préface de David Bruant][foreword]
:memo:      |:x:         | [Avant-propos][preamble]
:ok:        |:ok:        | [Introduction à Node.js][ch01]
:ok:        |:x:         | [Premiers pas avec Node.js][ch02]
:construction: |:x:      | [Développer un service web][ch03]
:memo:      |:x:         | [Développer pour les navigateurs web][ch04]
:x:         |:x:         | [Développer un automate de traitement de données][ch05]
:x:         |:x:         | [Développer une application native][ch06]
:x:         |:x:         | [Héberger, déployer et monitorer][ch07]
:x:         |:x:         | _Annexe A_ : [Sélection de modules npm][a01]

# Installation

Cette commande télécharge une copie du livre, les exemples associés ainsi que leurs dépendances pour une utilisation hors-ligne.

```bash
$ nodebook --help
Commands:
  chapter <number> <install|open|start>  Installe, ouvre ou démarre un chapitre.
  read                                   Démarre la lecture du livre au format
                                         HTML

Options:
  --help  Show help                                                    [boolean]
```

# Participation

Le moyen le plus simple de contribuer est de proposer une *pull request*.
L'interface en ligne de GitHub est la solution la plus simple.

## Installation

Il est possible de travailler sur une copie locale de l'épreuve :

```bash
git clone https:/github.com/oncletom/nodebok && cd nodebook
npm install
make install
```

## Prévisualiser

Un serveur local est également disponible pour prévisualiser vos modifications sans être connecté à Internet.

```bash
$ nodebook read
```

Des extensions [Chrome][adoc-chrome] et [Firefox][adoc-firefox] se chargeront du rendu en temps réel dans le navigateur. Dans les options de l'extension, prenez soin d'autoriser le chargement des fichiers et utilisez le mode `safe` pour autoriser le rendu des exemples de code :

![](asciidoctor-extension-config.png)

[adoc-chrome]: https://chrome.google.com/webstore/detail/asciidoctorjs-live-previe/iaalpfgpbocpdfblpnhhgllgbdbchmia
[adoc-firefox]: https://addons.mozilla.org/fr/firefox/addon/asciidoctorjs-live-preview/

## Tests

Le code des exemples est vérifié à l'aide d'[ESLint](http://eslint.org/).
La commande suivante vérifiera que la syntaxe ECMAScript n'entraine pas d'effet secondaires indésirables.

```bash
npm test
```

## Génération de l'épreuve HTML

```bash
make build && open ./public
```


# Lire le livre

L’épreuve est consultable dans un navigateur Web via [oncletom.io/node.js][livre-web].

La version Web est générée automatiquement et directement à partir des sources Asciidoc utilisées pour l'épreuve papier.

Le livre sera disponible en rayons lorsque le Bon à Tirer (BAT) aura été signé (première moitié 2017).

# Mentions légales

*Node.js — bonnes pratiques pour la programmation JavaScript applicative, universelle et modulaire* est un ouvrage rédigé par [Thomas Parisot](https://oncletom.io) et publié aux éditions [Eyrolles](http://www.eyrolles.fr).

L’épreuve est soumise à la licence [Creative Commons NC-BY-SA][cc-nc-by-sa] (*Attribution, Non-Commercial, Share Alike*).

Les exemples de code sont soumis à une licence MIT et le cas échéant, à une license spécifiée par l’auteur du programme.

[livre-web]: https://oncletom.io/node.js
[cc-nc-by-sa]: https://creativecommons.org/licenses/by-nc-sa/3.0/deed.fr
[foreword]: foreword/foreword-fr.adoc
[preamble]: foreword/preamble.adoc
[ch01]: chapter-01/index.adoc
[ch02]: chapter-02/index.adoc
[ch03]: chapter-03/index.adoc
[ch04]: chapter-04/index.adoc
[ch05]: chapter-05/index.adoc
[ch06]: chapter-06/index.adoc
[ch07]: chapter-07/index.adoc
[a01]: appendix-a/index.adoc
