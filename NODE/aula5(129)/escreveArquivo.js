const fs = require('fs').promises; // importando os métodos de promises do módulo FileSystem do Node
const path = require('path'); // importando o módulo Path do Node

//****************************************************************************************** ESSA PARTE NÃO VAI SER EXPORTADA


// *****************************************************************************************



exports.escreveArquivoJSON = function escreveArquivoJSON(obj, caminhoArquivoJSON) {

        //                                      esse 2 é parâmetro de identação
    const json = JSON.stringify(obj, '', 2); // o método stringify() transforma o código em javascript em um arquivo JSON

    //                                      flag 'a' não apaga o que já havia no arquivo, se ele ja existir, só acrescenta
    fs.writeFile(caminhoArquivoJSON, json, { flag: 'w' });

}

exports.escreveArquivoTXT = function escreveArquivoTXT(texto, caminhoArquivoTXT) {
        //            path           conteúdo    flag 'w' que apaga todo conteúdo do arquivo, se ele já existir e coloca o novo
    fs.writeFile(caminhoArquivoTXT, texto, { flag: 'w', encoding: 'utf-8' });
}
