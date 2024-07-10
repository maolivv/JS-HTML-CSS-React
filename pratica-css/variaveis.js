let x = 0;

function funcao(x){ //aqui eu passei as 3 variaveis como parâmetro

    if(x == 2){ //teste de valor
        console.log("hahaahha");

    }
    else if(x != 2){
        console.log("worororo");
        x = 2; //atribui um novo valor a x
        return x; // retornei o novo valor

    }
}

x = funcao(x); // atribui a x o novo valor retornado da função
console.log(x);

w = funcao();

console.log(typeof(w));
console.log(w);