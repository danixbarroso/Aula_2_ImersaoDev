import express from "express";
import { listarPosts } from "../controllers/postsController.js";

const routes = (app) => {
    // Cria uma instância do aplicativo Express.
    app.use(express.json());
    // Define a rota GET /posts para obter todos os posts.
    app.get("/posts", listarPosts);

};

export default routes;
