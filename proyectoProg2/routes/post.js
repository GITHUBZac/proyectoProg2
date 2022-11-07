var express = require('express');
var router = express.Router();
var postController = require('../controllers/postController');

/* GET home page. */
router.get('/nuevoPost', postController.nuevoPost);
router.get('/detallePost', postController.detallePost);

module.exports = router;