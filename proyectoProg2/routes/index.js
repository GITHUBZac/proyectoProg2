var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController')

/* GET home page. */
router.get('/main', indexController.index );
router.get('/busqueda', indexController.busqueda );

module.exports = router;
