module.exports = function (sequelize, dataTypes) {
    let alias = 'Posteo';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        usuario_id: {
            type: dataTypes.INTEGER
        },
        imagen: {
            type: dataTypes.STRING
        },
        comentario: {
            type: dataTypes.STRING
        },
        // createdAt: {
        //     type: dataTypes.DATE,
        //     allowNull: true,
        // },
        // updatedAt: {
        //     type: dataTypes.DATE,
        //     allowNull: true,
        // }
    }

    let config = {
        tableName: "posteos",
        timestamps: true,
        underscored: true,
    }

    let Posteo = sequelize.define(alias, cols, config);

    Posteo.associate = function (models) {
        // Posteo.hasMany(models.Comentario, {
        //     as: 'comentario',
        //     foreignKey: 'id_posteos',
        // })
        // Posteo.belongsTo(models.Usuario, {
        //     as: 'usuario',
        //     foreignKey: 'id_usuarios',
        // })
    }
    return Posteo;
}