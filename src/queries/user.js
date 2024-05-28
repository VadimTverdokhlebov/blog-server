import User from '../models/User.js';

export function createUser(userData) {
    return User.create(userData);
}

export function getUsers() {
    // return user.find({ _id: { $in: userId } });
    return User.find().all('users', []);

}
export function getUser(userId) {
    return User.findOne({ userId });
}
