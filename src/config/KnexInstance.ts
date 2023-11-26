const knexInstance = {
  client: "postgresql",
  connection: {
    // connectionString: process.env.DB_URL,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
  },
};

export default knexInstance;