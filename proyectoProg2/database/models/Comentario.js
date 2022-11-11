module.exports = function(sequelize, dataType){

    let alias = "comentario";

    let cols = {
        
        id: {
            autoIncrement: true,
            allowNule: false,
            primaryKey: true,
            type: dataType.INTEGER,
        },

        comentario: {
            allowNule: false,
            type: dataType.STRING,
        },
        posteo_id:{
            allowNule: false,
            type: dataType.INTEGER,
        },
        usuario_id: {
            allowNule: false,
            type: dataType.INTEGER,
        },
        // created_at: {
        //     allowNule: false,
        //     type: dataType.DATE,
        //     field: "created_at",
        // },
        // updated_at: {
        //     allowNule: false,
        //     type: dataType.DATE,
        //     field: "updated_at",
        // }

    }
    let config = {
        tableName:"comentario", 
        timestamps: true,
        underscore:true
    };

    const comentario = sequelize.define(alias, cols, config);
    // alias: identifica al modelo --  cols: lo que contiene la tabla  --  config: nombre de la tabla
    comentario.associate = (db) => {
        // comentario.belongsTo(db.Product, {// comentario pertenece al producto
        //     as: "producto",
        //     foreignKey: "product_id"
        // });
        // comentario.belongsTo(db.User, { // comentario pertence a usuario
        //     as: "usuario",
        //     foreignKey: "user_id"
        // });

    };

    return comentario;
}