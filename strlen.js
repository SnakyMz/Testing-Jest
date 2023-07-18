const { error } = require("console");

function stringLength(str) {
    if (str.length > 1 && str.length <= 10) {
        return str.length;
    }
    return 'Word should be atmost 10 letters';
}

module.exports = stringLength;