import express, { Application, NextFunction, Request, Response } from 'express';
import router from './routes/personagemRoutes';

const app: Application = express();
const PORT: number = 3000;


app.use(express.json());
app.use((req: Request, res: Response, next: NextFunction) =>{
    if(req.method === "PUT" || req.method === "POST"){
        const {tipo} = req.body;
        if(tipo === "Nazgûl"){
            console.log("Frodo sente o Um Anel querendo retornar ao seu Mestre...")
        }else if(tipo === "Nazgul"){
            console.log("Frodo sente o Um Anel querendo retornar ao seu Mestre...")
        }
    }
    next();
})

app.listen(PORT, () => {
    console.log("Ta indo")
})


app.use(router)


app.use((req: Request, res: Response): Response => {
    return res.status(404).json({ erro: "A passagem de Caradhras está fechada por Saruman. Esta rota não existe para nós. Só nos sobrou...Moria." });
  });