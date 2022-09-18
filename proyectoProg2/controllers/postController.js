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

        let comentariosEncontrado = data.comentarioByIdPosteo(idPosteo);

        let posteoEncontrado = data.posteosByIdPosteo(idPosteo)
        

        res.render('detallePost', {posteo : postEncontrado,
                                  comentarios: comentariosEncontrado,
                                  posteos: posteoEncontrado
                                  
              });
      }
}

//exportacion
module.exports = postController