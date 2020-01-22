const db = require('../data/db-config.js');


//above the fold
module.exports = {
    list,
    findById
}

//dont forget to 'return' the call to the database

//implementation details
function list(){
    //select * from users
    return db.select('*').from('users');
}

function findById(id) {
    //select * from users where id =?
    return db("users").where({id})
}