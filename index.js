const express = require("express")
const urlRoute = require('./routes/url')
const url = require('./models/url')
require('dotenv').config();
const mongo_uri = process.env.MONGO_URI;
const { connectToMongoDB } = require('./connect')
const app = express();
// app.use(cors())
app.use(express.json())
const PORT = 8001;


connectToMongoDB(mongo_uri).then(() => {
    console.log('Mongodb connected')
})

app.use('/url', urlRoute);

app.get('/:shortID', async (req, res) => {
    const shortID = req.params.shortID;
    const entry = await url.findOneAndUpdate({ shortID }
        , {
            $push:
                { visitHistory: {timestamp:Date.now()},}
        })
    res.redirect(entry.rediectURL)
        
})
app.listen(PORT, () => { console.log(`Server started at PORT:${PORT}`) })


// dtWX1nqchGPZyekXJSesdZ

// 955Wik467pBaqas3ALp7b8