const paragrafos = document.querySelector('.paragrafos'); // seleciona da página o elemento com a classe .paragrafos
const p_list = paragrafos.querySelectorAll('p'); // seleciona todos os elementos com a tag entre parenteses, e retorna um array

for (let p of p_list) {
    p.innerHTML = 'paragrafo modificado';
    p.style.backgroundColor = 'green';
    p.style.color = '#fff'
}

p_list[0].addEventListener('click', function () { p_list[0].style.backgroundColor = 'red'; });