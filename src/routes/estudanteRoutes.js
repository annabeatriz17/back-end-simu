const express = require('express');
const router = express.Router();

const estudanteController = require("../controllers/estudanteController");
const apiKeyMiddleware = require("../config/apiKey");

router.get("/", estudanteController.getAllEstudantes);
router.get("/:id", apiKeyMiddleware, estudanteController.getEstudanteById);

module.exports = router;