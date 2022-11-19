var express = require('express');
var router = express.Router();
var postController = require('../controllers/postController');

let multer = require('multer');
let path = require('path');
const { Router } = require('express');

/* Configurar multer */
let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../public/img/post'));
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
                /* foto-456456456456456.png  */             
    }
});

let upload = multer({storage: storage});
/* GET home page. */
router.get('/nuevoPost', postController.nuevoPost);
router.post('/nuevoPost', upload.single('imagen'), postController.crearPost);

/* aqui guarda un posteo */
router.post('/guardarPost:', postController.detallePost);

/* Buscar detalle del posteos numero :id */
router.get('/detallePost/:id', postController.detallePost);

router.get("/resultado-busqueda",postController.busquedaPost)

router.get("/eliminarPost/:id",postController.eliminarPost)
module.exports = router;