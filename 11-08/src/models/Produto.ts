export class Produto{
    id:number;
    nome:string;
    tipo:string;
    qnt:number;



	constructor(id: number, nome: string, tipo: string, qnt: number) {
		this.id = id;
		this.nome = nome;
		this.tipo = tipo;
		this.qnt = qnt;
	}
}
export let produtos: Produto[] = []