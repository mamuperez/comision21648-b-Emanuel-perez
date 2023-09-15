const { tableUser } = require('../model/Post')
 res.render ("index")
function createUser (req, res) {

    res.send('created user')
}
function listUser (req, res) {
    res.send('listed user')
}

function updateUser (req, res) {
    res.send('updated user')
}
function deleteUser (req, res) {
    res.send('deleted user')
}
function findUser (req, res) {
    res.send('finded user')
}

module.exports = {
    createUser,
    listUser,
    updateUser,
    deleteUser,
    findUser
}