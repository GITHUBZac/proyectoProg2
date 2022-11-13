const miPerfil = require('../data/miPerfil')

const miPerfilControlador = {
    index : function (req, res) {
        return res.send(miPerfil.lista)
    },
    



}


module.exports = miPerfilControlador