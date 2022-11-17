module.exports = function (sequelize, dataTypes){
    
    let alias = 'seguidores'; //Este alias se busca como nombre en de la tabla en plural dentro de la base de datos.

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
            allowNull:false,
        },
        
        seguido_id:{
            type: dataTypes.INTEGER,
            allowNull:false,
        },
        seguidor_id:{
            type: dataTypes.INTEGER,
            allowNull:false,
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
        tableName : "seguidores",
        timestamps:false, //Aclareción en caso de no explicitar created_at, deleted_at y updated_at
        underscored: true, //Aclareción en caso que los timestamps usen guiones bajos en lugar de camelCase.
    };

    const seguidores = sequelize.define(alias, cols, config);

    return seguidores;

}