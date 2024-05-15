import mongoose from 'mongoose';

const { Schema } = mongoose;

const articleSchema = new Schema({
    content: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    tags: {
        type: Array,
        require: true
    }
});

export default mongoose.model('article', articleSchema);
