var models = require('../models');
var express = require('express');
var router = express.Router();

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