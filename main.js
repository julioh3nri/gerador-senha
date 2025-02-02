const senhaCaixa = document.getElementById("senha");
const length = 12;

const caixaAlta = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const caixaBaixa = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const simbolos = "@#$!%¨&*()_+={}?:^`";

const todosCaracteres = caixaAlta + caixaBaixa + numeros + simbolos;

function criarSenha() {
    let senha = "";

    senha += caixaAlta[Math.floor(Math.random() * caixaAlta.length)];
    senha += caixaBaixa[Math.floor(Math.random() * caixaBaixa.length)];
    senha += numeros[Math.floor(Math.random() * numeros.length)];
    senha += simbolos[Math.floor(Math.random() * simbolos.length)];

    while (senha.length < length) {
        senha += todosCaracteres[Math.floor(Math.random() * todosCaracteres.length)];
    }

    senhaCaixa.value = senha;
}

function copiarSenha() {
    const senhaCaixa = document.getElementById("senha");

    if (senhaCaixa.value) {
        navigator.clipboard.writeText(senhaCaixa.value);
    }
}

