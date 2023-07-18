function stringReverse(str) {
    let revstr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        revstr += str[i];
    }
    return revstr;
}

module.exports = stringReverse;