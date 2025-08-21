export class personagem{
    private id: number = 0;
    private nome: string;
    private tipo: string;
    private raca: string;
    private arma: string;
    private status: string;


	constructor(nome: string, tipo: string, raca: string, arma: string, status: string) {
		this.nome = nome;
		this.tipo = tipo;
		this.raca = raca;
		this.arma = arma;
		this.status = status;
	}

	public getId(): number {
		return this.id;
	}

	public getNome(): string {
		return this.nome;
	}

	public getTipo(): string {
		return this.tipo;
	}

	public getRaca(): string {
		return this.raca;
	}

	public getArma(): string {
		return this.arma;
	}

	public getStatus(): string {
		return this.status;
	}

	public setId(value: number) {
		this.id = value;
	}

	public setNome(value: string) {
		this.nome = value;
	}

	public setTipo(value: string) {
		this.tipo = value;
	}

	public setRaca(value: string) {
		this.raca = value;
	}

	public setArma(value: string) {
		this.arma = value;
	}

	public setStatus(value: string) {
		this.status = value;
	}
    
}