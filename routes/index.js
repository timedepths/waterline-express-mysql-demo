var express = require('express');
var router = express.Router();
var UserController = require('../api/controllers/UserController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/user',UserController.viewUser);
router.get('/user/add',UserController.add);

module.exports = router;
