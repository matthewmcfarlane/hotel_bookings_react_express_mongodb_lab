const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (colletion) {

  const router = express.router();

  router.get('/', (req, res) => {
    collection.find()
    .toArray()
    .then((body) => res.json(body))
    .catch((err) => {
      console.error(err);
      res.status({ status: 500, error: err})
    })
  })

  router.post('/', (req, res) => {

    const newData = req.body

    collection.insertOne(newData)
    .then((result) => {
      res.json(result.ops[0])
    })
    .catch((err) => {
      console.error(err);
      res.status(500)
      res.json({status: 500, error: err})
    })
  })

  return router;

};

module.exports = createRouter;