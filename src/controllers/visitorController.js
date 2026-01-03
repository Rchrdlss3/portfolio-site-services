const visitorSchema = require('../models/VisitorModel');

module.exports = {
    get: async (req,res) => {
        const reqId = req.query.id;
        try {
            const visitor = reqId ? await visitorSchema.findOne({id: reqId}) : null
            if (visitor) {
                return res.status(200).json(visitor)
            } else {
                return res.status(404).json('Visitor not found')
            }
        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    },
    post: async (req,res) => {
        const visitor = req.body;
        console.log(req.body)
        try {
            if (await visitorSchema.findOne({$or: [{email : visitor.email}, {id : visitor.id}]})) {
                return res.status(409).json('Visitor already exists')
            }
            const newVisitor = await visitorSchema.insertOne(visitor)
            if (newVisitor) {
                return res.status(201).json('Visitor created')
            } else {
                return res.status(400).json('Error in creating new visitor')
            }
        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    },
    put: async (req,res) => {
        const visitor = req.body;
        try {
            const updatedVisitor = await visitorSchema.findOneAndUpdate(
                {$or: [{email : visitor.email}, {id : visitor.id}]},
                visitor,
                {upsert:true, new: true, omitUndefined: true}
            )
            if(!updatedVisitor) {
                return res.status(500).json({message: 'Error with creating of finding user'});
            }
            return res.status(200).send(updatedVisitor)
        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    }
}