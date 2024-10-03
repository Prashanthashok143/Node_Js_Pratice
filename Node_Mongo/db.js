const { mongoose } = require("mongoose");

function dbHandler(){
    mongoose
  .connect("mongodb://localhost:27017/facebook")
  .then(() => console.log("DB is connected"))
  .catch((err) => console.log(err));

}

module.exports={
    dbHandler
}