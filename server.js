import express from "express";

// Dados mock (testando com array em memória)
const posts = [
    {
        id: 1,
        descricao: "Uma foto de teste",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 2,
        descricao: "Um gato fofo",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 3,
        descricao: "Gatinho brincando",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 4,
        descricao: "Gato tomando sol",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 5,
        descricao: "Olhar penetrante",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 6,
        descricao: "Gato preguiçoso",
        imagem: "https://placecats.com/millie/300/150",
    }
];

// Iniciando o express e lendo json
const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id == Number(id)
    });
};

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);
});