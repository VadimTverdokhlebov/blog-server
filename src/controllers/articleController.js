import { createArticle, getArticle, getArticles} from '../queries/article.js';

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
            const result = await getArticles();
            return res.json({ result });
        } catch (err) {
            next(err);
        }
    }
    static async getArticle(req, res, next) {
        try {
            const articleId = req.params.articleId
            const result = await getArticle(articleId);
            return res.json({ result });
        } catch (err) {
            next(err);
        }
    }
}
