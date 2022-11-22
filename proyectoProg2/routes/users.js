var express = require('express');
const usersController = require('../controllers/usersControllers');
var router = express.Router();
let multer = require('multer');
let path = require('path');

/* Configurar multer */
let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../public/img/usuarios'));
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

let upload = multer({storage: storage});


/* GET users listing. */
router.get('/editarPerfil/:id', usersController.editarPerfil  );
router.get('/login',usersController.login );
router.post('/login',usersController.signin );
router.get('/logout',usersController.logout);
router.get('/miPerfil',usersController.miPerfil  );
router.get('/registracion',usersController.registracion  );
router.post('/registracion', upload.single('foto'), usersController.store );
router.get('/detalleUsuario/:id',usersController.detalleUsuario  );

module.exports = router;