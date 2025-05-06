const express = require('express');
const router = express.Router();
const avaliacaoController = require('../controllers/avaliacaoController.js');
const apiKeyMiddleware = require("../config/apiKey.js"); // 🔐
router.use(apiKeyMiddleware); // 🔒 Protege todas as rotas

router.get('/avaliacao/', avaliacaoController.getAllAvaliacaos);
router.get('/avaliacao/:id', avaliacaoController.getAvaliacaoById);
router.post('/avaliacao/', avaliacaoController.createAvaliacao);
router.put('/avaliacao/:id', avaliacaoController.updateAvaliacao);
router.delete('/avaliacao/:id', avaliacaoController.deleteAvaliacao);

module.exports = router;