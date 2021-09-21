const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,   
})

const conn = mongoose.connection;
conn.on("error", console.error.bind(console,"Error in connecting Database!"));
conn.once("open", ()=>{
    console.log("Database Connected!");
})


module.exports = conn;