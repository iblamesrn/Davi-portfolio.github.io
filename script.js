let tabuleiro = ['', '', '', '', '', '', '', '', ''];
let jogadorAtual = 'X';
let jogoAtivo = true;

function jogar(index) {
  if (tabuleiro[index] === '' && jogoAtivo) {
    tabuleiro[index] = jogadorAtual;
    document.getElementsByClassName('celula')[index].textContent = jogadorAtual;
    verificarVencedor();
    jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
  }
}

function verificarVencedor() {
  const combinacoesVencedoras = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (let i = 0; i < combinacoesVencedoras.length; i++) {
    const [a, b, c] = combinacoesVencedoras[i];
    if (tabuleiro[a] && tabuleiro[a] === tabuleiro[b] && tabuleiro[a] === tabuleiro[c]) {
      jogoAtivo = false;
      document.getElementById('mensagem').textContent = `Jogador ${tabuleiro[a]} venceu!`;
      return;
    }
  }

  if (!tabuleiro.includes('')) {
    jogoAtivo = false;
    document.getElementById('mensagem').textContent = 'Empate!';
  }
}

function reiniciar() {
  tabuleiro = ['', '', '', '', '', '', '', '', ''];
  jogadorAtual = 'X';
  jogoAtivo = true;
  document.getElementById('mensagem').textContent = '';
  let celulas = document.getElementsByClassName('celula');
  for (let i = 0; i < celulas.length; i++) {
    celulas[i].textContent = '';
  }
}
