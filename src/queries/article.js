import Article from '../models/Article.js';

export function createArticle(articleData) {
    return Article.create(articleData);
}

export function getArticle(articleID) {
    return Article.findOne({ _id: { $in: articleID } });
}
