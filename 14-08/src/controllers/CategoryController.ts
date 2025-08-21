import { Request, Response } from 'express';
import { AppDataSource } from '../config/data-source';
import { Category } from '../models/Category';

export class CategoryController{

    private categoryRepository = AppDataSource.getRepository(Category);

    async create(req:Request,res:Response){
        const { name } = req.body
        const category = this.categoryRepository.create({ name });
        try{
        await this.categoryRepository.save(category);
        return res.status(201).json(category);
        }catch(error){
            return res.status(500).json({message: "Error"}) 
        }
    }

}

