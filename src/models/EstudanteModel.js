const pool = require("../config/database");

const getEstudantes = async (numero_registro) => {
    if (!numero_registro) {
        const result = await pool.query(`
            SELECT estudante.*, avaliacao.nota AS avaliacao_nota FROM estudante LEFT JOIN avaliacao ON estudante.avaliacao_id = avaliacao.id`);
        return result.rows;
    } else {
        const result = await pool.query(`
            SELECT * FROM estudante WHERE CAST(numero_registro AS TEXT) ILIKE $1` , [`%${numero_registro}%`]);
        return result.rows;
    }
};

const getEstudantesById = async (id) => {
    const result = await pool.query(`
        SELECT estudante.*, avaliacao.nota AS avaliacao_nota FROM estudante LEFT JOIN avaliacao ON estudante.avaliacao_id = avaliacao.id WHERE estudante.id = $1`, [id]);
    return result.rows;
};

const createEstudante = async (name, numero_registro, photo, avaliacao_id) => {
    const result = await pool.query(`
        INSERT INTO estudante (name, numero_registro, photo, avaliacao_id) VALUES ($1, $2, $3, $4) RETURNING *`, [name, numero_registro, photo, avaliacao_id]);
    return result.rows[0];
};

const updateEstudantes = async ( id, name, numero_registro, avaliacao_id, photo) => {
    const result = await pool.query(`
        UPDATE estudante SET name = $1, numero_registro = $2, avaliacao_id = $3, photo = $4  WHERE id = $5 RETURNING *`, [name, numero_registro, avaliacao_id, photo, id]);
        if (result.rowCount === 0) {
            return { error: "Estudante não encontrado." };
        }
        return result.rows[0];
};

const deleteEstudantes = async (id) => {
    const result = await pool.query(`
        DELETE FROM estudante WHERE id = $1 RETURNING *`, [id]);
    if (result.rowCount === 0) {
        return { error: "Estudante não encontrado." };
    }
    return { message: "Estudante deletado com sucesso." };
};

module.exports = { getEstudantes, getEstudantesById, createEstudante, updateEstudantes, deleteEstudantes };