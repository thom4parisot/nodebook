# Node.js — Bonnes pratiques pour la programmation JavaScript côté serveur

> Livre à paraître aux éditions Eyrolles en septembre 2014.

# Table des matières

1. [Préface](chapters/01-foreword.adoc)
1. [Introduction à Node.js](chapters/02-introduction.adoc)
  1. Node.js : la plateforme JavaScript côté serveur
  1. Historique du projet
  1. Les raisons du succès
  1. Pourquoi choisir Node.js ?
  1. Pourquoi éviter Node.js ?
  1. L'écosystème Node.js
    1. Joyent
    1. Nodejitsu
    1. Node Security Project
  1. Qui gère Node.js ?
1. [Préparer son environnement Node.js](chapters/03-environment.adoc)
  1. Command Line Terminal
  1. Installer Node.js
    1. Depuis les sources
    1. Node Version Manager
  1. Environnement de Développement Intégré (IDE)
    1. WebStorm
    1. SublimeText
    1. Brackets
    1. vim
    1. Visual Studio
1. [Comprendre Node.js](chapters/04-understanding.adoc)
  1. Philosophie
  1. Architecture
    1. Machine Virtuelle V8
    1. EventLoop
    1. Asynchronicité
    1. `libuv`
  1. Les variables globales
    1. `export`
    1. `module`
    1. `process`
    1. `_`
  1. Design Patterns
    1. Pourquoi "non-bloquant" ?
    1. Les modules
    1. L'injection
    1. Les callbacks
    1. Les promesses
    1. Les évènements
    1. `nextTick`
    1. `index.js`
    1. Configuration dans `process.env`
    1. Configuration dans `package.json` 
1. [`npm`](chapters/05-npm.adoc)
  1. Philosophie
  1. Qui gère `npm` ?
  1. `npm init`
  1. `npm install`
  1. Bien choisir un paquet `npm`
  1. Autres projets basés sur `npm`
    1. Composants Web
    1. Mozilla Jetpack
    1. `libc`
    1. Titanium
1. Node.js pour des applications système
  1. Mon premier programme système !
  1. Un programme avec aide, options et arguments optionnels
  1. Rendre un programme installable à l'échelle du système
  1. Proposer un manuel `man`
  1. Faire communiquer deux process
  1. Manipuler des images
1. Node.js pour les applications temps-réel
1. Node.js pour des applications Web
1. Node.js pour le développeur frontend
  1. Gestion des librairies
    1. bower
    1. npm
    1. Ender
    1. Components
    1. Webpack
  1. Tâches utiles
    1. Vérification syntaxique
    1. Concaténation et minification
    1. Préprocesseurs
    1. Optimisation des images
  1. Automatisation des tâches
  1. Partager du code entre Node.js et le navigateur
1. Node.js et le monde physique
  1. Microcontrolleurs
    1. Arduino
    1. Raspberry Pi
    1. Tessel
    1. Espruino
  1. Internet of Things (IoT)
    1. Nodecopters
    1. Hue / Nest
    1. Imprimantes 3D
    1. Smart TV
    1. Instruments de musique
    1. Œuvres artistiques
1. Node.js avancé
  1. Node.js sans JavaScript
  1. `node-gyp` ou écrire en C++ pour `libuv`
  1. `node debug`
  1. Flags avancés (`node --v8-options`)
1. `npm` avancé
  1. Variables d'environnement
  1. `npm run-script`
  1. `npm shrinkwrap`
  1. `npm publish`
  1. `npm link`
  1. `npm outdated` 


# Sujets à aborder

- https://github.com/substack/stream-handbook
- tooling
- testing
- joyent + entreprises gravitant autour
- http://strongloop.com/strongblog/whats-new-node-js-v0-12-multiple-context-execution/
- si on fait du PHP etc.
- https://github.com/lloyd/node-toobusy (pour faire des modules en C)
