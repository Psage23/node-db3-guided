const db = require('../data/db-config.js');


//above the fold
module.exports = {
    list,
    findById,
    add
}

//dont forget to 'return' the call to the database

//implementation details
function list(){
    //select * from users
    return db.select('*').from('users');
}

function findById(id) {
    //select * from users where id =?
    return db("users")
    .where({id})
    .first();
}

function add(user) {
    return db('users')
    .insert(user)
    .then(ids => {
        return findById(ids[0]);
    });
}