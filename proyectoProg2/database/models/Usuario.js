module.exports = function (sequelize, dataTypes){
    
    let alias = 'Usuario'; //Este alias se busca como nombre en de la tabla en plural dentro de la base de datos.

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
            allowNull:false,
        },
        created_at : {
            type: dataTypes.DATE,
            allowNull:true,
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull:false,
        },
        mail: {
            type: dataTypes.STRING,
            allowNull:false
        },
        contrasenia: {
            type: dataTypes.STRING,
            allowNull:false,
        },
        img: {
            type: dataTypes.STRING,
            allowNull:false,
        },
        fecha :{
            type: dataTypes.DATE,
            allowNull:false,
        },
        dni :{
            type: dataTypes.INTEGER,
            allowNull:false,
        },
    }

    let config = {
        tableName : "usuarios",
        timestamps:false, //Aclaración en caso de no explicitar created_at, deleted_at y updated_at
        underscored: true, //Aclaración en caso que los timestamps usen guiones bajos en lugar de camelCase.
    };

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function (models) {
        Usuario.hasMany(models.Posteo, {
            as: 'posteos',
            foreignKey: 'usuario_id',
        })

        Usuario.belongsToMany(models.Usuario, {
            as: 'misSeguidores',
            through: 'seguidores',
            foreignKey: 'seguido_id',
            otherKey: 'seguidor_id',
            timestamps: true,
            underscored: true
        })

        Usuario.belongsToMany(models.Usuario, {
            as: 'misSeguidos',
            through: 'seguidores',
            foreignKey: 'seguidor_id',
            otherKey: 'seguido_id',
            timestamps: true,
            underscored: true
        })
    }

    return Usuario;

}