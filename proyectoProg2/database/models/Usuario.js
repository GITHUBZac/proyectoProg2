module.exports = function (sequelize, dataTypes){
    
    let alias = 'User'; //Este alias se busca como nombre en de la tabla en plural dentro de la base de datos.

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
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
            type: dataTypes.STRING
        },
        mail: {
            type: dataTypes.STRING
        },
        contrasenia: {
            type: dataTypes.STRING
        },
        img: {
            type: dataTypes.STRING
        },
        fecha :{
            type: dataTypes.DATE
        },
        dni :{
            type: dataTypes.INTEGER
        },
        deleatedat:{
            type: dataTypes.DATE,
            allowNull:true,
        }

    }

    let config = {
        tableName : "users",
        timestamps:true, //Aclareción en caso de no explicitar created_at, deleted_at y updated_at
        underscored: true, //Aclareción en caso que los timestamps usen guiones bajos en lugar de camelCase.
    };

    const User = sequelize.define(alias, cols, config);

    return User;

}