const express = require('express');
const router = express.Router();

const avaliacaoController = require('../controllers/avaliacaoController.js');
const apiKeyMiddleware = require("../config/apiKey.js");

router.get('/:id', apiKeyMiddleware, avaliacaoController.getAvaliacaoById);

module.exports = router;