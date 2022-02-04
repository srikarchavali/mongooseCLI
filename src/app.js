require('./db/connection');
const mongoose = require('mongoose')
const yargs = require('yargs/yargs');
const {hideBin} = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv;
const {addMovie, list, findOne} = require('./film/filmMethods');



const app = async() => {
    if(argv.add){
        await addMovie({
            title: argv.title,
            actor: argv.actor
        })
    }else if(argv.list){
        console.log('list');
        await list();
    }else if(argv.findone){
        await findOne({
            title: argv.title,
            actor: argv.actor
        })
    }else{
        console.log("wrong command");
    }
    mongoose.connection.close()
}

app()