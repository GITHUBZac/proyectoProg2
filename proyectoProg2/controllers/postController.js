// requires

const data = require("../data");

//metodos
const postController = {
    nuevoPost: function(req, res, next) {
        res.render('agregarPost');
      },
    detallePost: function(req, res, next) {
        let idPosteo = req.params.id;

        let postEncontrado = data.postsByID(idPosteo);

        let comentariosEncontrado = data.comentarioByIdPosteo(idPosteo)
        

        res.render('detallePost', {posteo : postEncontrado,
                                  comentarios: comentariosEncontrado,
                                  
              });
      }
}

//exportacion
module.exports = postController