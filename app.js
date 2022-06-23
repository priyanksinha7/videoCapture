const express=require("express");
const cors=require("cors");
const app=express();
const ejs=require("ejs");
const path=require("path");
path.join(__dirname,"views");
app.set('view engine', 'ejs');

app.use(cors());
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.get('/',(req,res)=>
{
    res.render('index.html');
})

app.listen(4000,()=>
{
    console.log("listening to 4000!");
})