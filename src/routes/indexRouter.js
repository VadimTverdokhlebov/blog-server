import { Router } from 'express';
import ArticleController from '../controllers/articleController.js';

const router = Router();

router.get('/api/article', ArticleController.getArticle);
router.post('/api/article', ArticleController.createArticle);

export default router;
