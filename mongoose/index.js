const mongoose = require('mongoose');

main()
    .then(() => {
        console.log('Connected successfully to MongoDB');
    })
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model('User', userSchema);

// const user1 = new User({
//     name: "John Doe",
//     email: "john@yahoo.com",
//     age: 30
// });
//user1.save(); // Save the user to the database

// const user2 = new User({
//     name: "eve",
//     email: "eve@yahoo.com",
//     age: 25
// });
// user2
// .save()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// }); 

// User.insertMany([
//     {name: "Tony", email: "tony@gmail.com", age: 45},
//     {name: "peter", email: "peter@gmail.com", age: 31},
//     {name: "brucy", email: "brucy@gmail.com", age: 28}
// ]).then((res) => {
//     console.log(res);
// });

// User.findById("6afc7e747ca77cf4c5b739af")
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

// User.updateOne({name: "John Doe"}, {age: 35}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// User.findByIdAndUpdate("6afc7f3392bb3287c6cdd209", {age: 28}, {new: true})
// .then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

User.deleteMany({age: {$gt: 34}})
.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});
