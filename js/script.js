function login() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  if (usuario === "admin" && senha === "1234") {
    window.location.href = "dashboard.html";
  } else {
    alert("Usuário ou senha incorretos ❌");
  }
}

function logout() {
  window.location.href = "index.html";
}

/* ===== FILTRO POR CATEGORIA ===== */
function mostrarCategoria(categoria) {
  const jogos = document.querySelectorAll(".jogo");

  jogos.forEach(jogo => {
    jogo.style.display =
      jogo.dataset.categoria === categoria ? "block" : "none";
  });
}

/* ===== BUSCA POR NOME ===== */
function filtrarJogos() {
  const busca = document.querySelector(".busca").value.toLowerCase();
  const jogos = document.querySelectorAll(".jogo");

  jogos.forEach(jogo => {
    const nome = jogo.querySelector("h3").innerText.toLowerCase();
    jogo.style.display = nome.includes(busca) ? "block" : "none";
  });
}
