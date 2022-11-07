// requires

//metodos
const postController = {
    nuevoPost: function(req, res, next) {
        res.render('agregarPost');
      },
    detallePost: function(req, res, next) {
        res.render('detallePost');
      }
}

//exportacion
module.exports = postController