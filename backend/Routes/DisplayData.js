const express = require('express');
const router = express.Router();

router.post('/movieData', (req, res) => {
    try {
        res.send([global.movie_items, global.movie_cats]);
    }
    catch(err) {
        console.error(err.message);
        res.send('Server Error');
    }
})

module.exports = router;