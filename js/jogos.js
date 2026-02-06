const jogos = {
  "PlayStation 3": [
    {
      nome: "Jogo PS3 Exemplo",
      descricao: "Descrição do jogo PS3.",
      imagem: "img/WhatsApp Image 2026-02-06 at 11.32.47.jpeg",
      link: "#"
    }
  ],

  "PlayStation 2": [
    {
      nome: "Jogo PS2 Exemplo",
      descricao: "Descrição do jogo PS2.",
      imagem: "img/WhatsApp Image 2026-02-06 at 11.32.47.jpeg",
      link: "#"
    }
  ],

  "PlayStation 1": [
    {
      nome: "Jogo PS1 Exemplo",
      descricao: "Descrição do jogo PS1.",
      imagem: "img/WhatsApp Image 2026-02-06 at 11.32.47.jpeg",
      link: "#"
    }
  ],

  "Super Nintendo": [
    {
      nome: "Jogo SNES Exemplo",
      descricao: "Clássico do Super Nintendo.",
      imagem: "img/WhatsApp Image 2026-02-06 at 11.32.47.jpeg",
      link: "#"
    }
  ]
};

function carregarJogos() {
  const container = document.getElementById("conteudo");
  container.innerHTML = "";

  for (const categoria in jogos) {
    const titulo = document.createElement("h2");
    titulo.className = "categoria";
    titulo.innerText = categoria;

    const lista = document.createElement("div");
    lista.className = "jogos";

    jogos[categoria].forEach(jogo => {
      lista.innerHTML += `
        <div class="jogo">
          <img src="${jogo.imagem}">
          <h3>${jogo.nome}</h3>
          <p>${jogo.descricao}</p>
          <a href="${jogo.link}" class="btn" download>Download</a>
        </div>
      `;
    });

    container.appendChild(titulo);
    container.appendChild(lista);
  }
}
