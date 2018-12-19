const express = require("express");
const app = express();
//rooms are declared at bottom 
var player;
var first ;
var text = "";
var $console = "";
var weapon =["axe","poison","candle stick","knife","pipe","pistol","rope"];
	var room =["study","garden","kitchen","pool","bedroom","GameRoom"];
	var people =["Mr.Green","Colonel Mustard","Mrs.Peacock","Miss Scarlet","Mrs.White","Prof Plum"];
var answer;
var start = true;
	var kroom;
	var kperson;
	var kitem;
    
	var study =
    {
		
			 "play": function()
		{
             first = true;
			console.log("we have hit the study");
            console.log($console);
         switch($console)
		{
			case"l":
				console.log("hi");
				text ="as you look around the room the walls are lined with an enumerable amount of bookshelves streching towards the celling. while among the middle of the carpeted room lie tables strewn with open books and scattered papers"
                
				break;
			case"bookshelves":
				
				text = "they seem to go all the way up to the celling, there's nothing but dust and expensive books on these shelves"
				
				break;
                
			case"desk":
			 console.log(weapon.indexOf("pistol"));
				if(weapon.indexOf("pistol")==-1)
				{
					text = "As you approach the desk you find that the drawer is open. So as you peak into the drawer you notice in the negative space created by dust there is a pistol missing!!!"
				}
				else
				{
				text = "there is a gun in the drawer"
                }
                
                break;
		case"study":
			currentroom = 1;
			break;
		case"kitchen":
			currentroom = 2;
			break;
		case"pool":
			currentroom = 4;
			break;	
		case"garden":
			currentroom = 3;
			break;
		case"gameroom":
			currentroom = 5;
			break;	
		case"bedroom":
			currentroom = 6;
			break;
                
                default:
                text = "this is not a command"
            break;
		}
          
	  }
	  }
        

    
  
const kitchen =
      {
		 "play": function()
		{
         switch($console)
		{
		case"study":
			currentroom = 1;
			break;
		case"kitchen":
			currentroom = 2;
			break;
		case"pool":
			currentroom = 4;
			break;	
		case"garden":
			currentroom = 3;
			break;
		case"gameroom":
			currentroom = 5;
			break;	
		case"bedroom":
			currentroom = 6;
			break;
		}
	  }
	  }
   
    
// rooms declared at bottom of page
    

	  
const garden =
      {
       "play": function()
		{
         switch($console)
		{
		case"study":
			currentroom = 1;
			break;
		case"kitchen":
			currentroom = 2;
			break;
		case"pool":
			currentroom = 4;
			break;	
		case"garden":
			currentroom = 3;
			break;
		case"gameroom":
			currentroom = 5;
			break;	
		case"bedroom":
			currentroom = 6;
			break;
		}
	  }
	  }
      
const pool = 
      {
        "play": function()
		{
         switch($console)
		{
		case"study":
			currentroom = 1;
			break;
		case"kitchen":
			currentroom = 2;
			break;
		case"pool":
			currentroom = 4;
			break;	
		case"garden":
			currentroom = 3;
			break;
		case"gameroom":
			currentroom = 5;
			break;	
		case"bedroom":
			currentroom = 6;
			break;
		}
	  }
	  }
const gameRoom = 
      {
        "play": function()
		{
         switch($console)
		{
		case"study":
			currentroom = 1;
			break;
		case"kitchen":
			currentroom = 2;
			break;
		case"pool":
			currentroom = 4;
			break;	
		case"garden":
			currentroom = 3;
			break;
		case"gameroom":
			currentroom = 5;
			break;	
		case"bedroom":
			currentroom = 6;
			break;
		}
	  }
	  }
const bedroom = 
      {
         "play": function()
		{
         switch($console)
		{
		case"study":
			currentroom = 1;
			break;
		case"kitchen":
			currentroom = 2;
			break;
		case"pool":
			currentroom = 4;
			break;	
		case"garden":
			currentroom = 3;
			break;
		case"gameroom":
			currentroom = 5;
			break;	
		case"bedroom":
			currentroom = 6;
			break;
		}
	  }
	  }
var currentroom;

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


app.post("/answer",(req,res) =>
        {
    if(req.body = answer )
        {
            console.log("you win!")
        }
    else{
        console.log("you have lost the game");
    }
})

app.post("/game.html",(req,res) => {
   
	$console = req.body.console;
    
	//ignore the document.ready function and anything that say document.getElementById
var player = 
	{
		"stats": 
		{
			"health":null,
			"str":10,
			"spd":10,
			"int":10,
			"fort":10
		},
		"inv":[5,12,18,4,3,2,1]
		
	};
     
    
	  function next()
    {
		
        switch(currentroom)
            {
                case 1:
                    //code
                    study.play();
                    break;
                 case 2:
                    //code
                    kitchen.play();
                    break;
                 case 3:
                    //code
					garden.play();
                    break;
                 case 4:
                    //code
					pool.play();
                    break;
                 case 5:
                    //code
					gameRoom.play();
                    break;
                 case 6:
                    //code
					bedroom.play();
                    break;
            }
    }
			
        function start()
	{
		
		kroom = room.splice(Math.floor((Math.random() * 6) + 1),1);
		kperson = people.splice(Math.floor((Math.random() * 6) + 1),1);
		kitem = weapon.splice(Math.floor((Math.random() * 7) + 1),1);
		answer = "it was" + kperson + "whith the" + kitem + "in" + kroom;
		text = "this is clue"
		console.log(answer);
		console.log(kitem);
		currentroom = 1;
        $console = "l";
        next();
	}
    
    console.log(first);
        if(!first)
            {
                console.log("in loop")
                start()
            }
     next();
	res.send(text);
	
});
   
//$post to replace page look into
app.listen(3000,() =>
{
    console.log("HERE WE GO!");
});
