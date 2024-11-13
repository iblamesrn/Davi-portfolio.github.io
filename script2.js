let resultado = document.getElementById('resultado');
let operacao = '';

function adicionarValor(valor) {
  operacao += valor;
  resultado.value = operacao;
}

function calcular() {
  try {
    operacao = eval(operacao).toString();
    resultado.value = operacao;
  } catch {
    resultado.value = 'Erro';
  }
}

function limpar() {
  operacao = '';
  resultado.value = '';
}
