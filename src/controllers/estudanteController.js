const EstudanteModel = require('../models/EstudanteModel');

const getAllEstudantes = async (req, res) => {
    try {
        const { numero_registro } = req.query
        const estudantes = await EstudanteModel.getEstudantes(numero_registro);
        res.json(estudantes);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar estudantes.' });
    }
};

const getEstudanteById = async (req, res) => {
    try {
        const estudant = await EstudanteModel.getEstudantesById(req.params.id);
        if (!estudant) {
            return res.status(404).json({ error: 'Estudante não encontrado.' });
        }
        res.json(estudant);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar estudante.' });
    }
}

const createEstudante = async (req, res) => {
    try {
        const { name, numero_registro, avaliacao_id } = req.body;
        const estudante = await EstudanteModel.createEstudante(name, numero_registro, avaliacao_id);
        res.status(201).json(estudante);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar o estudante." });
    }
}


const updateEstudante = async (req, res) => {
    try {
        const { name, numero_registro, avaliacao_id } = req.body;
        const estudant = await EstudanteModel.updateEstudantes(req.params.id, name, numero_registro, avaliacao_id);
        if (!estudant) {
            return res.status(404).json({ error: "Estudante não encontrado." });
        }
        res.status(200).json(estudant);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar o estudante." });
    }
}


const deleteEstudante = async (req, res) => {
    try {
        const result = await EstudanteModel.deleteEstudantes(req.params.id);
        if (result.error) {
            return res.status(404).json(result);
        }
        res.json(result);

    } catch (error) {
        console.error('Erro ao buscar estudante:', error);
        res.status(500).json({ error: 'Erro ao deletar estudante.' });
    }
}

module.exports = {getAllEstudantes, getEstudanteById, deleteEstudante, updateEstudante, createEstudante};