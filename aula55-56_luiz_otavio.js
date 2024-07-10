// Aula sobre for-in e for-of

// For-in: retorna o indice ou chave ( funciona com string, array ou objetos)
// For-of: retorna o valor em si (só funciona com string e array)

const nomes = ['Marcelo', 'Ariella', 'Maria', 'Patrick Jones'];

// o for-in itera uma lista usando o index, e itera um objeto usando as chaves
for ( let index in nomes) {
    console.log(nomes[index]);
}

// o for-of itera usando o valor da lista, mas não funciona com objetos porque objetos não são iteráveis e não possuem indices
for ( let value of nomes) {
    console.log(value);   
}
