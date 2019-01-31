module.exports = function(sequelize, DataTypes) {
    var Menu = sequelize.define("Menu", {
        product: {
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
        ingredients: {
            type: DataTypes.STRING,
            defaultValue: "Personal"
        },
    });


    return Menu; 
};