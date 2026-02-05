function login() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  if (usuario === "" || senha === "") {
    alert("Preencha usuário e senha.");
    return;
  }

  // Login fake por enquanto
  alert("Login visual ativo!\nSistema real será ativado em breve.");
}
