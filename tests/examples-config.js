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
  'chapter-04/examples/process-stdin-uppercase.js': {
    stdin: 'un deux trois',
    stdout: 'UN DEUX TROIS'
  },
  'chapter-04/examples/process-exit-devinette.js': {
    stdin: '3',
    stdout: /Tu as trouvé, bravo !/
  },
  'chapter-04/examples/process-exit-error.js': {
    exitCode: 1,
    stderr: 'ReferenceError: jenexistepas is not defined'
  },
  'chapter-04/examples/process-interrupt.js': {
    skip: true,
  },
  'chapter-04/examples/process-stdout-long.js': {
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
