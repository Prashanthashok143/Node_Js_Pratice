const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/Movies")
  .then(() => console.log("DB is connected"))
  .catch((err) => console.log(err));

  

  const movieSchema=new mongoose.Schema({
    movie:{type:String,required:true,minlength:3,maxlength:30},
    director:{type:String, required:true},
    cast:{type:Array,validate:{                    // cutsom validator
        validator:function(cast){ 
            return cast.length>1
        }
    }}
  })


const moviesModel=mongoose.model("movie",movieSchema);

async function moviesCreate(){
    const movie=new moviesModel({
        movie:"Guntur Kaaram",
        director:"Trivikram",
        cast:["MB","sreelala"]
    });
    try{
        const result=await movie.save();
        console.log(result);
        }
        catch(error){
            for(field in error.errors){
                console.log(error.errors[field])           // error validators
            }
        }
}
moviesCreate();
