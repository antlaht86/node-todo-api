
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/todoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  const db = client.db('TodoApp')
  console.log('Connected to MongoDB server');

  // db.collection('Users').deleteMany({ name: 'Antti' }).then((result) => {
  //   console.log('Result', result);
  // });

  db.collection('Users').findOneAndDelete({ _id: new ObjectID("5a85abe2e25ca56b67cd9e1d") }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
    
  });

  //deleteOne <-- tämä poistaa ekan minkä löytää.

  //findOneAndDelete
  client.close()
});