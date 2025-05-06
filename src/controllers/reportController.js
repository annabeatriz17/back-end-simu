const PDFDocument = require("pdfkit");

const EstudanteModel = require("../models/EstudanteModel");

const AvaliacaoModel = require("../models/AvaliacaoModel");

const exportEstudantePDF = async (req, res)=> {
    try {
        const estudantes = await EstudanteModel.getEstudantes();
        const avaliacaos = await AvaliacaoModel.getAvaliacaos();

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "inline; filename=estudantes.pdf");

        const doc = new PDFDocument();
        doc.pipe(res);

        //titulo
        doc.fontSize(30).text("Relatorio de Estudantes", {align: "center"});
        doc.moveDown();

        //cabeçalho
        doc.fontSize(18).text("Id | Nome | Numero Registro", {underline: true});
        doc.moveDown(0.5);

        // add dados estudantes
        estudantes.forEach((estudantes) => {
            doc.text(
                `${estudantes.id} | ${estudantes.name} | ${estudantes.numero_registro}`,
            )
        });

        doc.fontSize(18).text("______________________________", {underline: true});
        doc.moveDown(0.5);

         //titulo
         doc.fontSize(30).text("Relatorio de Avaliações", {align: "center"});
         doc.moveDown();
 
         //cabeçalho
         doc.fontSize(18).text("Id | Nota | Professor", {underline: true});
         doc.moveDown(0.5);
 
         // add dados avaliacao
         avaliacaos.forEach((avaliacaos) => {
             doc.text(
                 `${avaliacaos.id} | ${avaliacaos.nota} | ${avaliacaos.professor}`,
             )
         });
        doc.end();
    } catch (error) {
        res.status(500).json({message: "erro ao gerar o PDF"})
    }
}

module.exports = {exportEstudantePDF}