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

// Find a movie document from collection
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

// Delete a movie document from collection
exports.deleteOne = async (filmObj) => {
    if(filmObj.title){
        result = await FilmModel.deleteOne({title: (filmObj.title)});
        console.log(`deleted ${result.deletedCount} item(s)`);         
    }else if(filmObj.actor){
        result = console.log(await FilmModel.deleteOne({ actor: (filmObj.actor) }));
        console.log(`deleted ${result.deletedCount} item(s)`);  
    }else{
        console.log("No document found");
    }
}

// Deleting many movie documents from collection
exports.deleteMany = async (filmObj) => {
    if(filmObj.title){
        result = await FilmModel.deleteMany({title: (filmObj.title)});
        console.log(`deleted ${result.deletedCount} item(s)`);         
    }else if(filmObj.actor){
        result = console.log(await FilmModel.deleteMany({ actor: (filmObj.actor) }));
        console.log(`deleted ${result.deletedCount} item(s)`);  
    }else{
        console.log("No document found");
    }
}

// Updating a movie document from collection
exports.updateOne = async (filmObj) => { //--update --title/etc="old"  --newtitle/etc="new value"
    if(filmObj.newtitle){
        result = await FilmModel.updateOne(
            {title: filmObj.title},{$set: {title: filmObj.newtitle}});
            console.log(`found ${result.matchedCount} item(s) modified ${result.modifiedCount} item(s)`);         
    }else if(filmObj.newactor){
        result = await FilmModel.updateOne(
            {actor: filmObj.actor},{$set: {actor: filmObj.newactor}});
        console.log(`found ${result.matchedCount} item(s) modified ${result.modifiedCount} item(s)`);   
    }else{
        console.log("No document found");
        console.log(filmObj);
    }
}

exports.deleteOne = async (filmObj) => {
    if(filmObj.title){
        result = await FilmModel.deleteOne({title: (filmObj.title)});
        console.log(`deleted ${result.deletedCount} item(s)`);         
    }else if(filmObj.actor){
        result = console.log(await FilmModel.deleteOne({ actor: (filmObj.actor) }));
        console.log(`deleted ${result.deletedCount} item(s)`);  
    }else{
        console.log("No document found");
    }
}