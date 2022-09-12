// requires

//metodos
const indexController = {
    index: function(req, res, next) {
        res.render('index');
      },
    busqueda: function(req, res, next) {
        res.render('resultadoBusqueda');
      }
}

//exportacion
module.exports = indexController