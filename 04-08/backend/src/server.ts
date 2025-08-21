import express, { Application, Request, Response } from 'express';

//App representa o objeto express, ou seja, a instância do nosso servidor backend. Depois de criado, podemos usar estes métodos

const app: Application = express();  // Tipando 'app' como 'Application'

//Define a porta 3000 para o servidor escutar
const PORT: number = 4000;  // Tipagem da porta como número

// Middleware para permitir que o Express interprete JSON
app.use(express.json());

// Rota GET para a raiz
app.get('/', (req: Request, res: Response): void => {
  res.send('🚀 Servidor TypeScript rodando!');
});

app.get('/meunome', (req: Request, res: Response): void => {
  res.send('Ola, meu nome é Heloisa');
});

// Iniciando o servidor
app.listen(PORT, (): void => {
  console.log(`🔥 Servidor rodando em http://localhost:${PORT}`);
});