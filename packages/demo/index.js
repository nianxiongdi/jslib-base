const path = require('path');
const util = require('@js-lib/util');

function init(cmdPath, name, option) {
    console.log('@js-lib/demo: init');
    const lang = option.lang;
    util.copyFile(path.resolve(__dirname, `./template/demo-amd.html`), path.resolve(cmdPath, name, 'demo/demo-amd.html'));
    util.copyFile(path.resolve(__dirname, `./template/demo-global.html`), path.resolve(cmdPath, name, 'demo/demo-global.html'));
    util.copyFile(path.resolve(__dirname, `./template/demo-node.js`), path.resolve(cmdPath, name, 'demo/demo-node.js'));
    util.copyFile(path.resolve(__dirname, `./template/require.js`), path.resolve(cmdPath, name, 'demo/js/require.js'));
}

function update() {
    console.log('@js-lib/demo: update');
}

module.exports = {
    init: init,
    update: update,
}