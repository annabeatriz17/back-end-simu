const express = require('express');
const router = express.Router();
const reportController = require("../controllers/reportController");
const apiKeyMiddleware = require("../config/apiKey"); // 🔐
router.use(apiKeyMiddleware); // 🔒 Protege todas as rotas

router.get("/pdf", reportController.exportEstudantePDF);

module.exports = router;