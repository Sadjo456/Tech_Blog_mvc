const { post } = require('../controllers');
const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "wow!!!!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "I dont think so!"
        
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "that was awesome"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "You think so"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "What about me!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "I have the best team"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Ok i got it"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "I am too."
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;