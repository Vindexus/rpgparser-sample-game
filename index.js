var path = require('path');
var appDir = path.dirname(require.main.filename);

var rpgparser = require('rpgparser')({
  gameDataDir: appDir + '/game_data',
  pagesDir: appDir + '/pages',
  outputInDesignDir: appDir + '/parsed/indesign',
  outputWebDir: appDir + '/parsed/web', 
  simples: ['tags', 'items'],
  folders: ['classes', 'moves']
});

module.exports = {};
