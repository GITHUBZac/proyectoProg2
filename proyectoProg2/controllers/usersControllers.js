// requires
const { usuariosByIdPosteo, usuarios } = require('../data/index');
const data = require('../data/index')



//metodos
const usersController = {
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

      detalleUsuario: function(req, res, next) {
        let idPosteo = req.params.id;

        let postEncontrado = data.postsByID(idPosteo);

        let comentariosEncontrado = data.comentarioByIdPosteo(idPosteo);

        let usuario = data.usuarios.find(usuario=>usuario.id_usuario==idPosteo);

 
        

        
        res.render('detalleUsuario',{posteo : postEncontrado,
          comentarios: comentariosEncontrado, 
          usuario: usuario
          
});
        
      },



}

//exportacion
module.exports = usersController