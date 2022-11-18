module.exports = function(sequelize, dataType){

    let alias = "Comentario";

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
        }
    }
    let config = {
        tableName:"comentarios", 
        timestamps: true,
        underscored:true
    };

    const Comentario = sequelize.define(alias, cols, config);
    // alias: identifica al modelo --  cols: lo que contiene la tabla  --  config: nombre de la tabla
    Comentario.associate = (models) => {
        Comentario.belongsTo(models.Usuario, {// Comentario pertenece al producto
            as: "usuario",
            foreignKey: "usuario_id"
        });

        Comentario.belongsTo(models.Posteo, { // Comentario pertence a usuario
            as: "post",
            foreignKey: "posteo_id"
        });

    };

    return Comentario;
}