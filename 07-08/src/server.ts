import express, { Application, NextFunction, Request, Response } from "express";

const app: Application = express();
const PORT: number = 3000;

app.use(express.json());
app.use((req: Request, res: Response, next: NextFunction) =>{
    const data: Date = new Date();
    //salva data atual com um objeto Date
    console.log(data);
    //console log na data
    if(data.getHours() <= 6){
        //pega hora e verifica se é 6 ou menor
        console.log("VAI DORMIR")
        console.log(data.getHours())
    }else{
        next();
        //next pra sair
    }
})

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
})


app.post('/comentarios',(req:Request,res:Response) =>{
    const {texto} = req.body
    if(texto.trim() !== ""){
        //verifica se o texto n esta vazio existe
        return res.status(201).send("Adicionado o comentario")
    }
    return res.status(400).send("N foi")
})

app.delete('/comentarios/:id',(req:Request,res:Response) =>{
    const {id} = req.body
    if(id.trim() !== ""){
        //verifica se o texto esta vazio
        return res.status(204).send("Foi")   
    }
    return res.status(400).send("N Foi")
})

app.get('/sobre',(req:Request,res:Response) =>{
    return res.send({"Nome":"Ronaldo","Idade":"123123","Descricao":"SER UMANO"})
    //retorna um JSON direto
})

// Middleware que trata requisições que não bateram em nenhuma rota definida
app.use((req: Request, res: Response): Response => {
  
    // Retorna uma resposta com status HTTP 404 (Não Encontrado)
    // E envia um JSON com a mensagem personalizada
    return res.status(404).json({ mensagem: 'Rota não encontrada!' });
  });