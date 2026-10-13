const campoBusca = document.querySelector("#campo-busca");
const filtroCategoria = document.querySelector("#filtro-categoria");
const botaoGratuitos = document.querySelector("#btn-gratuitos");
const contador = document.querySelector("#contador");
const lista = document.querySelector("#lista-pontos");
const mensagemVazia = document.querySelector("#mensagem-vazio");
const detalhe = document.querySelector("#detalhe");

function somenteGratuitosLigado() {
  return botaoGratuitos.classList.contains("ativo");
}

function filtrarPontos() {
  const texto = campoBusca.value.toLowerCase().trim();
  const categoria = filtroCategoria.value;
  const soGratuitos = somenteGratuitosLigado();

  return PONTOS.filter(function (ponto) {
    const passaNaBusca = ponto.nome.toLowerCase().includes(texto);
    const passaNaCategoria =
      categoria === "Todas" || categoria === "" || ponto.categoria === categoria;
    const passaNoGratuito = !soGratuitos || ponto.gratuito;

    return passaNaBusca && passaNaCategoria && passaNoGratuito;
  });
}
function criarCartao(ponto) {
  const cartao = document.createElement("article");
  cartao.className = "cartao";
  cartao.innerHTML =
    "<h2>" + ponto.nome + "</h2>" +
    "<p>" + ponto.categoria + " · " + ponto.bairro + "</p>" +
    "<p>Nota: " + ponto.nota.toFixed(1) + "</p>" +
    "<p>" + (ponto.gratuito ? "Gratuito" : "Pago") + "</p>";

  cartao.addEventListener("click", function () {
    mostrarDetalhe(ponto);
  });

  return cartao;
}

function mostrarDetalhe(ponto) {
  detalhe.innerHTML =
    "<h2>" + ponto.nome + "</h2>" +
    "<p><strong>Categoria:</strong> " + ponto.categoria + "</p>" +
    "<p><strong>Bairro:</strong> " + ponto.bairro + "</p>" +
    "<p><strong>Entrada:</strong> " + (ponto.gratuito ? "Gratuita" : "Paga") + "</p>" +
    "<p><strong>Nota:</strong> " + ponto.nota.toFixed(1) + "</p>" +
    "<p><strong>Horário:</strong> " + ponto.horario + "</p>" +
    "<p>" + ponto.descricao + "</p>" +
    "<button id=\"btn-voltar\" type=\"button\">Voltar para a lista</button>";

  document.querySelector("#btn-voltar").addEventListener("click", fecharDetalhe);

  detalhe.hidden = false;
  lista.hidden = true;
  contador.hidden = true;
  mensagemVazia.hidden = true;
}

function fecharDetalhe() {
  detalhe.hidden = true;
  lista.hidden = false;
  contador.hidden = false;
}

function atualizarTela() {
  fecharDetalhe();

  const pontos = filtrarPontos();

  lista.innerHTML = "";
  pontos.forEach(function (ponto) {
    lista.appendChild(criarCartao(ponto));
  });

  contador.textContent =
    pontos.length + (pontos.length === 1 ? " ponto encontrado" : " pontos encontrados");

  mensagemVazia.hidden = pontos.length !== 0;
}
campoBusca.addEventListener("input", atualizarTela);
filtroCategoria.addEventListener("change", atualizarTela);
botaoGratuitos.addEventListener("click", function () {
  botaoGratuitos.classList.toggle("ativo");
  botaoGratuitos.setAttribute("aria-pressed", somenteGratuitosLigado());
  atualizarTela();
});
atualizarTela();
