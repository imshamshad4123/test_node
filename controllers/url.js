const short = require('short-uuid');
const URL = require('../models/url')
async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: 'URL is required!' });

    const shortID = short.generate();
    console.log(`shortid: ${shortID}`);

    try {
        await URL.create({
            shortID: shortID,
            redirectURL: body.url,
            visitHistory: [],
        });
        return res.json({ id: shortID });
    } catch (error) {
        console.error('Error creating URL:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}



async function analytics (req,res){
    const shortID = req.params.shortID;
    const result = await URL.findOne({shortID})

    return res.json({totalClicks: result.visitHistory.length,analytics:result.visitHistory})
}
module.exports = {
    handleGenerateNewShortURL,
    analytics,
}