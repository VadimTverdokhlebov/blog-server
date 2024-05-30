import { createArticle, getArticle, getArticles } from '../queries/article.js';
import { sendRequest } from '../shared/request.js'
export default class ArticleController {
    static async createArticle(req, res, next) {
        try {
            const { content, category, title, tags, img, description } = req.body;
            const requestData = {
                x: content
            };
            const url = 'http://127.0.0.1:5003/model';

            const categoruIA = await sendRequest(url, requestData);

            const result = await createArticle({ content, category, title, tags, img, description });
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
            const articleId = req.params.articleId;
            const result = await getArticle(articleId);
            return res.json({ result });
        } catch (err) {
            next(err);
        }
    }
}
