let operacao = '';

function inserirValor(val) {
  operacao += val;
  update();
}
function update() {
  const visor = document.getElementById('visor');
  visor.innerHTML = operacao;
}
function obterResultado() {
  const resultado = eval(operacao);
  operacao = `${resultado}`;
  update();
}

function limpar() {
  operacao = '';
  update();
}
