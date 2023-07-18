function capitalize(str) {
    let output = str[0].toUpperCase() + str.slice(1, str.length + 1);
    return output;
}

module.exports = capitalize;