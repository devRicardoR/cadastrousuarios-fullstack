import express from 'express';
import cors from 'cors'
import { PrismaClient } from './generated/prisma/index.js';

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3000;

app.post('/usuarios', async (req, res) => {
    try {
        const user = await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        },
        });
        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
});

app.get('/usuarios', async (req, res) => {
    try {
        const { name, email, age } = req.query;

        const users = await prisma.user.findMany({
            where: {
                ...(name && { name }),
                ...(email && { email }),
                ...(age && { age }),
            }
        });

        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar usuários!" });
    }
});

app.put('/usuarios/:id', async (req, res) => {
    try {
        const user = await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age,
        },
        });
        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
});

app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id,
        },
    })
    
    res.status(200).json({ message: "Usuário deletado com sucesso!" })
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`);
});