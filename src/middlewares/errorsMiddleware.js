export default async function errorsMiddleware(err, req, res, next) {
    if (err) {
        console.log(err);
        return res.status(500).json({ message: err.message });
    } else {
        next()
    }
}
