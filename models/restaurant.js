module.exports = function(sequelize, DataTypes) {
    var Restaurant = sequelize.define("Restaurant", {

      
        name: {
            type: DataTypes.STRING,
            defaultValue: "Personal"
        },
        about: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        image: {
            type: DataTypes.TEXT
        },
        address: {

            type: DataTypes.TEXT,
            allowNull: false,
        },
        lincense_number: {
            type: DataTypes.TEXT,
             allowNull: false,
        },

    });

    // Restaurant.associate = (models) =>{
    //     Restaurant.belongsTo(models.User, {
    //         foreignKey:{
    //             allowNull: false
    //         }
    //     })
    // }

    return Restaurant;  
};