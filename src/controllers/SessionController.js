const connection = require('../database/connection');

module.exports = {

    async create(req, res) {
    
        const { id } = req.body ;
    
        console.log(id);
    
        const ong = await connection('ongs')
            .where('id', id)
            .select('nome')
            .first();

        if(!ong){
            return res.status(400).json({
                error: 'Ond não localizada para o ID'
            });
        }
    
        return res.json({data: ong });
    }
};
