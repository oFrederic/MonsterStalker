const environment = process.env.NOVE_ENV || 'development';
const config = require('../knexfile.js');
console.log(config);
module.exports = require('knex')(config);
