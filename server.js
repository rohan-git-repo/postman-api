const express=require('express');
const app=express();
const cors=require('cors')
const port=3600;
app.use(cors());
const food=require('./database');
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('<h1>WELCOME TO API CREATION </h1> <h2><a href="./getdata" target="_blank" >Show Data</a></h2>')
})

//Read Operation

app.get('/getdata',async (req,res)=>{
try{
const get=await food.find({});
res.status(201).send(get)
}
catch(e){
    console.log(e);
}
})

//Create Operation

app.post('/food',async (req,res)=>{
    try{
        console.log('req.body',req.body);
        const Record=new food(req.body);
        console.log('adding Record',Record);
        const insertData=await Record.save();
        console.log(insertData);
        res.status(201).send(insertData)

    }
    catch(e){
        console.log(e);
    }
})

//Update Operation
const updateBurger = async (req, res) => {
    const updatedData = req.body;
    try {
      const updatedBurger = await food.findOneAndUpdate(
        { $set: { ingrediants: updatedData.ingrediants } },
        { new: true }
      );
      if (updatedBurger) {
        console.log("Ingredients updated successfully!");
      } else {
        console.log("not found.");
      }
    } catch (e) {
      console.log(e);
    }
  };


app.put("/update",updateBurger);

app.listen(port,()=>{
    console.log(`serevr is listening at port number ${port}`);
})
