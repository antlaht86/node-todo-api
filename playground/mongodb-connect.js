
// const MongoClient = require('mongodb').MongoClient;


const {MongoClient,ObjectID} = require('mongodb');
// let user = { name: 'Antti', age: 32 };
// let { name } = user;
// console.log(name);




MongoClient.connect('mongodb://localhost:27017/todoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  const db = client.db('TodoApp')
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert Todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Antti',
  //   age: 31,
  //   location: 'Pori'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log("Unable to insert users", err);
  //   }

  //   // console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  client.close()
});