let numero = Number(prompt('digite um numero: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p>A raiz quadrada é:  ${numero **0.5}</p>`;
texto.innerHTML += `<p>é NaN:  ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`
texto.innerHTML += `<p>arredonda para baixo ${Math.floor(numero)}</p>`
texto.innerHTML += `<p>arredonda para cima ${Math.ceil(numero)}</p>`
texto.innerHTML += `<p>Com suas casas decimais ${numero.toFixed(2)}</p>`











