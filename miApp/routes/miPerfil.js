var express = require('express');
var router = express.Router();

const miPerfilControler = require('../controllers/miPerfilControlador')

/* GET home page. */
router.get('/lista', miPerfilControler.index );



module.exports = router;