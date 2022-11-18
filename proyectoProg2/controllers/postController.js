/* Importar */
const db = require('../database/models');
const movie = db.Movie;
const Posteos = db.Posteo // guardando el retorno del modelo
const op = db.Sequelize.Op;

/* Desarrollar */
const postController = {
    index: function (req, res) {

        let criterios = {
            /*  where : [{awards : 1}, {length : 120}],
             order : [["title", "DESC"]],
             limit : 2 */
        }

        movie.findAll(criterios)
            .then((result) => {
                /* #nota: Crear Contador */


                /* #nota: Enviar dato a la vista con la clave contador*/


                return res.render("movies", { peliculas: result })
            });

    },

    show: (req, res) => {
        let id = req.params.id;

        let relaciones = {
            include: [
                {
                    all: true,
                    nested: true
                }
                // {association:'genre'},
                // {association:'actors'}

            ]
        };

        movie.findByPk(id, relaciones)
            .then((result) => {
                console.log(result.actors);
                return res.render("detalleMovies", { movie: result })
            })
            .catch((err) => {
                return res.redirect("/")
            });
    },

    showOne: (req, res) => {
        let busqueda = req.query.pelicula;

        let criterios = {
            where: [
                /* {title: busqueda} */
                { title: { [op.like]: "%" + busqueda + "%" } }
            ]
        }

        movie.findOne(criterios)
            .then((result) => {
                return res.render("detalleMovies", { movie: result })
            })
            .catch((err) => {
                return res.redirect("/")
            });

    },
    /* Mostrar el form de la peli */
    create: (req, res) => {
        return res.render("registerMovie");
    },
    /* Guardar una peli */
    store: (req, res) => {
        /* return res.send(req.body) */
        let peliculaAGuardar = req.body;
        /* luego la tengo que guardar en la DB */

        return res.redirect("/movies");
    },
    update: (req, res) => {
        let id = req.params.id;
        movie.findByPk(id)
            .then((result) => {
                return res.render('updateMovie', { movie: result.dataValues })
            })
            .catch(erro => console.log(erro))

    },
    updatePost: (req, res) => {
        let filtro = {
            where: [{ id: req.body.id }]
        }
        let info = req.body;

        movie.update(info, filtro)
            .then((result) => {
                return res.redirect('/movies')
            })
            .catch(() => {
                return res.redirect('/')
            })
    },

    eliminarPost: (req, res) => {

        let id = req.params.id;

        Posteos.destroy({
            where: [
                {
                    id: id
                },
                {
                    usuario_id: req.session.user.id
                }
            ]
        })
        .then((result) => {
            return res.redirect('/')
        })
        .catch((err) => {
            return res.redirect('/')
        })
       
    },

    nuevoPost:(req,res)=>{
        if(req.session.user) {
            res.render('agregarPost')
        }
        else{
            res.redirect('/users/login')
        }
    },
    crearPost:(req,res)=>{


        let errors = {};

        if (req.body.texto == "") {
            errors.message = "Ingresar texto del post";
            res.locals.errors = errors;
            return res.render('agregarPost');
        }
        else if (req.file == undefined) {
            errors.message = "Ingresar una foto";
            res.locals.errors = errors;
            return res.render('agregarPost');
        }
        else{
           db.Posteo.create({
            usuario_id: req.session.user.id,
            imagen: req.file.filename,
            comentario: req.body.texto
           })
           .then(()=>{
                res.redirect('/');
           })
           .catch((error)=>{
            console.log(error);
           })
        }
    },
    guardarPost:(req,res)=>{

    },
    detallePost:(req,res)=>{
        let idPosteo = req.params.id;
        db.Posteo.findOne({
            include: {
                all: true,
                nested: true
            },
            where: {
                id: idPosteo
            },
        })
        .then(posteo => {
            return res.render('detallePost', {posteo: posteo})
        })

    },

    busquedaPost: (req,res)=> {
        let busqueda = req.query.busqueda;

        Posteos.findAll ({
            include: {
                all: true,
                nested: true
            },
            where: {
                comentario: {[op.like] : "%" + busqueda + "%"}
            },
            order:[['created_at', 'DESC']]
        })
        .then((listaposteos)=>{
            res.render('resultadoBusqueda', {listaposteos: listaposteos});
        })
        .catch((error)=>{
            console.log(error);
        })
    }


}


/* Exportar */

module.exports = postController;