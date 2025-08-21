import { Pessoa } from "./Pessoa"

let nome:string = "Leo"
let idade:number = 30
let estudante:boolean = false

let listaDeCompras:string[] = ["Batata","Pão","Feijão","Carne"]
let notas:Array<number> = [10,8,9.5]

let professor:{nome:string, idade:number,disciplinas:string[]} = {
    nome:"Leonardo",
    idade:30,
    disciplinas:["UC1","UC2","UC3"]
}

function mensagem():void{
    console.log("Ola Pessoal")
}

function frase(nome:string):string{
    return `Ola ${nome}, como vai você?`
}

function fraseOpcional(nome?:string):void{
    console.log("Ola "+ (nome || "Mundo!"))
}

fraseOpcional()
fraseOpcional("Leonardo")

function calculaValor(valor:number,desconto:number = 5):void{
    console.log(valor - desconto)
}

calculaValor(100)
calculaValor(100,50)

const fulano:Pessoa = new Pessoa("Leo Senac de Souza",30);
console.log(fulano.getName())