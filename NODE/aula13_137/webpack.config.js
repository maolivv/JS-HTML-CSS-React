const path = require('path'); // configurando uma variavel caminho, que requer um módulo do Node chamado "path"

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'frontend', 'main.js'), // usando o módulo "path" do Node pra resolver a questão das barras no caminho do arquivo
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node_module/, // exclui o arquivo node_module da checagem do webpack
            test: /\.js$/, // diz a extensão dos arquivos que vão compor o bundle.js posteriormente
            use: { // configurando o webpack pra usar o babel automaticamente
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }, { // adicionado mais um objeto aqui, dessa vez pra configurar o loader do CSS
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    devtool: 'source-map' // o arquivo bundle.js na verdade vai ser a junção de vários arquivos, esse source-map ajuda a mapear algum possivel erro que ocorra e em qual dos arquivos que compões o bundle.js esse erro ocorreu
}; // configurando a exportação do webpack