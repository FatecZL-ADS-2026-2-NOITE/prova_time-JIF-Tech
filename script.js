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
