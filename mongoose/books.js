const mongoose = require('mongoose');

main()
    .then(() => {
        console.log('Connected successfully to MongoDB');
    })
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, //it is basically NOT NULL in SQL
        maxLength: 20
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [1, "Price is too low"], //it should be greater than 1, otherwise it will throw an error with the message "Price is too low"
    },
    discount: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction", "comics"], //it should one of these options only for category value
    },
    genre: [String] //means it can have multiple values in an array
});

    
const Book = mongoose.model('Book', bookSchema);//collection is created with the name of "books" in the database

// let book1 = new Book({
//     title: "Art of Mathematics",
//     price: 1200,
//     category: "non-fiction",
//     genre: ["education", "mathematics"]
// });
// book1.save()
// .then((res) => {
//     console.log(res);})
// .catch((err) => {
//     console.log(err);
// });

Book.findByIdAndUpdate("6afea2edebc4648a394301b5", {price: -300}, {runValidators: true})
.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err.errors.price.properties.message);
});