import { createArticle, getArticle } from '../queries/article.js';

export default class ArticleController {
    static async createArticle(req, res) {
        const { content, category, title, tags } = req.body;
        const result = await createArticle({ content, category, title, tags });
        return res.json({ result });
    }

    static async getArticle(req, res) {
        const { content, category, title, tags } = req.body;
        const result = getArticle({ content, category, title, tags });
        return res.json({ result });
    }
}
