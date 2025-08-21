import { Router } from "express";
import { ProdutoController } from "../controllers/ProdutoController";

const router = Router();
const controller = new ProdutoController();

router.get('/produtos',controller.listProdutos);
router.post('/produtos',controller.createProduto);
router.delete('/produtos/:id',controller.deleteProduto);
router.put('/produtos/:id',controller.updateProduto);

export default router;
