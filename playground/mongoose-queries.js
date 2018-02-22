const {ObjectID} = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// let id = '5a8ea370caf971258c0a6321';

// if (!ObjectID.isValid(id)){
//     console.log("ID not valid")
// }

// Todo.find({
//     _id: id
// }).then((todos1) => {
//     console.log('Todos', todos1)
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo)
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('id not found.')
//     }
//     console.log('TodoByID', todo)
// }).catch((e) => console.log(e));

let id = '5a868fede9d1061a5827156a';
User.findById(id).then((user) => {
    if (!user) {
        return console.log('id not found.')
    }
    console.log('userByID', user)
}).catch((e) => console.log(e));