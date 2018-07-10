exports.seed = function(knex, Promise) {
  return knex('myuser')
    .del()
    .then(() => {
      return knex('myuser').insert([
        {
          id: 1,
          name: 'cang'
        },
        {
          id: 2,
          name: 'leann'
        },
        {
          id: 3,
          name: 'lisa'
        }
      ]);
    })
    .then(() =>
      knex.raw(
        `SELECT setval('"myuser_id_seq"', (SELECT MAX("id") FROM "myuser"))`
      )
    );
};
