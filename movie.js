const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Movie12',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("mongodb connected successfully")).catch((err)=>console.log(err));

const FilmSchema=new mongoose.Schema({
    title:String,
    genre:String,
    year:Number,
    director:String

})
const Film12=mongoose.model('Film',FilmSchema);

const ActorSchema=new mongoose.Schema({
    Name:String,
    age:Number,
    film:[String]

})
const Actor12=mongoose.model('Actor',ActorSchema);

async function insertData(){
    await Film12.insertMany([
        {title:"abc",genre:"abc",year:2015,director:"abc"},
        {title:"xyz",genre:"xyz",year:2022,director:"xyz"}
    ]);
    await Actor12.insertMany([
        {Name:"lmn",age:20,film:["abc","xyz"]},
        {Name:"pqr",age:22,film:["abc","xyz"]},

    ]);
    console.log("Data inserted successfully");
    mongoose.connection.close();
}
insertData();
