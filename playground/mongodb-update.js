
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/todoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  const db = client.db('TodoApp')
  console.log('Connected to MongoDB server');


  // db.collection('Todos').findOneAndUpdate(
  //   { _id: new ObjectID('5a856a4ee25ca56b67cd8b4b') },
  //   { $set: { completed: false } }, { returnOriginal: false })
  //   .then((result) => {
  //     console.log(JSON.stringify(result, undefined, 2));
  //   });

  db.collection('Users').findOneAndUpdate(
    { _id: new ObjectID('5a85681119c7c0148cd9b716') },
    { $set: { name: "Sepi" }, $inc: {age: 1 }}, { returnOriginal: false })
    .then((result) => {
      console.log(JSON.stringify(result, undefined, 2));
    });


  //findOneAndDelete
  client.close()
});