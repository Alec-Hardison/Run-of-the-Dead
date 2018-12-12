const express = require("express");
const app = express();
//rooms are declared at bottom 
var player;
app.use(express.json());
app.use(express.static('public'));


app.get("/",(req,res)=>
       {
    res.send("yo");
});

app.post("/character",(req,res)=>
        {
    console.log(req.body);
    player = req.body;
    console.log(player.stats.str);
    res.send(player);
});

app.post("/game.html",(req,res) => {
     console.log(req.body);
    res.send(player);
});
   
//$post to replace page look into
app.listen(3000,() =>
{
    console.log("HERE WE GO!");
});
const room1 =
    {
    
    }

const room2 =
      {
    
      }

const room3 =
      {
          
      }
const room4 = 
      {
          
      }
const room5 = 
      {
          
      }
const room6 = 
      {
          
      }
const room7 = 
      {
          
      }
const room8 = 
      {
          
      }
const room9 = 
      {
          
      }
const room10 = 
      {
          
      }
const room11 = 
      {
          
      }
const room12 = 
      {
          
      }