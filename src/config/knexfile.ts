import type { Knex } from "knex";
import path from "path";

// Update with your config settings.

const configg: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql",
    connection: {
      // connectionString: process.env.DB_URL || "localhost",
      database: process.env.DB_NAME || "car-management_db",
      user: process.env.DB_USER || "postgres",
      password: process.env.DB_PASS || "postgres",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: path.join(__dirname, "migrations"),
      tableName: "knex_migrations",
    },
    seeds: {
      directory: path.join(__dirname, "seeds"),
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "car-management_db",
      user: "postgres",
      password: "postgres",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};

module.exports = configg;
