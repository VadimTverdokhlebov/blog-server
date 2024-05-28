import { Router } from 'express';
import ArticleController from '../controllers/articleController.js';
import UserController from '../controllers/userController.js';

const router = Router();

router.get('/api/article/:articleId(\\d+)', ArticleController.getArticle);
router.get('/api/article', ArticleController.getArticles);
router.post('/api/article', ArticleController.createArticle);

router.get('/api/user/:userId(\\d+)', UserController.getUser);
router.get('/api/user', UserController.getUsers);
router.post('/api/user', UserController.createUser);

export default router;
