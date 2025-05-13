const pool = require("../config/database");

const getAvaliacaos = async () => {
    const result = await pool.query("SELECT * FROM avaliacao");
    return result.rows;
};

const getAvaliacaosById = async (id) => {
    const result = await pool.query("SELECT * FROM avaliacao WHERE id = $1", [id]);
    return result.rows[0];
};

module.exports = { getAvaliacaos, getAvaliacaosById };
