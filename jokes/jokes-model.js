const db = require('../database/dbConfig');

module.exports = {
    findById,
    findBy,
    find,
    add
}

function findBy(filter) {
    return db('users')
        .where(filter)
}

function find() {
    return db('users')

}

async function add(user){
    const [id] = await db('users')
        .insert(user, 'id')

    return findById(id)
}

function findById(id) {
    return db('users')
        .where({id})
        .first()
        .select('id', 'username')
}