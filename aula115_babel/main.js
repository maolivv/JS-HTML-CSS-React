// comando para instalar o babel no projeto: npm install --save-dev @babel/cli @babel/preset-env @babel/core



// usando o babel para traduzir o JS mais recente para versões mais antigas
// utilizando o comando no terminal: npx babel main.js -o bundle.js --presets=@babel/env
// código traduzido para o JS mais antigo está no arquivo bundle.js
// criamos um caminho nas configurações do arquivo package.json onde automatizamos esse processo
// agora é só ir no terminal e digitar: npm run babel
// e depois apertar ctrl + C pra parar o terminal

const nome = 'Luiz';
const obj = { nome };
const novoObj = { ...obj };
console.log(novoObj);
