import { Request, Response } from "express"
import { Produto, produtos } from "../models/Produto"

export class ProdutoController{

    createProduto(req: Request, res:Response):Response {
        const { id, nome, tipo, qnt } = req.body;

        if (!id || !nome || !tipo || !qnt) {
            return res.status(400).json({ mensagem: "TODAS as Informações são necessarias" });
        }

        const produto = new Produto(id,nome,tipo,qnt);
        produtos.push(produto)

        return res.status(201).json({ mensagem: "Produto Criado!", produto: produto });
    }

    listProdutos(req: Request, res:Response):Response {
        return res.status(200).json({prod: produtos})
    }

    updateProduto(req: Request, res:Response):Response {
        const id: number = Number(req.params.id);
        const { nome, tipo, qnt } = req.body;

        if(!nome || !tipo || !qnt){
            return res.status(400).json({mensagem: "Todas as informações são necessarias"})
        }
        let prod = produtos.find(produto => produto.id === id);
        if (!prod) return res.status(404).json({ mensagem: "Produto não encontrado!" })
        prod.nome = nome
        prod.qnt = qnt
        prod.tipo = tipo

        return res.status(200).json({ mensagem: "Update feita com sucesso"})
    }

    deleteProduto(req: Request, res:Response):Response{
        const id: number = Number(req.params.id);

        let index = produtos.findIndex(produto => produto.id === id);
        if (index === -1) return res.status(404).json({ mensagem: "Produto não encontrado!" })

        produtos.splice(index,1);
        return res.status(204).json({mensagem:"Deletado com sucesso"})

    }



}
