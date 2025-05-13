require("dotenv").config();
const express = require("express");
const cors = require("cors");

const avaliacaoRoutes = require("./src/routes/avaliacaoRoutes");
const estudanteRoutes = require("./src/routes/estudanteRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/avaliacao", avaliacaoRoutes);
app.use("/api/estudantes", estudanteRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});