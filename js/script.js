function login() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  const erro = document.getElementById("erro");

  if (usuario === "admin" && senha === "1234") {
    localStorage.setItem("logado", "sim");
    window.location.href = "dashboard.html";
  } else {
    erro.innerText = "Usuário ou senha incorretos ❌";
  }
}

function protegerPagina() {
  if (localStorage.getItem("logado") !== "sim") {
    window.location.href = "index.html";
  }
}

function logout() {
  localStorage.removeItem("logado");
  window.location.href = "index.html";
}

function filtrarJogos(texto) {
  const jogos = document.querySelectorAll(".jogo");
  texto = texto.toLowerCase();

  jogos.forEach(jogo => {
    const nome = jogo.querySelector("h3").innerText.toLowerCase();
    jogo.style.display = nome.includes(texto) ? "block" : "none";
  });
}
