function login() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  // USUÁRIO E SENHA (você pode mudar depois)
  const usuarioCorreto = "admin";
  const senhaCorreta = "1234";

  if (usuario === usuarioCorreto && senha === senhaCorreta) {
    window.location.href = "jogos.html";
  } else {
    alert("Usuário ou senha incorretos!");
  }
}
