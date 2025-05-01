const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (name, email, password) => {

  // --- Validação de E-mail ---
  if (!email || typeof email !== 'string' || email.trim() === '') {
    throw new Error('O campo e-mail é obrigatório.');
  }
  // Remove espaços extras e converte para minúsculas para consistência
  const normalizedEmail = email.trim().toLowerCase();

  if (!normalizedEmail.includes('@') || !normalizedEmail.includes('.')) {
    throw new Error('Por favor, insira um formato de e-mail válido.');
  }

  // --- Validação de Senha ---
  if (!password || typeof password !== 'string' || password.trim() === '') {
    throw new Error('O campo senha é obrigatório.');
  }

  const existingUser = await User.findOne({
    where: {
      email: normalizedEmail 
    }
  });

  if (existingUser) {
    throw new Error('Este e-mail já está registrado.');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    name: name, 
    email: normalizedEmail, 
    password: hashedPassword
  });

  return newUser;
};

const login = async (email, password) => {
  const user = await User.findOne({
    where: {
      email: email 
    }
  });

  if (!user) throw new Error('Usuário não encontrado');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Senha incorreta');

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
};

module.exports = { register, login };
