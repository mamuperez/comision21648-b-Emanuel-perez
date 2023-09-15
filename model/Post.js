const { DataTypes } = require("sequelize")
const { sequelize } = require("../database")

const tableUser = sequelize.define('post', {
    title: DataTypes.STRING,
    articulo: DataTypes.TEXT,
    image: DataTypes.TEXT,
    autor: DataTypes.STRING,
})

module.exports =(tableUser)