const express = require('express')
const router = express.Router();
const visitorSchema = require('../models/VisitorModel.js')


router.get('/', async (req,res) => {
    const reqId = req.query.id;
    try {
        const visitor = reqId ? await visitorSchema.findOne({id: reqId}) : null
        if (visitor) {
            return res.status(200).send(visitor)
        } else {
            return res.status(401).send('Visitor not found')
        }
    } catch (e) {
        res.status(500).send(e)
    }
});

router.post('/create', async (req,res) => {
    try {

    } catch (e) {
        res.status(500).send(e)
    }
});

router.put('/put',async (req,res) => {
    try {
        const visitor = req.body;
        const updatedVisitor = await visitorSchema.findOneAndUpdate({$or: [{email : visitor.email}, {id : visitor.id}]},visitor,{upsert:true, new: true})
        if(!updatedVisitor) {
            return res.status(500).json({message: 'Error with creating of finding user'});
        }
        return res.status(200).send(updatedVisitor)
    } catch (e) {
        res.status(500).send(e)
    }
});

module.exports = router