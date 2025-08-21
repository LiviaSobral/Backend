import { Request, Response } from 'express';
import { connection } from '../config/database';

export class personagemController{

    async listAll(req: Request, res: Response): Promise<Response> {
        try{
            const [rows]:any  = await connection.query('Select * From personagens')
            for(let i = 0; i < rows.length; i++){
                const { tipo } = rows[i];
                if(tipo === "Nazgûl"){
                 console.log("Os Nazgûl não estão em Moria.")
                }else if(tipo === "Nazgul"){
                 console.log("Os Nazgul não estão em Moria.")
                 }else if(tipo === "Sociedade"){
                   console.log("Corram seus tolos!")
                }else if(tipo === "Balrog"){
                  console.log("Você não vai passar!")
                }
            }
            return res.status(200).json(rows);
        }catch(error){
            console.log('erro ao listar Personagens', error);
            return res.status(500).json({erro:"Erro interno no Servidor"})
        }
    }

    async getId(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        try{
        parseInt(id);
        const [rows]: any = await connection.query('SELECT * FROM personagens WHERE id = ?', [id]);
        if (rows.length === 0) {
         return res.status(404).json({ mensagem: 'Personagem não encontrado.' });
        }
         const { tipo } = rows[0];
         if(tipo === "Nazgûl"){
            console.log("Os Nazgûl não estão em Moria.")
        }else if(tipo === "Nazgul"){
            console.log("Os Nazgul não estão em Moria.")
        }else if(tipo === "Sociedade"){
            console.log("Corram seus tolos!")
        }else if(tipo === "Balrog"){
            console.log("Você não vai passar!")
        }
        return res.status(200).json(rows[0]);
        }catch(error){
            console.log('erro ao procurar Personagem', error);
            return res.status(500).json({erro:"Erro interno no Servidor"})
        }
    }
    async add(req: Request, res: Response): Promise<Response> {
        const { nome, tipo, raca, arma, status } = req.body;
        try{
        await connection.query('INSERT INTO personagens (nome, tipo, raca, arma, status) VALUES (?,?,?,?,?)', [nome, tipo, raca, arma, status])
        return res.status(201).json({ mensagem: 'Personagem criado com sucesso!'});
        }catch(error){
            console.log('erro ao adicionar Personagem', error);
            return res.status(500).json({erro:"Erro interno no Servidor"})
        }
    }

    async update(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { nome, tipo, raca, arma, status } = req.body;
        try{
        parseInt(id);
        await connection.query('UPDATE personagens SET nome = ?, tipo = ?, raca = ?, arma = ?, status = ? WHERE id = ?', [nome, tipo, raca, arma, status, id])
        return res.status(200).json({ mensagem: 'Personagem atualizado!'});
        }catch(error){
            console.log('erro ao Atualizar Personagem', error);
            return res.status(500).json({erro:"Erro interno no Servidor"})
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        try{
            parseInt(id);
            const [rows]: any = await connection.query('SELECT * FROM personagens WHERE id = ?', [id]);
            if (rows.length === 0) {
                return res.status(404).json({ mensagem: 'Personagem não encontrado.' });
            }
            const { tipo } = rows[0];
            if(tipo === "Nazgûl"){
            console.log("Frodo sente o Um Anel querendo retornar ao seu Mestre...")
            }else if(tipo === "Nazgul"){
            console.log("Frodo sente o Um Anel querendo retornar ao seu Mestre...")
            }
            await connection.query('DELETE FROM personagens WHERE id = ?', [id]);
            return res.status(204).send();
        }catch(error){
            console.log('erro ao Deletar Personagem', error);
            return res.status(500).json({erro:"Erro interno no Servidor"})
        }
    }

}

