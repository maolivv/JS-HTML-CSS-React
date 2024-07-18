const fs = require('node:fs/promises');

module.exports = (caminhoDoArquivo) => fs.readFile(caminhoDoArquivo, 'utf-8');