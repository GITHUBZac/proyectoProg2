// requires
const data = require('../data/index')


//metodos
const usersController = {
    detalleUsuario: function(req, res, next) {
        res.render('detalleUsuario');
      },
      editarPerfil: function(req, res, next) {
        res.render('editarPerfil');
      },
    login: function(req, res, next) {
        res.render('login');
      },
      miPerfil: function(req, res, next) {
        res.render('miPerfil', {data: data.usuarios[0]});
      },
    registracion: function(req, res, next) {
        res.render('registracion');
      },
}

//exportacion
module.exports = usersController