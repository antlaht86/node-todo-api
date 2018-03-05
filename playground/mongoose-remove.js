const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');


// Todo.remove({}).then((result) => {
//     console.log(result);
// });
// tällä metodilla saa poistettua databasesta tavaraa ja kuitenkin siitä ilmoituksen, esim send jne jne
// Todo.findOneAndRemove({}).then((result)=>{
//     console.log(result);
// });

Todo.findByIdAndRemove('5a9d88d8424b4073b8b29215').then((todo) => {
    console.log(todo);
});