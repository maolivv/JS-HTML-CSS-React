
// cria uma função já tornando ela visível pra modulos externos usando "export"
export function soma(x, y) {
    return x + y;
}

let nome = 'Irelia';
let origem = 'Ionia';

export { nome, origem }; // outra forma de exportar