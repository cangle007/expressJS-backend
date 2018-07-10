const PeopleController = require('../controller/PeopleController');
const knex = require('../knex');

module.exports = new PeopleController(
  { name: 'Cang', title: 'Web Dev.', salary: '100K', myuserTable: 'myuser' },
  knex
);
