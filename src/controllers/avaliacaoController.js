const AvaliacaoModel = require('../models/AvaliacaoModel');

const getAllAvaliacaos = async (req, res) => {
    try {
        const avaliacaos = await AvaliacaoModel.getAvaliacaos();
        res.json(avaliacaos) 
    } catch (error) {
        console.error('Erro ao buscar avaliacao:', error);
        res.status(500).json({ error: 'Erro ao buscar avaliação.' });
    }
}

const getAvaliacaoById = async (req, res) => {
    try {
        const avaliacao = await AvaliacaoModel.getAvaliacaosById(req.params.id);
        if (!avaliacao) {
            return res.status(404).json({ error: 'Avaliação não encontrado.' });
        }
        res.json(avaliacao);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar avaliação.' });
    }
}
const createAvaliacao = async (req, res) => {
    try {
        const { nota, professor } = req.body;
        const newAvaliacao = await AvaliacaoModel.createAvaliacao( nota, professor );
        res.status(201).json(newAvaliacao);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar avaliação.' });
        
    }
}

const updateAvaliacao = async (req, res) => {
    try {
        const { nota, professor } = req.body;  
        const avaliacao = await AvaliacaoModel.updateAvaliacao(req.params.id, nota, professor);
        if (!avaliacao) {
            return res.status(404).json({ error: 'Avaliação não encontrada.' });
        }
        res.json(avaliacao);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao editar avaliação.' });
    }
};

const deleteAvaliacao = async (req, res) => {
    try {
        const result = await AvaliacaoModel.deleteAvaliacao(req.params.id);
        if (result.error) {
            return res.status(404).json(result);
        }
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar avaliação.' });
    }
}

module.exports = { getAllAvaliacaos, getAvaliacaoById, createAvaliacao, updateAvaliacao, deleteAvaliacao };