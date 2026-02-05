function login() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  if (usuario === "admin" && senha === "1234") {
    window.location.href = "jogos.html";
  } else {
    alert("Usuário ou senha inválidos");
  }
}
