import { getTodosPosts } from "../models/postModel.js";

export async function listarPosts(req, res) {
    // Chama a função getTodosOsPosts para obter todos os posts do banco de dados.
    const posts = await getTodosPosts();
    // Define o status da resposta como 200 (OK) e envia os posts como JSON na resposta.
    res.status(200).json(posts);
}