if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_ENV = process.env.NODE_ENV || 'development';
  require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
  });
}

console.log('env------', process.env); //this will contain all of the development's data

//slice for process.env's specific properties: PGHOST, PGUSER etc
module.exports = {
  PGHOST: process.env.PGHOST,
  PGUSER: process.env.PGUSER,
  PGPASSWORD: process.env.PGPASSWORD,
  PGDATABASE: process.env.PGDATABASE,
  DEBUG: parseInt(process.env.DEBUG || 0)
};

/*config will read your .env file, parse the contents,
assign it to process.env, and return an Object with a 
parsed key containing the loaded content or an
error key if it failed.*/
