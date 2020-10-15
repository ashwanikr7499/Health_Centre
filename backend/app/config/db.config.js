module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "ashu",
  DB: "db_ashwani",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
