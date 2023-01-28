// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "mysql",
    connection: {
      user: "root",
      host: "localhost",
      password: "twekl2020",
      database: "node-authentication-knex",
      port: 3306,
    },
    migrations: {
      directory: __dirname + "/migrations",
    },
  },

  staging: {
    client: "mysql",
    connection: {
      user: "root",
      host: "localhost",
      password: "twekl2020",
      database: "node-authentication-knex",
      port: 3306,
    },
    migrations: {
      directory: __dirname + "/migrations",
    },
  },

  production: {
    client: "mysql",
    connection: {
      user: "root",
      host: "localhost",
      password: "twekl2020",
      database: "node-authentication-knex",
      port: 3306,
    },
    migrations: {
      directory: __dirname + "/migrations",
    },
  },
};
