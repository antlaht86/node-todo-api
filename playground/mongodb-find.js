
// const MongoClient = require('mongodb').MongoClient;

const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/todoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  const db = client.db('TodoApp')
  console.log('Connected to MongoDB server');
  // const db = client.db('TodoApp')
  // console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5a856a4ee25ca56b67cd8b4b')

  // }).toArray().then((docs) => {
  //   console.log('todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });
  //---------------------------------------------------------------------------



  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`todos count: ${count} `);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });
  //----------------------------------------------------------------------
  db.collection('Users').find({name: 'Antti'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined,2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  client.close()
});