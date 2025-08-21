import { Router } from "express";
import { personagemController } from "../controllers/personagemController";

const router = Router();
const controller = new personagemController();

router.get('/personagens', controller.listAll);
router.get('/personagens/:id',controller.getId);
router.post('/personagens', controller.add);
router.put('/personagens/:id', controller.update);
router.delete('/personagens/:id', controller.delete)

export default router;