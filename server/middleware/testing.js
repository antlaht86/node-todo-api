const { check, validationResult } = require('express-validator/check');
// const { matchedData, sanitize } = require('express-validator/filter');


var { Todo } = require('./../models/todo');

const testing = (req, res, next) => {


    [
        check('text').trim().isLength({ min: 5 }).withMessage('must be a five characters long'),
        check('text').isString().withMessage('must be a String'),
        check('go').isString().withMessage('must be a String'),
    ]
    next();


};




module.exports = { testing };


// .array([options])
// options (optional): an object of options. Defaults to { onlyFirstError: false }