const connection = require('../database/connection');

module.exports = {

    async index (req, res) {

        const { id } = req.params;
        const ong_id = req.headers.authorization;

        const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*');

        const ongs = await connection('ongs').select('*');
        
        return res.json({ data: incidents});
    },

}