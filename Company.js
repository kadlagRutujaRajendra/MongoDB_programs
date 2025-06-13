const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017',{
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(()=>console.log("momgodb connected")).catch((err)=>console.log(err));

const productSchema=new mongoose.Schema({
    c_name:String,
    p_name:String,
    Category:String
});
const Product=mongoose.model("Product",productSchema);

const serviceSchema=new mongoose.Schema({
    c_name:String,
    s_name:String,
    info:String
});
const Service=mongoose.model("Service",serviceSchema);

async function insertData(){
    await Product.insertMany([
        {c_name:"TCS",p_name:"abc",Category:"abc"},
        {c_name:"TCS",p_name:"lmn",Category:"lmn"}
    ]);
    await Service.insertMany([
        {c_name:"abc",s_anme:"abc",info:"abc"},
        {c_name:"lmn",s_anme:"abc",info:"abc"}
    ]);
    console.log("Data inserted successfully");
}

async function find(){
    const TCSlist=await Product.find({c_name:"TCS"});
    console.log("TCS companies are",TCSlist);
    mongoose.connection.close();
}
async function main(){
    await insertData();
    await find();
}
main();