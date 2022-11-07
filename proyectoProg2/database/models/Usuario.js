module.exports = function (sequelize, dataTypes){
    
    let alias = 'usuario'; //Este alias se busca como nombre en de la tabla en plural dentro de la base de datos.

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

        }

    }

    let config = {
        tableName : "usuario",
        timestamps:true, //Aclareción en caso de no explicitar created_at, deleted_at y updated_at
        underscored: true, //Aclareción en caso que los timestamps usen guiones bajos en lugar de camelCase.
    };

    const usuario = sequelize.define(alias, cols, config);

    return usuario;

}