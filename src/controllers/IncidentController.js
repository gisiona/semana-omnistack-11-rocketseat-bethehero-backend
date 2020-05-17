const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {

    async index (req, res) {

        const { page = 1 } = req.query;
        const limitPage = 5;

        const [count] = await connection('incidents').count();
        console.log('Total de incidentes: ' + count['count(*)']);

        const data = await connection('incidents')
            .join('ongs', 'ong_id', '=', 'incidents.ong_id')
            .limit(limitPage)
            .offset((page - 1) * limitPage)
            .select(['incidents.*',
                    'ongs.nome',
                    'ongs.email',
                    'ongs.whatsapp',
                    'ongs.city',
                    'ongs.uf'      
                    ]);

        res.header('x-total-count', count['count(*)'])
        
        return res.json( data );
    },

    async delete (req, res) {

        const { id } = req.params;
        const ong_id = req.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();
        
        console.log(id);
        console.log(incident.ong_id);
        console.log(ong_id);

        if(incident.ong_id != ong_id){
            console.log('Ong não localizada no banco de dados');

            return res.status(401).json({ error: "Operação não permitida." })
        }
        
        await connection('incidents').where('id', id).delete();

        return res.status(204).send();
    },

    async create(req, res){
        const { title, description, value } = req.body;

        const ong_id = req.headers.authorization;

        console.log(ong_id);
        console.log(req.body);

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return res.json({ data: id })
    }
}