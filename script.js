// ===============================
// USUÁRIOS (SALVOS NO NAVEGADOR)
// ===============================
let usuarios = JSON.parse(localStorage.getItem("usuarios"));

if (!usuarios) {
  usuarios = [
    {
      usuario: "admin",
      senha: "admin123",
      vence: "2099-12-31",
      tipo: "admin"
    }
  ];
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

// ===============================
// LOGIN
// ===============================
const botao = document.getElementById("btnLogin");

botao.addEventListener("click", function () {
  const user = document.getElementById("usuario").value;
  const pass = document.getElementById("senha").value;

  const encontrado = usuarios.find(
    u => u.usuario === user && u.senha === pass
  );

  if (!encontrado) {
    alert("Usuário ou senha incorretos");
    return;
  }

  const hoje = new Date();
  const vencimento = new Date(encontrado.vence);

  if (hoje > vencimento) {
    alert("Acesso vencido. Entre em contato para renovar.");
    return;
  }

  localStorage.setItem("usuarioLogado", encontrado.usuario);
  localStorage.setItem("tipo", encontrado.tipo);

  if (encontrado.tipo === "admin") {
    window.location.href = "admin.html";
  } else {
    window.location.href = "jogos.html";
  }
});
