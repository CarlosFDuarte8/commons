const en = require(`../languages/en.json`);
const pt = require(`../languages/pt.json`);
const es = require(`../languages/es.json`);

const langs = {
    en,
    pt,
    es
}

module.exports = function (lang) {
    return langs[lang];
}