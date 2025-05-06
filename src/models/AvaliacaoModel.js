const pool = require("../config/database");

const getAvaliacaos = async () => {
    const result = await pool.query("SELECT * FROM avaliacao");
    return result.rows;
};

const getAvaliacaosById = async (id) => {
    const result = await pool.query("SELECT * FROM avaliacao WHERE id = $1", [id]);
    return result.rows[0];
};

const createAvaliacao = async (nota, professor, photo) => {
    const result = await pool.query(
        "INSERT INTO avaliacao (nota, professor, photo) VALUES ($1, $2, $3) RETURNING *",
        [nota, professor, photo]
    );
    return result.rows[0];
};

const updateAvaliacao = async (id, nota, professor, photo) => {
    const result = await pool.query(
        "UPDATE avaliacao SET nota = $1, professor = $2, photo = $3 WHERE id = $4 RETURNING *",
        [nota, professor, photo, id]
    );
    return result.rows[0]; 
};
    

const deleteAvaliacao = async (id) => {
    const result = await pool.query("DELETE FROM avaliacao WHERE id = $1 RETURNING *", [id]);

    if (result.rowCount === 0) {
        return { error: "Avaliação não encontrada." };
    }
    return { message: "Avaliação deletada com sucesso." };
};

module.exports = { getAvaliacaos, getAvaliacaosById, createAvaliacao, updateAvaliacao, deleteAvaliacao };