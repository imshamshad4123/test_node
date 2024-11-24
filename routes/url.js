const express= require("express")
const {handleGenerateNewShortURL,analytics} = require('../controllers/url')
const router = express.Router();

router.post('/', handleGenerateNewShortURL)


router.get('/analytics/:shortID', analytics)
module.exports = router;


