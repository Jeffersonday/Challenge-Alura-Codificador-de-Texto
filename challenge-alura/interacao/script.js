const textInput = document.querySelector("#input-texto");
const outInput = document.querySelector("#output");

function criptografar() {
  let texto = textInput.value;
  let resultCripto = texto
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

  outInput.innerHTML = '<textarea readonly id="output-texto">' + resultCripto +
    '</textarea>' + '<button class="btn-copiar" onclick="copiar()">Copiar</button>';
}

function descriptografar() {
  let texto = textInput.value;
  let resultDescripto = texto
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

  outInput.innerHTML = '<textarea readonly id="output-texto">' + resultDescripto +
    '</textarea>' + '<button class="btn-copiar" onclick="copiar()">Copiar</button>';
}

function copiar() {
  let textoCop = document.querySelector("#output-texto");
  textoCop.select();
  document.execCommand("copy");
  alert("Texto copiado.");
}
