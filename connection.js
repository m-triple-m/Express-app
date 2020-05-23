const mongoose = require('mongoose');

const con_url = "mongodb://localhost:27017/mydb";

mongoose.connect(con_url, { useNewUrlParser : true, useUnifiedTopology: true })
.then( () => {
    console.log('Connection Successfull');
})
.catch( (err) => {
    console.error(err);
});


module.exports = mongoose