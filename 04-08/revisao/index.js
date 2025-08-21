"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = require("./Pessoa");
var nome = "Leo";
var idade = 30;
var estudante = false;
var listaDeCompras = ["Batata", "Pão", "Feijão", "Carne"];
var notas = [10, 8, 9.5];
var professor = {
    nome: "Leonardo",
    idade: 30,
    disciplinas: ["UC1", "UC2", "UC3"]
};
function mensagem() {
    console.log("Ola Pessoal");
}
function frase(nome) {
    return "Ola ".concat(nome, ", como vai voc\u00EA?");
}
function fraseOpcional(nome) {
    console.log("Ola " + (nome || "Mundo!"));
}
fraseOpcional();
fraseOpcional("Leonardo");
function calculaValor(valor, desconto) {
    if (desconto === void 0) { desconto = 5; }
    console.log(valor - desconto);
}
calculaValor(100);
calculaValor(100, 50);
var fulano = new Pessoa_1.Pessoa("Leo Senac de Souza", 30);
console.log(fulano.getName());
