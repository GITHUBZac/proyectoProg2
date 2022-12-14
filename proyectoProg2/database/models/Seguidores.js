module.exports = function (sequelize, dataTypes) {

    let alias = 'Seguidores'; //Este alias se busca como nombre en de la tabla en plural dentro de la base de datos.

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
            allowNull: false,
        },

        seguido_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        seguidor_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },

        // created_at: {
        //     type: dataTypes.DATE,
        //     allowNull: true,
        // },
        // updated_at: {
        //     type: dataTypes.DATE,
        //     allowNull: true,
        // }
    }

    let config = {
        tableName: "seguidores",
        timestamps: false, //Aclaración en caso de no explicitar created_at, deleted_at y updated_at pero estos campos estan comentados
        underscored: true, //Aclaración en caso que los timestamps usen guiones bajos en lugar de camelCase.
    };

    const Seguidores = sequelize.define(alias, cols, config);

    Seguidores.associate = function (models) {
    Seguidores.belongsToMany(models.Usuario, {
        as: 'usuariosSeguidores',
        through: 'seguidores',
        foreignKey: 'seguido_id',
        otherKey: 'seguidor_id',
        timestamps: true,
        underscored: true
    })

    Seguidores.belongsToMany(models.Usuario, {
        as: 'usuariosSeguidos',
        through: 'seguidos',
        foreignKey: 'seguidor_id',
        otherKey: 'seguido_id',
        timestamps: true,
        underscored: true
    })

    }

    return Seguidores;

}