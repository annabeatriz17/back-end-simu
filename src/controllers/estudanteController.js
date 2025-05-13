const EstudanteModel = require("../models/EstudanteModel");

const getAllEstudantes = async (req, res) => {
    try {
        const { numero_registro } = req.query;
        const estudantes = await EstudanteModel.getEstudantes(numero_registro);
        res.json(estudantes);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar estudantes." });
    }
};

const getEstudanteById = async (req, res) => {
    try {
        const estudant = await EstudanteModel.getEstudantesById(req.params.id);
        if (!estudant) {
            return res.status(404).json({ error: "Estudante não encontrado." });
        }
        res.json(estudant);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar estudante." });
    }
};

module.exports = { getAllEstudantes, getEstudanteById };
