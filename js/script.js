function login() {
  const usuario = document.getElementById("username").value;
  const senha = document.getElementById("password").value;
  const erro = document.getElementById("error");

  // Login fixo (simples)
  const usuarioCorreto = "admin";
  const senhaCorreta = "1234";

  if (usuario === usuarioCorreto && senha === senhaCorreta) {
    window.location.href = "dashboard.html";
  } else {
    erro.innerText = "Usuário ou senha incorretos ❌";
  }
}
