const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
  dialectModule: require('pg'),
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, 
    }
  }
});

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
