const mongoose = require('mongoose');
const { filmObj } = require('yargs');
const FilmModel = require('./filmModal')

exports.addMovie = async(filmObj)=>{
    try {
        let movie = new FilmModel(filmObj);
        await movie.save()
        console.log("Movie created");
    } catch (error) {
        console.log(error);
    }
}

exports.list = async ()=>{
    try {
        console.log(await FilmModel.find({}));
    } catch (error) {
        console.log(error);
    }
}

exports.findOne = async (filmObj) => {
    if(filmObj.title){
        const result = await FilmModel.findOne({title: (filmObj.title)});
        console.log(result); 
    }else if(filmObj.actor){
        console.log(await FilmModel.findOne({ actor: (filmObj.actor) })); 
    }else{
        console.log("No document found");
    }
}