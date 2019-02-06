module.exports = function(sequelize, DataTypes) {
    var Restaurant = sequelize.define("Restaurant", {

      
        name: {
            type: DataTypes.STRING,
            defaultValue: "Personal"
        },
        image:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        about: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {

            type: DataTypes.STRING,
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
