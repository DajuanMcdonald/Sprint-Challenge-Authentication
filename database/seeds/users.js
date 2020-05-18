
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {username: 'guest_1', password: 'notNull'},
        {username: 'guest_2', password: 'null'},
        {username: 'guest_3', password: 'NaN'}
      ]);
    });
};
