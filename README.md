# Projeto Full Stack Básico – CRUD de Usuários

Projeto Full Stack desenvolvido com React, Node.js, Express e Prisma ORM, que permite criar, listar, atualizar e deletar usuários.

O objetivo é demonstrar habilidades em desenvolvimento web completo, integração entre frontend e backend e boas práticas no consumo e criação de APIs REST.

---

## Tecnologias Utilizadas

### Frontend

- React  
- Axios  
- CSS / Tailwind CSS (ou outro estilo utilizado)  
- Vite ou Create React App  

### Backend

- Node.js  
- Express  
- Prisma ORM  
- SQLite (ou outro banco configurado)  
- CORS  

---

## Estrutura do Projeto

/project-root
├── frontend/
│ ├── src/
│ ├── package.json
│ └── ...
├── backend/
│ ├── prisma/
│ ├── generated/
│ ├── index.js
│ └── package.json
└── README.md


---

## Como Rodar o Projeto

### 1. Clonar o repositório

git clone https://github.com/devRicardoR/cadastro-usuario-nodejs-react.git
cd cadastro-usuario-nodejs-react


### 2. Instalar as dependências

#### Backend

cd backend
npm install


#### Frontend

cd ../frontend
npm install


### 3. Configurar o banco de dados

Gerar o cliente Prisma e criar o banco local:

cd backend
npx prisma generate
npx prisma migrate dev --name init


### 4. Rodar o backend

npm start


Servidor disponível em:

http://localhost:3000


### 5. Rodar o frontend

Em outro terminal:

cd frontend
npm run dev


Aplicação disponível em:

http://localhost:5173


(Ou conforme indicado no terminal)

---

## Funcionalidades Principais

- Criar novo usuário  
- Listar todos os usuários  
- Atualizar informações de um usuário  
- Deletar usuário  
- Integração completa com API REST utilizando Axios  

---

## Exemplo de Requisição POST

```json
{
  "name": "Ricardo Cesar",
  "email": "ricardo@email.com",
  "age": 27
}
