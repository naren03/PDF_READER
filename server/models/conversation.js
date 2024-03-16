const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ConversationSchema = new Schema({
    name: { type: String, required: true },
    chats: [{ question: String, answer: String }],
    welcomeMessage: { type: String }
});

module.exports = mongoose.model('Conversation', ConversationSchema);
