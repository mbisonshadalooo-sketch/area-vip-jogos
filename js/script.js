// ===== USUÁRIOS FIXOS =====
const usuarios = [
  {
    usuario: "admin",
    senha: "1234",
    venceEm: "2026-03-06" // AAAA-MM-DD
  },
  {
    usuario: "teste",
    senha: "123",
    venceEm: "2026-02-20"
  }
];

// ===== LOGIN =====
function login() {
  const usuarioInput = document.getElementById("usuario").value;
  const senhaInput = document.getElementById("senha").value;

  const usuarioEncontrado = usuarios.find(u =>
    u.usuario === usuarioInput && u.senha === senhaInput
  );

  if (!usuarioEncontrado) {
    alert("Usuário ou senha incorretos.");
    return;
  }

  const hoje = new Date();
  const vencimento = new Date(usuarioEncontrado.venceEm);

  if (hoje > vencimento) {
    alert("Seu acesso expirou. Entre em contato para renovar.");
    return;
  }

  // salva sessão
  localStorage.setItem("logado", "true");
  localStorage.setItem("usuario", usuarioEncontrado.usuario);

  // redireciona
  window.location.href = "dashboard.html";
}

// ===== PROTEÇÃO DO DASHBOARD =====
function protegerPagina() {
  const logado = localStorage.getItem("logado");

  if (logado !== "true") {
    window.location.href = "index.html";
  }
}

// ===== LOGOUT =====
function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}
