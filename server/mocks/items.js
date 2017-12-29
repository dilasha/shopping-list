/* eslint-env node */
'use strict';

module.exports = function(app) {
  const express = require('express');
  let itemsRouter = express.Router();

  itemsRouter.get('/', function(req, res) {
    res.send({
      'items': [
        {id: 1 ,name:'milk', quantity: 2}, 
        {id: 2 ,name:'butter', quantity: 1},
        {id: 3 ,name:'eggs', quantity: 6},
        {id: 4 ,name:'cheese', quantity: 1},
        {id: 5 ,name:'tomatoes', quantity: 12}
      ]
    });
  });
  
  itemsRouter.post('/', function(req, res) {
    res.status(201).send({});
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  app.use('/api/items', require('body-parser').json());
  app.use('/api/items', itemsRouter);
};
