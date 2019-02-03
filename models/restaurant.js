module.exports = function(sequelize, DataTypes) {
    var Restaurant = sequelize.define("Restaurant", {
        owner: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        photos: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        buisness_name: {
            type: DataTypes.STRING,
            defaultValue: "Personal"
        },
        description: {
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

    }

    return Restaurant;  
};