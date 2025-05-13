const AvaliacaoModel = require("../models/AvaliacaoModel");

const getAllAvaliacaos = async (req, res) => {
    try {
        const avaliacaos = await AvaliacaoModel.getAvaliacaos();
        res.json(avaliacaos);
    } catch (error) {
        console.error("Erro ao buscar avaliacao:", error);
        res.status(500).json({ error: "Erro ao buscar avaliação." });
    }
};

const getAvaliacaoById = async (req, res) => {
    try {
        const avaliacao = await AvaliacaoModel.getAvaliacaosById(req.params.id);
        if (!avaliacao) {
            return res.status(404).json({ error: "Avaliação não encontrado." });
        }
        res.json(avaliacao);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar avaliação." });
    }
};

module.exports = { getAllAvaliacaos, getAvaliacaoById };
