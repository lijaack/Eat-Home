module.exports = function(sequelize, DataTypes) {
    var Food = sequelize.define("Food", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        price: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        ingredient: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        image:{
            type:DataTypes.TEXT,
            allowNull: false
        }
    });

    Food.associate = (models) =>{
        Food.belongsTo(models.Restaurant, {
            // foreignKey:{
            //     allowNull: false
            // }
        })
    }

    return Food; 
};