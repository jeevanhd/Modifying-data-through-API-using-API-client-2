const mongoose = require('mongoose');

const ConnectDB = async () => { 
    try {
        await mongoose.connect('mongodb://localhost:27017/menu', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('MongoDB Connected...');
    }
    catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = ConnectDB;