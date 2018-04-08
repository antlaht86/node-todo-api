var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique:[true,"jotain paskoo!"]
    },
    age: {
        type: Number,

    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});


module.exports = { Todo };



// var twoTodo = new Todo({
//     text: ' some text ' //<-- Tämä ei hyväksy objectia, mutta hyväksyy numeron ja booleanin, koska muuttaa ne stringiksi
// });

// twoTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to save todo');
// });