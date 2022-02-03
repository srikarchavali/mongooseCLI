const mongoose = require('mongoose')
const FilmModel = require('./filmModal')

exports.addMovie = async(newFilm)=>{
    try {
        let movie = new FilmModel(newFilm);
        await movie.save()
        console.log("Movie created");
    } catch (error) {
        console.log(error);
    }
}