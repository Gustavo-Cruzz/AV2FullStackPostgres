const express = require('express');
require('dotenv').config();
const { connectDB, sequelize } = require('./database/sequelize');

const authRoutes = require('./routes/authRoutes');
const protectedRoutes = require('./routes/protectedRoutes');

const app = express();
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', protectedRoutes);

const PORT = process.env.PORT || 3000;

connectDB().then(async () => {
  // Cria as tabelas se não existirem
  await sequelize.sync();
  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
});
