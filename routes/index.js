var models = require('../models');
var express = require('express');
var router = express.Router();
var path = require('path');

//router.get('*', function (req, res) {
//  res.sendFile('index.html', {root: path.join(__dirname, '../public')});
////  res.sendFile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
//});

//kdeak: route to JADE
router.get('/', function (req, res) {
  models.Jelenlet
          .findAll()
          .then(function (jelenletek) {
            res.render('index', {
              title: 'Express',
              jelenletek: jelenletek
            });
          });
});

module.exports = router;