const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/food_api')
.then(()=>console.log('Database is connected'))
.catch(()=>console.log('database is not connected'))


const foodSchema=new mongoose.Schema({
    name:String,
    catagory:String,
    nutrition:String,
    ingrediants:String,
    manufacturer:String
})
const food=new mongoose.model('food', foodSchema);

module.exports=food;