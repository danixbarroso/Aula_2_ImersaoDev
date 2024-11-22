import express from "express";
import multer from "multer";
import cors from "cors";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})

// const upload = multer({dest: "./uploads"})

const routes = (app) => {
    // Cria uma instância do aplicativo Express.
    app.use(express.json());
    app.use(cors(corsOptions));
    // Define a rota GET /posts para obter todos os posts.
    app.get("/posts", listarPosts);
    // Rota para criar um novo Post
    app.post("/posts", postarNovoPost);
    app.post("/upload", upload.single("imagem"), uploadImagem);
    app.put("/upload/:id", atualizarNovoPost)
};

export default routes;
