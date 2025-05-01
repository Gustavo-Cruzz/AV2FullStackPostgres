const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (name, email, password) => {
    
  const existingUser = await User.findOne({
    where: {
      email: email 
    }
  });

  if (existingUser) throw new Error('E-mail já registrado');

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ name, email, password: hashedPassword });
  await newUser.save();

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
