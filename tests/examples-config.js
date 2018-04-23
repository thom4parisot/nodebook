'use strict';

const YEAR = new Date().getFullYear();

module.exports = {
  'appendix-a/examples/npm/faye.js': {
    skip: true
  },
  'appendix-a/examples/npm/inquirer.js': {
    skip: true
  },
  'appendix-a/examples/npm/knex.js': {
    skip: true
  },
  'appendix-a/examples/npm/mongoose.js': {
    skip: true
  },
  'appendix-a/examples/npm/redis.js': {
    skip: true
  },
  'appendix-a/examples/npm/restify.js': {
    skip: true
  },
  'appendix-b/examples/events-setmaxlisteners.js': {
    skip: true
  },
  'appendix-b/examples/callback.js': {
    stderr: 'TypeError: message is not a String'
  },
  'appendix-b/examples/promise-errors.js': {
    stderr: 'Erreur volontaire'
  },
  'appendix-b/examples/streams-large.js': {
    exitCode: 1,
    stderr: 'SyntaxError: Unexpected end of JSON input'
  },
  'chapter-03/examples/array/node-list.js': {
    exitCode: 1,
    stderr: 'ReferenceError: document is not defined'
  },
  'chapter-03/examples/promise/then-catch.js': {
    stderr: 'le nombre de secondes n\'est pas impair'
  },
  'chapter-03/examples/scopes/global.js': {
    exitCode: 1,
    stderr: 'ReferenceError: value is not defined'
  },
  'chapter-03/examples/scopes/lexical.js': {
    exitCode: 1,
    stderr: 'ReferenceError: price is not defined'
  },
  'chapter-03/examples/scopes/local.js': {
    exitCode: 1,
    stderr: 'ReferenceError: mot is not defined'
  },
  'chapter-03/examples/variables/const.js': {
    exitCode: 1,
    stderr: 'SyntaxError: Identifier \'base_price\' has already been declared'
  },
  'chapter-03/examples/class-constructor.js': {
    stderr: 'Error: Extend the View class to render content'
  },
  'chapter-03/examples/definition.js': {
    exitCode: 1,
    stderr: 'ReferenceError: document is not defined'
  },
  'chapter-03/examples/function.js': {
    exitCode: 1,
    stderr: 'ReferenceError: values is not defined'
  },
  'chapter-03/examples/object-getters-shorthand.js': {
    exitCode: 1,
    stderr: 'TypeError: Cannot set property .+ which has only a getter'
  },
  'chapter-03/examples/object-getters.js': {
    exitCode: 1,
    stderr: 'Error: Invalid date given'
  },
  'chapter-03/examples/date/base.js': {
    stdout: `2013\n${YEAR}\n`
  },
  'chapter-04/examples/process/stdin-uppercase.js': {
    stdin: 'un deux trois',
    stdout: 'UN DEUX TROIS'
  },
  'chapter-04/examples/process/exit-devinette.js': {
    stdin: '3',
    stdout: /Tu as trouvé, bravo !/
  },
  'chapter-04/examples/process/exit-error.js': {
    exitCode: 1,
    stderr: 'ReferenceError: jenexistepas is not defined'
  },
  'chapter-04/examples/process/interrupt.js': {
    skip: true,
  },
  'chapter-04/examples/process/stdout-long.js': {
    skip: true,
  },
  'chapter-04/examples/console/log.js': {
    stdout: 'Valeur de count : 3\n',
  },
  'chapter-04/examples/console/interpolate.js': {
    stdout: 'Soupe lentilles et carottes\n',
  },
  'chapter-04/examples/console/intro.js': {
    stdout: '/tmp\npackage.json\n.json\n',
  },
  'chapter-04/examples/console/platform.js': {
    stdout: '/\ntmp/package.json\n',
    win32stdout: '\\\ntmp\\package.json\n',
  },
  'chapter-04/examples/console/relative.js': {
    stdout: '../source\n/tmp/source\n',
    win32stdout: '//\\source\nC:\\tmp\\source\n',
  },
  'chapter-04/examples/console/win32.js': {
    stdout: 'tmp\\package.json\nC:\\etc\n',
  },
  'chapter-04/examples/modules/ecmascript-multiple.mjs': {
    stderr: 'ExperimentalWarning: The ESM module loader is experimental',
  },
  'chapter-04/examples/modules/ecmascript.js': {
    exitCode: 1,
    stderr: 'SyntaxError: Unexpected token import',
  },
  'chapter-04/examples/modules/ecmascript.mjs': {
    stderr: 'ExperimentalWarning: The ESM module loader is experimental',
  },
  'chapter-04/examples/modules/increment.mjs': {
    stderr: 'ExperimentalWarning: The ESM module loader is experimental',
  },
  'chapter-04/examples/url/format.js': {
    stdout: 'https://oncletom.io/\n',
  },
  'chapter-04/examples/child_process/intro.js': {
    stdout: /version installée de npm : \d+.\d+.\d+/,
  },
  'chapter-04/examples/child_process/ls.js': {
    stdout: /server.js/,
  },
  'chapter-04/examples/child_process/ls-root.js': {
    stdout: /var/,
    win32stdout: /Program Files/,
  },
  'chapter-04/examples/child_process/ping.js': {
    skip: Boolean(process.env.CI) || Boolean(process.env.DOCKER),
  },
  'chapter-04/examples/child_process/spawn-stdin.js': {
    stdout: 'abcd klmn\n',
  },
  'chapter-04/examples/child_process/spawn-shell-stdin.js': {
    stdout: 'abcd klmn\n',
  },
  'chapter-04/examples/events/class.js': {
    stdout: 'La voiture Boombo est en train de démarrer\n',
  },
  'chapter-04/examples/events/intro.js': {
    stdout: 'Année : 2018\nAnnée : 1983\n',
  },
  'chapter-04/examples/events/once.js': {
    stdout: 'Année : 2018\n',
  },
  'chapter-04/examples/events/remove.js': {
    skip: true,
  },
  'chapter-04/examples/fs/copy-tmp.js': {
    stdout: /La copie vers .+example-copy.js s'est bien passée./,
  },
  'chapter-04/examples/fs/intro.js': {
    stdout: /fs.readFile\(__filename/,
  },
  'chapter-04/examples/fs/ls.js': {
    stdout: /package.json/,
  },
  'chapter-04/examples/fs/rmdir.js': {
    stderr: 'ENOTEMPTY: directory not empty',
  },
  'chapter-04/examples/http/intro.js': {
    stdout: /"name": "nodebook"/,
  },
  'chapter-04/examples/http/get.js': {
    stdout: /Transmission finie en \d+ morceaux/,
  },
  'chapter-04/examples/http/request.js': {
    stdout: /Dernière modification : .+ \d{4} .+ GMT/,
  },
  'chapter-04/examples/http/server.js': {
    skip: true
  },
  'chapter-04/examples/http/web-server.js': {
    skip: true
  },
  'chapter-04/examples/http/web-server-ok.js': {
    skip: true
  },
  'chapter-04/examples/http/web-server-routes.js': {
    skip: true
  },
  'chapter-04/examples/stream/intro.js': {
    stdout: '214 octets lus\n'
  },
  'chapter-04/examples/stream/read.js': {
    stdout: '100 octets reçus\n100 octets reçus\n60 octets reçus\nLecture terminée\n'
  },
  'chapter-04/examples/stream/write.js': {
    stdout: 'Hello World!\n'
  },
  'chapter-04/examples/os/intro.js': {
    stdout: /L'ordinateur a \d+ CPU et une session ouverte par .+./,
  },
  'chapter-04/examples/os/apps.js': {
    stdout: /^Applications installées sous (Linux|macOS) :/,
    win32stdout: /^Applications installées sous Windows :/,
  },
  'chapter-04/examples/url/intro.js': {
    stdout: 'oncletom.io\n/node.js/\n',
  },
  'chapter-04/examples/url/resolve.js': {
    stdout: 'https://oncletom.io/node.js/\nhttps://oncletom.io/\n',
  },
  'chapter-04/examples/url/search-params.js': {
    stdout: 'https://oncletom.io/?search=node.js\nsearch=node.js\nhttps://oncletom.io/\n',
  },
  'chapter-04/examples/url/to-string.js': {
    stdout: 'https://oncletom.io/#top\nhttps://oncletom.io/#top\n',
  },
  'chapter-04/examples/util/debuglog.js': {
    stdout: /Cet ordinateur a \d+ CPU./,
  },
  'chapter-06/examples/app.js': {
    skip: true
  },
  'chapter-06/examples/debug.js': {
    timeout: 6000
  },
  'chapter-06/examples/server-port80.js': {
    skip: true
  },
  'chapter-06/examples/config/env.js': {
    skip: true
  },
  'chapter-07/examples/http-app.js': {
    skip: true
  }
};
