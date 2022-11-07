// requires
const data = require('../data/index')


//metodos
const usersController = {
    detalleUsuario: function(req, res, next) {
        res.render('detalleUsuario');
      },
      editarPerfil: function(req, res, next) {
        res.render('editarPerfil', {data: data.usuarios, indice: req.params.id});
      },
    login: function(req, res, next) {
        res.render('login');
      },
      miPerfil: function(req, res, next) {
        res.render('miPerfil', {data: data.usuarios[0], posteos: data.posteos});
      },
    registracion: function(req, res, next) {
        res.render('registracion');
      },
}

//exportacion
module.exports = usersController