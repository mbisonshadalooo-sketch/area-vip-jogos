function mostrarCategoria(id) {
  // esconder todas
  document.querySelectorAll('.categoria').forEach(cat => {
    cat.classList.remove('ativa');
  });

  // remover ativo dos botões
  document.querySelectorAll('.cabecalho-categorias button').forEach(btn => {
    btn.classList.remove('ativo');
  });

  // mostrar categoria clicada
  document.getElementById(id).classList.add('ativa');

  // ativar botão
  event.target.classList.add('ativo');

  // limpar busca
  document.getElementById('busca').value = '';
  filtrarJogos();
}

function filtrarJogos() {
  const termo = document.getElementById('busca').value.toLowerCase();

  document.querySelectorAll('.categoria.ativa .jogo').forEach(jogo => {
    const nome = jogo.dataset.nome;
    jogo.style.display = nome.includes(termo) ? 'block' : 'none';
  });
}

/* SIMULAÇÃO DE PROTEÇÃO */
function protegerPagina() {
  // aqui depois entra validação real
}

function logout() {
  alert("Logout realizado");
  // depois você pode redirecionar
}
