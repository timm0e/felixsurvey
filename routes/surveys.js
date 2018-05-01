const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.render('surveys');
});

router.get('/:id', (req, res) => {
    res.render('surveys/answer');
});

module.exports = router;