const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.POSTGRES_DATABASE, 
  process.env.POSTGRES_USER,     
  process.env.POSTGRES_PASSWORD, 
  {
    host: process.env.POSTGRES_HOST,
    port: 5432,                     
    dialect: 'postgres',
    logging: false,
    dialectModule: require('pg')
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com PostgreSQL estabelecida');
  } catch (err) {
    console.error('Erro ao conectar ao PostgreSQL:', err);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };
