module.exports = function(sequelize, DataTypes) {
    var Restaurant = sequelize.define("Restaurant", {

      
        name: {
            type: DataTypes.STRING,
            defaultValue: "Personal"
        },
        photos:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        about: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT
        },
        address: {

            type: DataTypes.TEXT,
            allowNull: false,
        },
        license_number: {
            type: DataTypes.TEXT,
             allowNull: false,
        },

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
