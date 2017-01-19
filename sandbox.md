# Sujets à aborder

- https://github.com/substack/stream-handbook
- https://nikhilm.github.io/uvbook/introduction.html
- testing
- spécifier version employée de Node au cours de l'ouvrage
- high precision maths
- version d'ES utilisée (+ `--harmony` pour ES6 implémenté dans V8)
- http://strongloop.com/strongblog/whats-new-node-js-v0-12-multiple-context-execution/
- si on fait du PHP etc.
- https://github.com/lloyd/node-toobusy (pour faire des modules en C)
- http://package.json.nodejitsu.com/
- V8 optimisation (http://floitsch.blogspot.co.uk/2012/03/optimizing-for-v8-introduction.html)
- http://nodeschool.io/
- https://www.npmjs.org/package/grunt-nsp-shrinkwrap
- http://strongloop.com/strongblog/robust-node-applications-error-handling/
- [SIMD for performance acceleration](http://engineering.voxer.com/2013/12/02/hardwareaccelerated-crc32-for-nodejs/)
- domains is a way of grouping I/O actions
- I'm not particularly huge fan of JavaScript. I wish CoffeeScript would be JavaScript. But CS is adding a new layer of complexity.
- don't add to much unstableness into your world

---

Common objections on adopting Node:

- callback soup (blocking is a shallow way of callback depth)
- immaturity of the project (segfaults rarely): "that will change with time, we are only a 2 years old project"
- debugging is difficult (because of restructured stacks)
- upload problem and security of the system (unforgiving if you hit an exception)
- not cool enough
- too cool/trendy


---

- 43ms to start a 30MB Node process (good amount of time, human noticeable).
Process is supposed to be living a long time to handle hundreds of connections.
- 1 connection = 1K of memory.
- New V8 context = 1.5ms.

---


> To provide a purely evented, non-blocking infrastructure to script highly concurrent programs.

> No function should directly perform I/O.

==== Inspirations

- EventMachine en Ruby, Twisted/Tornado en Python
- Ngninx
- Browser

==== Design Goals

- low level
- stream everything (never force the buffering of data)
- to not remove functionality present at the POSIX layer (it has to support half-closed TCP connections)
- built-in support for most important/infrastructural/low level protocols (DNS, HTTP, TLS)
- support many HTTP features (chunked encoding, pipelined messaged, hanging/long-polling requests (ex-Comet))
- API should be familiar for client-side JS programmers and old-school UNIX programmers
- be platform independant
- simply licensed (~100% MIT, OpenSSL has own license (maybe has changed))
- make it enjoyable

==== Architecture

> wrapper around `select`

JavaScript
- node standard library

C
- node bindings (event if most the stuff is written is JS anyway)
- V8
- thread pool
- event loop

JavaScript layer = 1 thread
C layer = multiple threads (targeting only experts)

Exits automatically when there is nothing else to do (nothing in the queue nor the pool - which is why an uncaught exception breaks the function, cancels everything and stops the program execution).

Slow development to mature features and break compatibility as few times as possible. Enables to libraries to update with confidence. Upgrades are less painful.

> For security, set it behind a stable Web server.

[TIP]
.[RemarquePreTitre]#Vidéo# _Introduction to Node.js_
====
Ryan Dahl, le créateur de Node, explique dans cette vidéo comment les fondamentaux de la plate-forme ont influencé sa conception et façonné son architecture.

- http://www.youtube.com/watch?v=M-sc73Y-zQA
====


## HTTP

- attention en exposant les erreurs a coup de `next(err)` (cf. chapter-04/images/error-NO_ENT.png)

## npm

- Firefox Jetpack w/ jpm (cf. http://work.erikvold.com/jetpack/2014/08/07/cfx-to-jpm.html)
- https://github.com/atom/apm


# Robustesse

== Rendre ses applications robustes

=== Prévenir les plantages

=== Cas typiques de code à surveiller

=== Sécurité des données

==== Données malicieuses

==== Infiltration du système de fichier

[TIP]
====
.[.tip-titre]#Exemple# Vulnérabilité dans un paquet npm
Versions prior to 0.2.5 did not properly prevent folder traversal. Literal dots in a path were resolved out, but url encoded dots were not. Thus, a request like /%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/etc/passwd would leak sensitive data from the server.

As of version 0.2.5, any ‘/../‘ in the request path, url encoded or not, will be replaced with ‘/‘. If your application depends on url traversal, then you are encouraged to please refactor so that you do not depend on having .. in url paths, as this tends to expose data that you may be surprised to be exposing.

- https://www.npmjs.org/package/st
- http://blog.npmjs.org/post/80277229932/newly-paranoid-maintainers
====
