var models = require('../models');
var express = require('express');
var router = express.Router();

/* kdeak: route actions to Angular*/
// get all jelenlet
router.get('/angular/jelenletek', function (req, res) {
  console.log("get jelenletek");
  models.Jelenlet.findAll(function (err, jelenletek) {

    // if there is an error retrieving, send the error. nothing after res.send(err) will execute
    if (err)
      res.send(err);

    res.json(jelenletek); // return all todos in JSON format
  });
});

// create todo and send back all todos after creation
router.post('/angular/jelenletek', function (req, res) {

  // create a todo, information comes from AJAX request from Angular
  models.Jelenlet.create({
    name: req.body.name,
//    name: req.param('name'),
    done: false
  }, function (err, jelenlet) {
    if (err)
      res.send(err);

    // get and return all the todos after you create another
    models.Jelenlet.find(function (err, jelenletek) {
      if (err)
        res.send(err);
      res.json(jelenletek);
    });
  });

});

// delete a todo
router.delete('/angular/jelenletek/:id', function (req, res) {
  console.log("param id: " + req.params.id);
  models.Jelenlet.remove({
    id: req.params.id
  }, function (err, jelenlet) {
    if (err)
      res.send(err);

    // get and return all the todos after you create another
    models.Jelenlet.find(function (err, jelenletek) {
      if (err)
        res.send(err);
      res.json(jelenletek);
    });
  });
});



/* kdeak: route actions to JADE*/
router.post('/create', function (req, res) {
  models.Jelenlet.create({
    name: req.param('name')
  }).then(function () {
    res.redirect('/');
  });
});

router.get('/:id/destroy', function (req, res) {
  models.Jelenlet.find({
    where: {id: req.param('id')}
  }).then(function (jelenlet) {
    jelenlet.destroy().then(function () {
      res.redirect('/');
    });
  });
});

module.exports = router;