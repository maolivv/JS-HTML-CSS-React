import { soma, nome, origem } from './calculos.js'; // importa o módulo
// mas só funciona no Live Server porque precisa de um servidor pro módulo ser reconhcido pelo Node
// e precisa colocar type = "module" no scr do script no HTML também, senão não funciona

console.log(soma(2, 3)); // não vai funcionar no terminal do vscode
console.log(nome); // precisa do Live Server
console.log(origem); // não vai funcionar