module.exports = {
    development: {
      client: 'sqlite3', // or 'pg', 'mysql', etc. based on your database
      connection: {
        filename: './dev.sqlite3' // path to your SQLite database file
      },
      useNullAsDefault: true, // required for SQLite
    },
    testing: {
      client: 'sqlite3', // or 'pg', 'mysql', etc. based on your database
      connection: {
        filename: './test.sqlite3' // path to your testing SQLite database file
      },
      useNullAsDefault: true, // required for SQLite
    }
  