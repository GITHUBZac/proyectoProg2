/* Importar */
const db = require('../database/models');
const bycript = require('bcryptjs');

/* Desarrollar */
const userController = {
   
    /* Mostrar el form de la peli */
    create : (req, res) =>{
        return res.render("registerUser");
    },
    /* Guardar una peli */
    store: (req, res) => {
    /* Es hacer una validacion */
        let errors = {};

        if (req.body.email == "") {
            errors.message = "El campo email esta vacio";
            res.locals.errors = errors;
            return res.render('registracion');

        }
        else if(req.body.username == ""){
            errors.message = "El campo username esta vacio";
            res.locals.errors = errors;
            return res.render('registracion');
        }
        else if(req.body.password == ""){
            errors.message = "El campo password esta vacio";
            res.locals.errors = errors;
            return res.render('registracion');
        }
        else if(req.body.password.length < 3){
            errors.message = "El campo password debe tener al menos 3 caracteres";
            res.locals.errors = errors;
            return res.render('registracion');
        }
        else if(req.file == undefined){
            errors.message = "El campo foto es obligatorio";
            res.locals.errors = errors;
            return res.render('registracion');
        }
        else if(req.body.fecha == ""){
            errors.message = "El campo fecha esta vacio";
            res.locals.errors = errors;
            return res.render('registracion');
        }
        else if(req.body.DNI == ""){
            errors.message = "El campo DNI esta vacio";
            res.locals.errors = errors;
            return res.render('registracion');
        }
        else{
            db.usuario.create({
                nombre: req.body.username,
                mail: req.body.email,
                contrasenia: bycript.hashSync(req.body.password, 12),
                img: req.file.filename,
                fecha: req.body.fecha,
                dni: req.body.DNI
            })
            .then((usuario) => {
                res.redirect('/users/login')
            })
            .catch((error)=>{
                console.log(error);
            })
        }

    },
    login:(req,res)=>{
        res.render('login');

        // if (req.session.user != undefined) {
        //     return res.redirect('/')
        // } else {
        //     return res.render('login')
        // }
        
    },
    signin:(req,res)=>{
       
        db.usuario.findOne({
            where:{
                mail: req.body.email
            }
        })
        .then((usuario)=>{

            let errors = {};

            if (usuario == null) {
                errors.message = "El email es invalido";
                res.locals.errors = errors;
                return res.render('login');
            }
            else if (bycript.compareSync(req.body.password, usuario.contrasenia) == false) {
                errors.message = "La contraseña es invalida";
                res.locals.errors = errors;
                return res.render('login');
            }
            else{
                if(req.body.recordar == 'on') {
                    res.cookie('userId', usuario.id, {maxAge: 1000 * 60 * 10})
                }
                req.session.user = usuario.dataValues;
                res.locals.user = usuario.dataValues;
                res.redirect('/')
            }
        })

    },
    logout:(req,res)=>{
        req.session.destroy();
        res.clearCookie('userId');
        res.locals.user = undefined;
        return res.redirect('/users/login');
    },
    
    editarPerfil:(req, res)=>{
        
    },
    miPerfil:(req, res)=>{

    },
    registracion:(req, res)=>{
        res.render('registracion');
    },
    detalleUsuario:(req, res)=>{

    }

}


/* Exportar */

module.exports = userController;