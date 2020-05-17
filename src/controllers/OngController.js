const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {

    async index (req, res) {
        const ongs = await connection('ongs').select('*');
        
        return res.json({ data: ongs});
    },


    async create(req, res) {
        const body = req.body;
        const {nome, email, whatsapp, city, uf } = req.body ;

        const id = crypto.randomBytes(12).toString('HEX');
        console.log(body);

        await connection('ongs').insert({
            id: id,
            nome: req.body.nome,
            email: req.body.email,
            whatsapp: req.body.whatsapp,
            city: req.body.city,
            uf: req.body.uf,
        })

        console.log('cheguei aqui')
        return res.json({data: id });
    }


};