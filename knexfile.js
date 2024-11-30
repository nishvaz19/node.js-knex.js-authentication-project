// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "postgresql",
    searchPath: 'database_schema', //postgres: CREATE SCHEMA database_schema;create table database_schema.test (a int not null); OR ALTER ROLE aadvar12309_dropescape SET search_path TO database_schema;
    connection: {
      user: "aadvar12309_dropescape",
      host: "0iq5m.h.filess.io",
      password: "846b24f0eec574cd33f16af209d271dcc12e7d08",
      database: "aadvar12309_dropescape",
      port: 5433,
    },
    migrations: {
      directory: __dirname + "/migrations",
      tableName: 'knex_migrations'
    },
  },

  staging: {
    client: "postgresql",
    searchPath: 'database_schema', //postgres: CREATE SCHEMA database_schema;create table database_schema.test (a int not null); OR ALTER ROLE aadvar12309_dropescape SET search_path TO database_schema;
    connection: {
      user: "aadvar12309_dropescape",
      host: "0iq5m.h.filess.io",
      password: "846b24f0eec574cd33f16af209d271dcc12e7d08",
      database: "aadvar12309_dropescape",
      port: 5433,
    },
    migrations: {
      directory: __dirname + "/migrations",
      tableName: 'knex_migrations'
    },
  },

  production: {
    client: "postgresql",
    searchPath: 'database_schema', //postgres: CREATE SCHEMA database_schema;create table database_schema.test (a int not null); OR ALTER ROLE aadvar12309_dropescape SET search_path TO database_schema;
    connection: {
      user: "aadvar12309_dropescape",
      host: "0iq5m.h.filess.io",
      password: "846b24f0eec574cd33f16af209d271dcc12e7d08",
      database: "aadvar12309_dropescape",
      port: 5433,
    },
    migrations: {
      directory: __dirname + "/migrations",
      tableName: 'knex_migrations'
    },
  },
};
~                                                                                                                                                                                                                                             
~                                                                                                                                                                                                                                             
~                                                                                                                                                                                                                                             
"knexfile.js" 54 lines, 1832 bytes
