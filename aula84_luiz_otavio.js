// Filter, map, reduce

// array de numeros que eu vou usar pra aplicar os métodos filter/map/reduce
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];

// usando filter pra filtrar os valores com base na restrição que eu vou impor
const numerosFiltrados = numeros.filter((valor) => { return valor > 10; }); // o método filter recebe uma arrow function que recebe o valor
                                                                            // como parâmetro e retorna True ou False para a condição
                                                                            // se for True o valor será incluido na listra filtrada

console.log('filter: ' + numerosFiltrados); // mostrando os numeros filtrados

// usando map pra modificar os valores do array original e atribuir os valores modificados pra variável target
const numerosEmDobro = numeros.map(valor => valor * 2); // arrow function reduzida porque recebe só um parâmetro e só retorna o resultado

console.log('map: ' + numerosEmDobro); // mostrando o novo array

// o reduce funciona um pouco diferente, o primeiro parâmetro que ele envia pra dentro da função interna não é o 'valor' mas sim um acumulador
const total = numeros.reduce((acumulador, valor) => { acumulador += valor; return acumulador; }, 0); // o '0' ali é o valor inicial
                                                                                                    // que eu to setando pr acumulador
                                                                                                    // se eu não setar nenhum valor,
                                                                                                    // o valor padrão vai ser o primeiro indice do array

console.log(total);