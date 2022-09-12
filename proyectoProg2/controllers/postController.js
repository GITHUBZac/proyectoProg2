// requires

//metodos
const postController = {
    nuevoPost: function(req, res, next) {
        res.render('nuevoPost');
      },
    detallePost: function(req, res, next) {
        res.render('detallePost');
      }
}

//exportacion
module.exports = postController