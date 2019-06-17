'use strict';

const YEAR = new Date().getFullYear();

module.exports = {
  'appendix-a/examples/debug.js': {
    timeout: 6000
  },
  'appendix-a/examples/faye.js': {
    skip: true
  },
  'appendix-a/examples/inquirer.js': {
    skip: true
  },
  'appendix-a/examples/knex.js': {
    skip: true
  },
  'appendix-a/examples/mongoose.js': {
    skip: true
  },
  'appendix-a/examples/redis.js': {
    skip: true
  },
  'appendix-a/examples/restify.js': {
    skip: true
  },
  'appendix-a/examples/tcomb.js': {
    errorCode: 1,
    stderr: 'Invalid additional prop',
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
  'chapter-03/examples/variables/const-freeze.js': {
    exitCode: 1,
    stderr: 'Cannot add property 3, object is not extensible'
  },
  'chapter-03/examples/class-constructor.js': {
    stderr: 'Error: Extend the View class to render content'
  },
  'chapter-03/examples/intro/dom.js': {
    exitCode: 1,
    stderr: 'ReferenceError: document is not defined'
  },
  'chapter-03/examples/intro/web.js': {
    exitCode: 1,
    stderr: 'ReferenceError: fetch is not defined'
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
  'chapter-03/examples/number/parse-int.js': {
    stdout: '16\n10\n2560\n',
  },
  'chapter-04/examples/errors/callback.js': {
    stderr: 'ENOENT'
  },
  'chapter-04/examples/errors/on-error-uncaught.js': {
    stderr: 'Unhandled \'error\' event'
  },
  'chapter-04/examples/errors/on-error.js': {
    stderr: 'Error: Oops !'
  },
  'chapter-04/examples/errors/promise-chain.js': {
    stderr: 'Erreur : Oops !'
  },
  'chapter-04/examples/errors/promise.js': {
    stderr: 'Error: Oops !'
  },
  'chapter-04/examples/errors/promise-no-catch.js': {
    stderr: 'UnhandledPromiseRejectionWarning'
  },
  'chapter-04/examples/runtime-error.js': {
    stderr: 'TypeError'
  },
  'chapter-04/examples/syntax-error.js': {
    stderr: 'SyntaxError'
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
  'chapter-04/examples/deprecation-warning.js': {
    stderr: 'DeprecationWarning: Buffer\\(\\) is deprecated due to security and usability issues. Please use the Buffer.alloc\\(\\), Buffer.allocUnsafe\\(\\), or Buffer.from\\(\\) methods instead.',
  },
  'chapter-04/examples/modules/ecmascript-multiple.mjs': {
    stderr: 'ExperimentalWarning: The ESM module loader is experimental',
  },
  'chapter-04/examples/modules/ecmascript.js': {
    exitCode: 1,
    stderr: 'SyntaxError: Unexpected',
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
    stdout: /npm version \d+.\d+.\d+/,
  },
  'chapter-04/examples/child_process/ls.js': {
    stdout: /index.adoc/,
  },
  'chapter-04/examples/child_process/ls-root.js': {
    stdout: /var/,
    win32stdout: /Program Files/,
  },
  'chapter-04/examples/child_process/ping.js': {
    skip: Boolean(process.env.CI),
  },
  'chapter-04/examples/child_process/spawn-stdin.js': {
    stdout: 'abcd klmn\n',
  },
  'chapter-04/examples/child_process/spawn-shell-stdin.js': {
    stdout: 'abcd klmn\n',
  },
  'chapter-04/examples/events/class.js': {
    stdout: 'Boombo est en train de démarrer\n',
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
  'chapter-04/examples/fs/intro.js': {
    stdout: /package.json/,
  },
  'chapter-04/examples/fs/intro-promises.js': {
    stdout: /package.json/,
  },
  'chapter-04/examples/fs/copy-tmp.js': {
    stdout: /Copie vers (.+) OK !/,
  },
  'chapter-04/examples/fs/rmdir.js': {
    stderr: /ENOTEMPTY/,
  },
  'chapter-04/examples/fs/readfile.js': {
    stdout: /<Buffer (.+) more bytes>/,
  },
  'chapter-04/examples/fs/readfile-utf8.js': {
    stdout: /__filename/,
  },
  'chapter-04/examples/http/intro.js': {
    stdout: /"name": "nodebook"/,
  },
  'chapter-04/examples/http/get.js': {
    stdout: /Fini (.+ morceaux)/m,
  },
  'chapter-04/examples/http/request.js': {
    stdout: /Modifié le .+ \d{4} .+ GMT/,
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
    stdout: /(\d+ octets reçus\n){3}Lecture terminée\n/
  },
  'chapter-04/examples/stream/write.js': {
    stdout: 'Hello World!\n'
  },
  'chapter-04/examples/os/intro.js': {
    stdout: /Salut .+, cet ordinateur a \d+ CPU./,
  },
  'chapter-04/examples/os/apps.js': {
    stdout: /.+/,
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
    stdout: 'https://oncletom.io/#top\n',
  },
  'chapter-04/examples/util/debuglog.js': {
    stdout: /Cet ordinateur a \d+ CPU./,
  },
  'chapter-05/examples/tests.js': {
    command: 'mocha'
  },
  'chapter-06/examples/app.js': {
    skip: true
  },
  'chapter-06/examples/server-port.js': {
    skip: true
  },
  'chapter-06/examples/server-port-dynamic.js': {
    skip: true
  },
  'chapter-06/examples/sql-connect.js': {
    exitCode: 1,
    stderr: 'TypeError'
  },
  'chapter-06/examples/sentry.js': {
    errorCode: 1,
    stderr: 'no DSN provided, error reporting disabled\nReferenceError: test is not defined'
  },
  'chapter-07/examples/arguments/format.js': {
    skip: true
  },
  'chapter-07/examples/arguments/intro.js': {
    skip: true
  },
  'chapter-07/examples/arguments/parse.js': {
    skip: true
  },
  'chapter-07/examples/cookies/parse.js': {
    skip: true
  },
  'chapter-07/examples/cookies/read.js': {
    skip: true
  },
  'chapter-07/examples/cookies/set-cookie.js': {
    skip: true
  },
  'chapter-07/examples/cookies/set-multiple.js': {
    skip: true
  },
  'chapter-07/examples/framework/assets.js': {
    skip: true
  },
  'chapter-07/examples/framework/assets-file.js': {
    skip: true
  },
  'chapter-07/examples/framework/database.js': {
    skip: true
  },
  'chapter-07/examples/framework/middleware.js': {
    skip: true
  },
  'chapter-07/examples/framework/middleware-multi.js': {
    skip: true
  },
  'chapter-07/examples/framework/middleware-function.js': {
    skip: true
  },
  'chapter-07/examples/framework/minify.js': {
    skip: true
  },
  'chapter-07/examples/framework/session.js': {
    skip: true
  },
  'chapter-07/examples/framework/session-database.js': {
    skip: true
  },
  'chapter-07/examples/framework/setup.js': {
    skip: true
  },
  'chapter-07/examples/framework/templating-manual.js': {
    skip: true
  },
  'chapter-07/examples/framework/templating.js': {
    skip: true
  },
  'chapter-07/examples/micro.js': {
    skip: true
  },
  'chapter-07/examples/modularity/01/server.js': {
    skip: true
  },
  'chapter-07/examples/modularity/02/server.js': {
    skip: true
  },
  'chapter-07/examples/path/404.js': {
    skip: true
  },
  'chapter-07/examples/path/request-url.js': {
    skip: true
  },
  'chapter-07/examples/path/method.js': {
    skip: true
  },
  'chapter-07/examples/path/routes.js': {
    skip: true
  },
  'chapter-07/examples/path/route-params.js': {
    skip: true
  },
  'chapter-07/examples/path-traversal.js': {
    stderr: ' doit commencer par '
  },
  'chapter-07/examples/post/send.js': {
    stderr: 'ECONNREFUSED',
    errorCode: 1
  },
  'chapter-07/examples/post/server.js': {
    skip: true
  },
  'chapter-07/examples/post/server-parse.js': {
    skip: true
  },
  'chapter-07/examples/server/start.js': {
    skip: true
  },
  'chapter-07/examples/server/port.js': {
    skip: true
  },
  'chapter-07/examples/templating/server.js': {
    skip: true
  },
  'chapter-07/examples/testing/server.js': {
    skip: true
  },
  'chapter-07/examples/testing/tests/with-mocha.js': {
    command: 'mocha'
  },
  'chapter-07/examples/testing/tests/with-sinon.js': {
    stderr: 'SQLITE_ERROR: no such table: books',
    exitCode: 1
  },
  'chapter-07/examples/upload/server.js': {
    skip: true
  },
  'chapter-07/examples/upload/server-parse.js': {
    skip: true
  },
  'chapter-07/examples/static/routes.js': {
    skip: true
  },
  'chapter-07/examples/static/send.js': {
    skip: true
  },
  'chapter-07/examples/static/stream.js': {
    skip: true
  },
  'chapter-07/examples/cookies/write.js': {
    skip: true
  },
  'chapter-08/examples/prompt/intro.js': {
    skip: true
  },
  'chapter-08/examples/prompt/list.js': {
    skip: true
  },
  'chapter-08/examples/prompt/question.js': {
    skip: true
  },
  'chapter-08/examples/prompt/questions.js': {
    skip: true
  },
  'chapter-08/examples/prompt/validate.js': {
    skip: true
  },
  'chapter-08/examples/options/timezone.js': {
    args: 'Europe/Paris',
    stdout: /\d{2}:\d{2}/
  },
  'chapter-08/examples/progress/spinner.js': {
    stderr: /- Un-deux-trois…\n✔ Un-deux-trois… Soleil !/
  },
  'chapter-08/examples/progress/spinner-custom.js': {
    stderr: /- Un-deux-trois…\n☀️ Soleil !/
  },
  'chapter-08/examples/streaming/input-fallback.js': {
    stdin: 'cou cou',
    stdout: /COU COU/
  },
  'chapter-08/examples/streaming/intro-fallback.js': {
    stdin: 'cou cou',
    stdout: /COU COU/
  },
  'chapter-08/examples/streaming/intro.js': {
    stdin: 'cou cou',
    stdout: /COU COU/
  },
  'chapter-08/examples/streaming/pipe-in.js': {
    stdin: 'cou cou',
    stdout: /COU COU/
  },
  'chapter-08/examples/streaming/pipe-out.js': {
    stdin: 'cou cou',
    stdout: /COU COU/
  },
  'chapter-08/examples/testing/01/cli.js': {
    exitCode: 1,
    stderr: /Merci d'indiquer un fuseau horaire/
  },
  'chapter-08/examples/testing/02/cli.js': {
    exitCode: 1,
    stderr: /Merci d'indiquer un fuseau horaire/
  },
  'chapter-08/examples/testing/02/cli.test.js': {
    stderr: /(Merci d'indiquer un fuseau horaire|is not recognized as an internal or external command)/,
  },
};
