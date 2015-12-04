# Node.js [![Build Status](https://travis-ci.org/oncletom/nodebook.svg)](https://travis-ci.org/oncletom/nodebook)

> Bonnes pratiques pour la programmation JavaScript applicative, universelle et modulaire

![](cover.png?raw=1)

# Table des matières

Écriture    | Relecture  | Chapitre
:----------:|:----------:|:--------
            |            | [Préface de David Bruant](foreword/foreword-fr.adoc)
:wavy_dash: |            | [Avant-propos](foreword/preamble.adoc)
:v:         |:wavy_dash: | [Introduction à Node.js](chapter-01/index.adoc)
:v:         |:wavy_dash: | [Premiers pas avec Node](chapter-02/index.adoc)
:v:         |:wavy_dash: | [Premier projet](chapter-03/index.adoc)
:muscle:    |            | [Au service du développement frontend](chapter-04/index.adoc)
:x:         |            | *Déploiement et hébergement*
:x:         |            | *Bonnes pratiques pour des applications robustes*
:x:         |            | *Cas pratiques d'utilisation*

# Installation

Cette commande télécharge une copie du livre, les exemples associés ainsi que leurs dépendances pour une utilisation hors-ligne.

```bash
npm i -g nodebook@latest
```

# Participation

Le moyen le plus simple de contribuer est de proposer une *pull request*.
L'interface en ligne de GitHub est la solution la plus simple.

## Installation

Il est possible de travailler sur une copie locale de l'épreuve :

```bash
git clone https:/github.com/oncletom/nodebokcd nodebook
npm install
make install
```

## Prévisualiser

Un serveur local est également disponible pour prévisualiser vos modifications sans être connecté à Internet.

```bash
npm start
```

Des extensions [Chrome][adoc-chrome] et [Firefox][adoc-firefox] se chargeront du rendu en temps réel dans le navigateur.

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

Le livre sera disponible en rayons lorsque le Bon à Tirer (BAT) aura été signé (première moitié 2016).

# Mentions légales

*Node.js — bonnes pratiques pour la programmation JavaScript applicative, universelle et modulaire* est un ouvrage rédigé par [Thomas Parisot](https://oncletom.io) et publié aux éditions [Eyrolles](http://www.eyrolles.fr).

L’épreuve est soumise à la licence [Creative Commons NC-BY-SA][cc-nc-by-sa] (*Attribution, Non-Commercial, Share Alike*).

Les exemples de code sont soumis à une licence MIT et le cas échéant, à une license spécifiée par l’auteur du programme.


[livre-web]: https://oncletom.io/node.js
[cc-nc-by-sa]: https://creativecommons.org/licenses/by-nc-sa/3.0/deed.fr