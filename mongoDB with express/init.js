const mongoose = require('mongoose');
const Chat = require('./models/chats');

main()
.then(() => {
    console.log("connection successful");
}).catch((err) => {
    console.log(err);
});

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "hena",
        to: "neha",
        msg: "hello world",
        created_at: new Date() //give us current date and time(acc. to UTC)
    },
    {
        from: "raj",
        to: "jainish",
        msg: "hii",
        created_at: new Date()
    },
    {
        from: "vishal",
        to: "krishna",
        msg: "hii sister",
        created_at: new Date()
    },
    {
        from: "param",
        to: "vishal",
        msg: "hii brother",
        created_at: new Date()
    }
];

Chat.insertMany(allChats);