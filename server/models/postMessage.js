import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    user: {
        String,
    },
    title: {
        String,
    },
    description: {
        String,
    },
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
});

const PostMessage = mongoose.model('PostMessages', postSchema);

export default PostMessage;