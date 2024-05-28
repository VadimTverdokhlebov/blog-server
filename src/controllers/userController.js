import { createUser, getUsers, getUser } from '../queries/user.js';

export default class UserController {
    static async createUser(req, res, next) {
        try {
            const { email, password, photo, bio, name } = req.body;
            const result = await createUser({ email, password, photo, bio, name });
            return res.json({ result });
        } catch (err) {
            next(err);
        }
    }
    static async getUsers(req, res, next) {
        try {
            const result = await getUsers();
            return res.json({ result });
        } catch (err) {
            next(err);
        }
    }
    static async getUser(req, res, next) {
        try {
            const userId = req.params.userId;
            const result = await getUser(userId);
            return res.json(result);
        } catch (err) {
            next(err);
        }
    }
}
