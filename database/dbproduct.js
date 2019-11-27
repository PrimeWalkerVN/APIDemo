let Product = require('../models/product');
let mongoose = require('mongoose');

const DB_URI= "mongodb+srv://guest:333333@cluster0-2c3f8.mongodb.net/testapi?retryWrites=true&w=majority";
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('connected to database'));
let done=0;

//============================Add data area===================================

let milkTea = [
    new Product ({
        name: "trasua",
        price: 30000,
        imagePath: "test"
    })
];  

for(let i = 0; i < milkTea.length; i++){
    // Save the new model instance, passing a callback
    milkTea[i].save(function (err,result) {
        if(err) next();
        done++;
        if(done===milkTea.length)
          exit();
     });
}
done = 0;

////============================ End add data area===================================


//Disconnect database
function exit()
{
    mongoose.disconnect(); // saved!
}
