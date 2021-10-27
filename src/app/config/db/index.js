const mongoose = require('mongoose')

async function connect() {

    // Connection mongodb atlas info
    const URI = process.env.DB_INFO;

    try {
        await mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log(`Connected successfully :)`);
    } catch (err) {
        console.log('Connect failed :(')
    }
}

module.exports = { connect }