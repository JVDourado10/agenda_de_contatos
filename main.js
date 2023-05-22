const form = document.querySelector("form");
const contatoNome = [];
const contatoTelefone = [];

let linhasTabela = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  adicionaContato();
  atualizaTabela();
});

function adicionaContato() {
  const inputNome = document.getElementById("nome");
  const inputTelefone = document.getElementById("telefone");

  if (contatoNome.includes(inputNome.value)) {
    alert(`O contato de ${inputNome.value} já existe na sua agenda`);
  } else if (contatoTelefone.includes(inputTelefone.value)) {
    alert(
      `O número de telefone: ${inputTelefone.value} já existe na sua agenda`
    );
  } else {
    contatoNome.push(inputNome.value);
    contatoTelefone.push(inputTelefone.value);

    let linha = "";

    linha = "<tr>";
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += "</tr>";

    linhasTabela += linha;
  }

  inputNome.value = "";
  inputTelefone.value = "";
}

function atualizaTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhasTabela;
}
