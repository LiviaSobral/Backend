import { Request, Response } from 'express';
import { AppDataSource } from '../config/data-source';
import { Category } from '../models/Category';
import { Product } from '../models/Product';

export class ProductController{
    private productRepository = AppDataSource.getRepository(Product);
    private categoryRepository = AppDataSource.getRepository(Category);

    async create(req:Request, res:Response){
        const {name,price,category} = req.body;
        try{
            const cat = await this.categoryRepository.findOneBy({id:category})
        if(!cat){
            return res.status(404).json({message: "Category not found"})
        }
        const product = this.productRepository.create({name,price,category})
        await this.productRepository.save(product);
        return res.status(201).json(product);
        }catch(error){
            return res.status(500).json({message: "Error"})
        }
        
    }

    async list(req:Request,res:Response){
        try{
            const products = await this.productRepository.find({relations:['category']})
            return res.json(products);
        }catch(error){
            return res.status(500).json({message: "Error"})
        }
        
    }

}