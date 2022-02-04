require('./db/connection');
const mongoose = require('mongoose')
const yargs = require('yargs/yargs');
const {hideBin} = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv;
const {addMovie, list, findOne, deleteOne, deleteMany, updateOne} = require('./film/filmMethods');

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
    }else if(argv.deleteone){
        await deleteOne({
            title: argv.title,
            actor: argv.actor
        })
    }else if(argv.deletemany){
        await deleteMany({
            title: argv.title,
            actor: argv.actor
        })
    }else if(argv.updateone){
        await updateOne(argv)
    }    
    else{
        console.log("wrong command");
    }
    mongoose.connection.close()
}

app()