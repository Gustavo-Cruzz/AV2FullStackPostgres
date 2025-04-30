const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (name, email, password) => {
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) throw new Error('E-mail já registrado');

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashedPassword });
  return user;
};

const login = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user) throw new Error('Usuário não encontrado');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Senha incorreta');

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
};

module.exports = { register, login };
