const Movie = require ('../models/Movies');
const movieService = {};

movieService.getMovies = async (req, res) => {
    await Movie.find((err, movies) => {
        if(err) { return console.log(err); }
        Movie.find({ rating: 0}, (e, moviesRecommended) => {
            if(e) { return console.log(e); }
            res.render('index', { title: 'Home', mv: movies, mvRecommended: moviesRecommended});
        });
        
    });
}

movieService.addMovie =  async (req, res) => {
    const movie = new Movie({
        name: req.body.name,
        genre: req.body.genre,
        year: req.body.year
    });
    await movie.save((err, mv) =>{
        if(err) { return console.log(err); }
        res.redirect('/');
    });
}

movieService.editMovie = async (req, res) => {
    await Movie.findById(req.params.id, (err, movie) => {
        if(err) { return console.log(err); }
        res.render('edit', { title: 'Edit Movie', mv: movie, action: '/edit/' + movie._id });
    });
}

movieService.updateMovie = async (req, res) => {
    const id =  req.params.id;
    const movie = {
        name: req.body.name,
        genre: req.body.genre,
        year: req.body.year
    };
    await Movie.findByIdAndUpdate(id, {$set: movie}, {new: true}, (err, doc) => {
        if(err) { return console.log(err); }
        res.redirect('/');
    });    
}

// movieService.getMovie = async (req, res) => {
//     const movie = await Movie.findById(req.params.id);
//     res.json(movie);
// }

movieService.deleteMovie = async (req, res) => {
    await Movie.findByIdAndRemove(req.params.id, (err, doc) => {
        if(err) { return console.log(err); }
        res.redirect('/')
    });
}

movieService.getRatingMovie = async (req, res) => {
    await Movie.findById(req.params.id, (err, movie) => {
        if(err) { return console.log(err); }
        res.render('rating', { title: 'Rating Movie', mv: movie, action: '/rating/' + movie._id });
    });
}

movieService.setRatingMovie = async (req, res) => {
    const id =  req.params.id;
    const rate = {
        rating: req.body.rating
    };
    await Movie.findByIdAndUpdate(id, {$set: rate}, {new: true}, (err, doc) => {
        if(err) { return console.log(err); }
        res.redirect('/');
    });
}

module.exports = movieService;