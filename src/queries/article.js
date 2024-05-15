import Article from '../models/Article.js';

export function createArticle(articleData) {
    return Article.create(articleData);
}

export function getArticle(articleID) {
    return Article.find({ _id: { $in: articleID } });
}
