
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'guest_1', password: 'notNull'},
        {username: 'guest_2', password: 'null'},
        {username: 'guest_3', password: 'NaN'}
      ]);
    });
};
