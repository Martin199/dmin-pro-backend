const mongoose = require('mongoose');

const dbConnection = async() => {

    try {
        await mongoose.connect('mongodb+srv://mean_user:wP8SB5wRJTBrBo9p@cluster0.aspff.mongodb.net/hospitaldb', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('db online')
    } catch (error) {
        console.log(error);
        throw new Error('error connection')
    }




}

module.exports = {
    dbConnection
}