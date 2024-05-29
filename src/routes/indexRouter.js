import { Router } from 'express';
import ArticleController from '../controllers/ArticleController.js';
import UserController from '../controllers/UserController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import AuthController from '../controllers/AuthController.js';
import validationUserMiddleware from '../middlewares/validationsUserMiddleware.js';

const router = Router();

router.get('/api/article/:articleId(\\d+)', ArticleController.getArticle);
router.get('/api/article', ArticleController.getArticles);
router.post('/api/article', ArticleController.createArticle);

router.get('/api/user/:userId(\\d+)', UserController.getUser);
router.get('/api/user', authMiddleware, UserController.getUsers);
router.post('/api/user', authMiddleware, UserController.updateUserData);

router.post('/auth/registration', validationUserMiddleware, AuthController.registration);
router.post('/auth/login', AuthController.login);

export default router;
