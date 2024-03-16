
const LinkDB = require('../model/model');


// Database link save
exports.LinkSave = async (req, res) => {
    try {
        console.log(req.body);
        const link = new LinkDB(req.body); 
        data = await link.save(link);
        res.status(200).json({ data });
    } catch (error) {
        rqs.status(409).json({ msg: error.message });
    }
}

//read link on the database
exports.ReadLink = async (req, res) => {
    try {
        data = await LinkDB.find();
        res.status(200).json({ data });
    } catch (error) {
        res.status(409).json(error.message);
    }
}

