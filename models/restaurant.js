module.exports = function(sequelize, DataTypes) {
    var Restaurant = sequelize.define("Restaurant", {

      
        name: {
            type: DataTypes.STRING,
            defaultValue: "Personal"
        },
        image:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        about: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        address: {

            type: DataTypes.TEXT,
            allowNull: false,
        }
    });

    Restaurant.associate = (models) =>{
        Restaurant.belongsTo(models.User, {
            foreignKey:{
                allowNull: false
            }
        })
        Restaurant.hasMany(models.Food, {
        })
    }

    return Restaurant;  
};
