// requires
const db = require('../database/models');
const Posteos = db.Posteo 

//metodos
const indexController = {
  index: function (req, res, next) {
    Posteos.findAll({
      include: {
        all: true,
        nested: true
      },
      order: [['created_at', 'DESC']]
    })
    .then((listaposteos) => {
      res.render('index', { listaposteos: listaposteos });
    })
    .catch((error) => {
      console.log(error);
    })
  }
 
}

//exportacion.
module.exports = indexController
