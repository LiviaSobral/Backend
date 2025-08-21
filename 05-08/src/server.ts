import express, { Application, NextFunction, Request, Response } from "express";

const app: Application = express();
const PORT: number = 3000;
const porteiroMiddleware = (req: Request, res: Response, next: NextFunction) => {
  
    // Exibe no console o caminho da URL acessada na requisição
    console.log(`📢 Requisição recebida em: ${req.url}`);
  
    // Chama a função "next" para permitir que a requisição continue para o próximo middleware ou rota
    next();
  };

  app.use(porteiroMiddleware);
app.use(express.json());

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
})

app.get('/saudacao',(req:Request, res:Response):Response => {
    return res.send("Olá, jovem programador")
})

// Middleware que trata requisições que não bateram em nenhuma rota definida
app.use((req: Request, res: Response): Response => {
  
    // Retorna uma resposta com status HTTP 404 (Não Encontrado)
    // E envia um JSON com a mensagem personalizada
    return res.status(404).json({ mensagem: 'Rota não encontrada!' });
  });