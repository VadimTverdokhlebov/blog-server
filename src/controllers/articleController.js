import { createArticle, getArticle } from '../queries/article.js';

export default class ArticleController {
    static async createArticle(req, res, next) {
        try {
            const { content, category, title, tags } = req.body;
            const result = await createArticle({ content, category, title, tags });
            return res.json({ result });
        } catch (err) {
            next(err);
        }
    }

    static async getArticles(req, res, next) {
        try {
            const { articlesId } = req.body;
            const result = await getArticle(articlesId);
            return res.json({ result });
        } catch (err) {
            next(err);
        }
    }
}
