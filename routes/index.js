var express = require('express');
var router = express.Router();

const movie = require('../services/movies.services');

router.get('/new', (req, res) => {
    res.render('new', {title: 'New Movie'});
});

router.post('/', movie.addMovie);
router.get('/edit/:id', movie.editMovie);
router.post('/edit/:id', movie.updateMovie);
router.get('/:id', movie.getMovie);
router.get('/', movie.getMovies);
router.get('/delete/:id',movie.deleteMovie);
router.get('/rating/:id',movie.getRatingMovie);
router.post('/rating/:id',movie.setRatingMovie);

module.exports = router;
