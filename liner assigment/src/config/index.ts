require('dotenv').config();

const dbConfig = {
  development: {
    username: 'root',
    password: process.env.MARIADB_SECRET,
    database: 'linerDB',
    host: 'localhost',
    dialect: 'mariadb',
    timestamps : true 
  },
  test: {
    username: 'root',
    password: 'password',
    database: 'sequelize',
    host: 'localhost',
    dialect: 'mariadb',
    timestamps : true 
  },
  production: {
    username: process.env.MARIADB_USER,
    password: process.env.MARIADB_PASSWORD,
    database: process.env.MARIADB_DATABASE,
    host: process.env.MARIADB_HOST,
    dialect: 'mariadb',
    timestamps : true 
  },
};

export default dbConfig;
