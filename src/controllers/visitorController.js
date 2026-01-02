module.exports = {
    get: async (req,res) => {
        try {
            res.status(200).send('hello lol')
        } catch (e) {
            res.status(500).send(e)
        }
    }
}