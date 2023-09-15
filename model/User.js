const { DataTypes } = require("sequelize")
const { sequelize } = require("../database")

const tableUser = sequelize.define('user', {
    userName: DataTypes.STRING,
    password: DataTypes.STRING
})