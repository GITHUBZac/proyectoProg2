// requires
const data = require('../data/index')


//metodos
const indexController = {
    index: function(req, res, next) {
        res.render('index', {listaPosteos: data.posteos});
      },
    busqueda: function(req, res, next) {
        res.render('resultadoBusqueda');
      }
}

//exportacion
module.exports = indexController