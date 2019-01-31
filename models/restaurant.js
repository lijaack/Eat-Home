module.exports = function(sequelize, DataTypes) {
    var Restaurant = sequelize.define("Restaurant", {
        owner: {
            type: Sequelize.STRING,
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
        reviews: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
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


    return Restaurant;  
};