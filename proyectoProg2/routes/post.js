var express = require('express');
var router = express.Router();
var postController = require('../controllers/postController');

let multer = require('multer');
let path = require('path');

/* Configurar multer */
let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../public/img/posts'));
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

router.post('/detallePost', postController.detallePost);
router.get('/detallePost/:id', postController.detallePost);

module.exports = router;