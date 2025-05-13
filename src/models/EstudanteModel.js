const pool = require("../config/database");

const getEstudantes = async (numero_registro) => {
    if (!numero_registro) {
        const result = await pool.query(`
            SELECT estudante.*, avaliacao.nota AS avaliacao_nota FROM estudante LEFT JOIN avaliacao ON estudante.avaliacao_id = avaliacao.id`);
        return result.rows;
    } else {
        const result = await pool.query(
            `
            SELECT * FROM estudante WHERE CAST(numero_registro AS TEXT) ILIKE $1`,
            [`%${numero_registro}%`]
        );
        return result.rows;
    }
};

const getEstudantesById = async (id) => {
    const result = await pool.query(
        `
        SELECT estudante.*, avaliacao.nota AS avaliacao_nota FROM estudante LEFT JOIN avaliacao ON estudante.avaliacao_id = avaliacao.id WHERE estudante.id = $1`,
        [id]
    );
    return result.rows;
};

module.exports = { getEstudantes, getEstudantesById };
