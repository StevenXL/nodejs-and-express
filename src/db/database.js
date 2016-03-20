const pgp = require("pg-promise")({});

const databaseConfig= {
  "host": "localhost",
  "port": 5432,
  "database": "library_app",
  "user": "postgres"
};

const db = pgp(databaseConfig);

module.exports = db;
