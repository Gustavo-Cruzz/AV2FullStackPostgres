# 🛡️ API de Autenticação com JWT (Node.js + Express + PostgresSQL)

Este projeto é uma aplicação backend com autenticação de usuários via **JWT**, utilizando **Node.js**, **Express** e **PostgresSQL**, seguindo uma arquitetura em camadas.

## 📁 Estrutura de Diretórios

.
├── app.js
├── controllers
├── database
├── middlewares
├── models
├── node_modules
├── package.json
├── package-lock.json
├── README.MD
├── requests
├── routes
└── services

## ⚙️ Instalação

```bash
git clone https://github.com/Gustavo-Cruzz/AV2FullStack.git
cd seu-repo
npm install

Crie um arquivo .env com os seguintes valores:

PORT=3000
MONGO_URI=mongodb://localhost:27017/backendApp
JWT_SECRET=sua_chave_secreta

## ▶️ Execução
Ambiente de desenvolvimento:

npm run dev

Ambiente de produção:

npm start

## 🧪 Testes via Terminal

A pasta requests/ contém scripts de testes automatizados com curl. Para executá-los, use:

chmod +x requests/*.sh  # (apenas uma vez para tornar executáveis)
./requests/register_success.sh

## 🔍 Lista de testes incluídos:
Teste	Arquivo
✅ Registro bem-sucedido	register_success.sh
❌ E-mail duplicado	register_email_duplicado.sh
❌ Senha inválida	register_senha_invalida.sh
❌ E-mail inválido	register_email_invalido.sh
❌ JSON mal formatado (registro)	register_mal_formatado.sh
✅ Login bem-sucedido	login_success.sh
❌ Login com e-mail não cadastrado	login_email_invalido.sh
❌ Login com senha errada	login_senha_errada.sh
❌ JSON mal formatado (login)	login_mal_formatado.sh
✅ Acesso com token válido	protected_token_valido.sh
❌ Acesso sem token	protected_sem_token.sh
❌ Acesso com token inválido	protected_token_invalido.sh
❌ Token mal formatado	protected_mal_formatado.sh

## 🧾 Licença

Este projeto está sob a licença MIT.