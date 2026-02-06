function login() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  const erro = document.getElementById("erro");

  const usuarioCorreto = "admin";
  const senhaCorreta = "1234";

  if (usuario === usuarioCorreto && senha === senhaCorreta) {
    window.location.href = "dashboard.html";
  } else {
    erro.innerText = "Usuário ou senha incorretos ❌";
  }
}

function logout() {
  window.location.href = "index.html";
}
