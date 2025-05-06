require("dotenv").config();
const express = require("express");
const cors = require("cors");
const avaliacaoRoutes = require("./src/routes/avaliacaoRoutes");
const estudanteRoutes = require("./src/routes/estudanteRoutes");
const reportRoutes = require("./src/routes/reportRoutes");

const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api", avaliacaoRoutes);
app.use("/api", estudanteRoutes);
app.use("/api", reportRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});