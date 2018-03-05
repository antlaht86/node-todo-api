

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect( 'mongodb://antlaht:KolmeKaksi32@ds251988.mlab.com:51988/todoapp'||'mongodb://localhost:27017/TodoApp');
module.exports = {mongoose};