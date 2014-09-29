var express = require('express');
var router = express.Router();

/**
 * Test page.
 **/
router.get('/', function (req, res) {
  res.render('index', { title: 'Client logging facility' });
});

/**
 * Default JSNLog logging endpoint.
 */
router.post('/jsnlog.logger', function (req, res) {
  console.dir(req.body);
  res.status(200).end();
});

/**
 * Alternate logging endpoint.
 */
router.post('/log', function (req, res) {
  console.dir(req.body);
  res.status(200).end();
});

module.exports = router;
