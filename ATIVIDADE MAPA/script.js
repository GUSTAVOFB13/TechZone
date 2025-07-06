document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("artigos-container");

  if (container) {
    fetch("https://sheetdb.io/api/v1/32mnuz5e8hbv2") // 👈 Substitua com o link da sua API
      .then(response => response.json())
      .then(artigos => {
        artigos.forEach(artigo => {
          const div = document.createElement("div");
          div.classList.add("card");
          div.innerHTML = `
            <h3>${artigo.titulo}</h3>
            <p>${artigo.descricao}</p>
            <a href="${artigo.link}">Ler mais</a>
          `;
          container.appendChild(div);
        });
      })
      .catch(error => {
        container.innerHTML = "<p>Erro ao carregar os artigos.</p>";
        console.error(error);
      });
  }

  // Validação do formulário de contato
  document.querySelector("form")?.addEventListener("submit", function(e) {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !mensagem) {
      alert("Por favor, preencha todos os campos.");
      e.preventDefault();
    } else if (!email.includes("@")) {
      alert("Digite um e-mail válido.");
      e.preventDefault();
    }
  });
});
