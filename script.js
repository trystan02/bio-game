const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

function clearwindow(color){
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 900, 700);
}


//images
const RedBloodCellimg=document.getElementById("rbc");
const TriAntigenimg=document.getElementById("tag");
const CirAntigenimg=document.getElementById("cag");
const SquAntigenimg=document.getElementById("sag");
const nkcellimg=document.getElementById("nk");
const bloodwallimg=document.getElementById("bw");
const infectedcellimg=document.getElementById("irbc");
const phagoimg=document.getElementById("phago");
const pathogenimg=document.getElementById("pathogen");
const pathogenrimg=document.getElementById("pathogenr");
const helpertimg=document.getElementById("helpert");
const killertimg=document.getElementById("killert");
const antibodyimg=document.getElementById("antibody");



let level=0
let started=0
let lose_message=""

function lose(message){
	
	lose_message=message
	level=-1
}

document.addEventListener("keydown", KeyDownHandler, false);
document.addEventListener("keyup", KeyUpHandler, false);


function KeyDownHandler(e){
	if(level==0 && started==0){
		if(e.key=="b"){started=1;
			current_antigen= Math.floor(Math.random()*3)
		
		
		for (let i=0;i<5;i++){
cellslist.push(new idenifyable_cell (current_antigen,100));
}
		if(current_antigen==2){
	cellslist.push(new idenifyable_cell (0,100));
			pathogenantigen=0
	}
	else if(current_antigen==1){
	cellslist.push(new idenifyable_cell (2,100));
  pathogenantigen=2
	}
	else if(current_antigen==0){
	cellslist.push(new idenifyable_cell (1,100));
  pathogenantigen=1
	}

	}
	}
	if(level==0 && started==1){
		if(e.key=="p"){if(curentcell.antigen==current_antigen){

		if(cellslist.length>0){
			cellslist.shift()
		}	
		}
	else{lose("You let a cell with the wrong antigen throught");}
	}
	if(e.key=="s"){if(curentcell.antigen==current_antigen){lose("You killed a freindly cell with your antigen");
	
		}
	else{
		if(cellslist.length>0){
			cellslist.shift()
      level=1
    started=0
		}	}
	}
}
  if(level==1 && started==0){
    if(e.key=="b"){started=1}
    for(let i=0;i<10;i++){
      infectedcellslist.push(new infectedcell((Math.floor(Math.random()*1900)+50),(Math.floor(Math.random()*900)+50)))
    }
  }

  if(level==1 && started==1){
    if(e.key=="w"){
      if(leveltwomy+10<300){leveltwomy+=10
      }}

    if(e.key=="a"){
      if(leveltwomx+10<400){leveltwomx+=10
        }}
    if(e.key=="s"){
      if(leveltwomy+leveltwohegiht-10>400){leveltwomy-=10
        }}
    if(e.key=="d"){
        if(leveltwomx+leveltwowidth-10>500){leveltwomx-=10
          }}
    if(e.key=="q"){
      ctx.beginPath();
      for(i in infectedcellslist){

        if(infectedcellslist[i].rx+leveltwomx>300 && infectedcellslist[i].rx+leveltwomx<600){
          if(infectedcellslist[i].ry+leveltwomy>200 && infectedcellslist[i].ry+leveltwomy<500){

          infectedcellslist.splice(i, 1);
          leveltwoscore+=1
        }}
      }
    }
  }

  if(level==2 && started==0){
    if(e.key=="b"){started=1}
    for(let i=0;i<15;i++){
      infectedcellslist2.push(new infectedcell2((Math.floor(Math.random()*1900)+50),(Math.floor(Math.random()*900)+50)))
    }
  }
  
  if(level==2 && started==1){
    if(e.key=="w"){
      if(levelthreemy+10<300){levelthreemy+=10
      }}

    if(e.key=="a"){
      if(levelthreemx+10<400){levelthreemx+=10
        }}
    if(e.key=="s"){
      if(levelthreemy+levelthreehegiht-10>400){levelthreemy-=10
        }}
    if(e.key=="d"){
        if(levelthreemx+levelthreewidth-10>500){levelthreemx-=10
          }}
    
  }
  if(level==3 && started==0){
    if(e.key=="b"){started=1}
    for(let i=0;i<10;i++){
      infectedcellslist2.push(new infectedcell2((Math.floor(Math.random()*1900)+50),(Math.floor(Math.random()*900)+50)))
    }
    rement=new pathogenrement(1900,900)
    if(pathogenantigen==0){
      rement.antigenpic=SquAntigenimg
    }
    else if(pathogenantigen==1){
      rement.antigenpic=TriAntigenimg
    }
    else if(pathogenantigen==2){
      rement.antigenpic=CirAntigenimg
    }
  
  }

  
  if(level==3 && started==1){
    if(e.key=="w"){
      if(levelfourmy+10<300){levelfourmy+=10
      }}

    if(e.key=="a"){
      if(levelfourmx+10<400){levelfourmx+=10
        }}
    if(e.key=="s"){
      if(levelfourmy+levelfourhegiht-10>400){levelfourmy-=10
        }}
    if(e.key=="d"){
        if(levelfourmx+levelfourwidth-10>500){levelfourmx-=10
          }}
    
  }

  if(level==4 && started==0){
    if(e.key=="b"){started=1
    for(let i=0;i<10;i++){
      tops.push(new option((Math.floor(Math.random()*1900)+50),(Math.floor(Math.random()*200)+50)))
      a=Math.floor(Math.random()*3)
    
    if(a==0){
      tops[i].antigenpic=SquAntigenimg
      tops[i].antigen=0
    }
    else if(a==1){
      tops[i].antigenpic=TriAntigenimg
      tops[i].antigen=1
    }
    else if(a==2){
      tops[i].antigenpic=CirAntigenimg
      tops[i].antigen=2
    }}
    console.log(pathogenantigen)
    if(pathogenantigen==0){
      tops[9].antigenpic=SquAntigenimg
      tops[9].antigen=0
    }
    else if(pathogenantigen==1){
      tops[9].antigenpic=TriAntigenimg
      tops[9].antigen=1
    }
    else if(pathogenantigen==2){
      tops[9].antigenpic=CirAntigenimg
      tops[9].antigen=2
  }}}
  
  if(level==4 && started==1){
    if(e.key=="w"){
      if(levelfivemy+10<300){levelfivemy+=10
        console.log("h")
      }}

    if(e.key=="a"){
      if(levelfivemx+10<400){levelfivemx+=10
        }}
    if(e.key=="s"){
      if(levelfivemy+levelfivehegiht-10>400){levelfivemy-=10
        }}
    if(e.key=="d"){
        if(levelfivemx+levelfivewidth-10>500){levelfivemx-=10
          }}
    
  }

  if(level==5 && started==0){
    if(e.key=="b"){started=1}
    for(let i=0;i<10;i++){
      infectedcellslist6.push(new infectedcell6((Math.floor(Math.random()*1900)+50),(Math.floor(Math.random()*900)+50)))
    }
  }

  if(level==5 && started==1){
    if(e.key=="w"){
      if(levelsixmy+10<300){levelsixmy+=10
      }}

    if(e.key=="a"){
      if(levelsixmx+10<400){levelsixmx+=10
        }}
    if(e.key=="s"){
      if(levelsixmy+levelsixhegiht-10>400){levelsixmy-=10
        }}
    if(e.key=="d"){
        if(levelsixmx+levelsixwidth-10>500){levelsixmx-=10
          }}
    if(e.key=="q"){
      ctx.beginPath();
      for(i in infectedcellslist6){

        if(infectedcellslist6[i].rx+levelsixmx>300 && infectedcellslist6[i].rx+levelsixmx<600){
          if(infectedcellslist6[i].ry+levelsixmy>200 && infectedcellslist6[i].ry+levelsixmy<500){

          infectedcellslist6.splice(i, 1);
          levelsixscore+=1
        }}
      }
    }
  }

}

function KeyUpHandler(e){
	
}

//level one
let current_antigen=null
let cellslist=[]
let pathogenantigen=0
class idenifyable_cell{
  constructor(antigen,y) {
    this.cellpic=RedBloodCellimg;
    this.antigen=antigen;
	
	this.y=y
	}
	draw(window,x){
		ctx.drawImage(RedBloodCellimg, x,this.y,300,300);
		
	if(this.antigen==0){
		ctx.drawImage(SquAntigenimg, x+150,this.y-10,50,50);
	}
	else if(this.antigen==1){
		ctx.drawImage(TriAntigenimg, x+150,this.y-10,50,50);
	}
	else if(this.antigen==2){
		ctx.drawImage(CirAntigenimg, x+150,this.y-10,50,50);
	}
	}
} 
function levelone(){
    ctx.fillStyle = "#995500";
    ctx.fillRect(0, 400, 900, 300);
	ctx.fillStyle = "#000000";
	ctx.font = "25px Arial";
	ctx.fillText("Current Antigen",10,450);
	
	if(current_antigen==0){
		ctx.drawImage(SquAntigenimg, 10, 500,100,100);
	}
	else if(current_antigen==1){
		ctx.drawImage(TriAntigenimg, 10, 500,100,100);
	}
	else if(current_antigen==2){
		ctx.drawImage(CirAntigenimg, 10, 500,100,100);
	}
  
	curentcell=cellslist[0]
	for(i in cellslist){
		cellslist[i].draw(ctx,350*(i+1))
	}
	
}

function levelonescreen(){
	ctx.fillStyle = "#dd1120";
    ctx.fillRect(20, 20, 860, 660);
	ctx.fillStyle="#000000"
	ctx.font = "25px Arial";
	ctx.fillText("The first process the immune system carries out is identification",100,100);
	ctx.font = "15px Arial";
	ctx.fillText("This is done by white blood cells identifying antigens on other cells and using that to determine if the cell is of this body",50,150);
	ctx.fillText("In this mini game you will identify blood cells by their antigens and will let them pass or not",150,200);
	ctx.fillText("each cell will have a specife antigen on it and if it  maches your antigen then hit {p} so they can pass",100,250);
	ctx.fillText("elsewise hit {s} to signal the imune system and start a imune response",200,300);
	ctx.fillText("press {b} to begin",300,370)
}
//level two
function leveltwoscreen(){
	ctx.fillStyle = "#dd1120";
    ctx.fillRect(20, 20, 860, 660);
	ctx.fillStyle="#000000"
	ctx.font = "25px Arial";
	ctx.fillText("The immune system then begins the next step:defence",100,100);
	ctx.font = "15px Arial";
	ctx.fillText("Now that you have identifyed a forgin body and signaled the immune response you begin to attack the pathogen",50,150);
	ctx.fillText("natural killer cells are amoung the first line of defence in the imne response. natual killers(nk) are speical",150,200);
	ctx.fillText("white blood cells the attack incefted cells, but not the pathogen itself",150,220);
  ctx.fillText("in this mini game you will move around a space attacking green cells with speical chemicals",100,250);
	ctx.fillText("kill 10 infected cells to win",100,300);
  ctx.fillText("movewith {w}{a}{s}{d} and attack with {q}",100,350);
	ctx.fillText("press {b} to begin",300,420)
}

var TO_RADIANS = Math.PI/180; 
function drawRotatedImage(image, x, y, angle,w,h)
{ 
    // save the current co-ordinate system 
    // before we screw with it
    ctx.save(); 

    // move to the middle of where we want to draw our image
    ctx.translate(x, y);

    // rotate around that point, converting our 
    // angle from degrees to radians 
    ctx.rotate(angle * TO_RADIANS);

    // draw it up and to the left by half the width
    // and height of the image 
    ctx.drawImage(image, -(image.width/2), -(image.height/2),w,h);

    // and restore the co-ords to how they were when we began
    ctx.restore(); 
}

//map
let leveltwomx=0
let leveltwomy=0
let leveltwowidth=2000
let leveltwohegiht=1000
let infectedcellslist=[]
let leveltwoscore=10
let pangle=0

class infectedcell{
  constructor(x,y){
    this.rx=x
    this.ry=y
    this.state=1
    
  }

  draw(){
    ctx.drawImage(infectedcellimg,this.rx+leveltwomx,this.ry+leveltwomy,50,50)
  }
  
}


function leveltwo(){
  ctx.fillStyle="#dd1120";
  ctx.fillRect(leveltwomx,leveltwomy,leveltwowidth,leveltwohegiht)
  drawRotatedImage(bloodwallimg,leveltwomx,leveltwomy-50,0,leveltwowidth,100)
  drawRotatedImage(bloodwallimg,leveltwomx+leveltwowidth,leveltwomy+leveltwohegiht+50,180,leveltwowidth,100)
  drawRotatedImage(bloodwallimg,leveltwomx+leveltwowidth,leveltwomy-50,90,leveltwohegiht+20,100)
  drawRotatedImage(phagoimg,-leveltwomx,0,270,100,100)

  for(i in infectedcellslist){
    
    infectedcellslist[i].draw()
  }

  ctx.drawImage(nkcellimg,400,300,100,100)
  ctx.beginPath();
ctx.arc(450, 350, 150, 0, 2 * Math.PI);
ctx.lineWidth = 1;
ctx.strokeStyle = "green";
ctx.stroke();


ctx.fillStyle="#000000"
	ctx.font = "25px Arial";
	ctx.fillText(leveltwoscore,50,50);

if (leveltwoscore>9){
  level=2
  started=0
}
}

//map
let levelthreemx=0
let levelthreemy=0
let levelthreewidth=2000
let levelthreehegiht=1000
let infectedcellslist2=[]
let levelthreescore=10

function levelthreescreen(){
	ctx.fillStyle = "#dd1120";
    ctx.fillRect(20, 20, 860, 660);
	ctx.fillStyle="#000000"
	ctx.font = "25px Arial";
	ctx.fillText("The immune system continues its defence with the phagocyte",100,100);
	ctx.font = "15px Arial";
	ctx.fillText("Now that you have begun to kill infected cells you must now attack the psthogen itslef as a phagocyte",50,150);
	ctx.fillText("phagocytes are other special white blood cells that eat pathogens with phagocytoses",150,200);
  ctx.fillText("in this mini game you will move around a space eating pathogens",100,250);
	ctx.fillText("kill 10 infected cells to win",100,300);
  ctx.fillText("movewith {w}{a}{s}{d} and touch pathogens to eat them",100,350);
	ctx.fillText("press {b} to begin",300,420)
}

class infectedcell2{
  constructor(x,y){
    this.rx=x
    this.ry=y
    this.state=1
    
  }

  draw(levelmx,levelmy){
    ctx.drawImage(pathogenimg,this.rx+levelmx,this.ry+levelmy,50,50)
  }
  
}


function levelthree(){
  ctx.fillStyle="#dd1120";
  ctx.fillRect(levelthreemx,levelthreemy,levelthreewidth,levelthreehegiht)
  drawRotatedImage(bloodwallimg,levelthreemx,levelthreemy-50,0,levelthreewidth,100)
  drawRotatedImage(bloodwallimg,levelthreemx+levelthreewidth,levelthreemy+levelthreehegiht+50,180,levelthreewidth,100)
  drawRotatedImage(bloodwallimg,levelthreemx+levelthreewidth,levelthreemy-50,90,levelthreehegiht+20,100)
  drawRotatedImage(bloodwallimg,-levelthreemx,0,270,100,100)
  ctx.drawImage(phagoimg,400,300,100,100)
  for(i in infectedcellslist2){

    if(infectedcellslist2[i].rx+levelthreemx>400 && infectedcellslist2[i].rx+levelthreemx<500){
      if(infectedcellslist2[i].ry+levelthreemy>300 && infectedcellslist2[i].ry+levelthreemy<400){
      infectedcellslist2.splice(i, 1);
      levelthreescore+=1
      }
    }
  }
  for(i in infectedcellslist2){
    
    infectedcellslist2[i].draw(levelthreemx,levelthreemy)
    
  }
  ctx.fillStyle="#000000"
	ctx.font = "25px Arial";
	ctx.fillText(levelthreescore,50,50)
  

if (levelthreescore>9){
  level=3
  started=0
}}

//level four
let levelfourmx=0
let levelfourmy=0
let levelfourwidth=2000
let levelfourhegiht=1000
infectedcellslist2=[]
let rement=null
let levelfourscore=0


function levelfourscreen(){
	ctx.fillStyle = "#dd1120";
    ctx.fillRect(20, 20, 860, 660);
	ctx.fillStyle="#000000"
	ctx.font = "25px Arial";
	ctx.fillText("while the pagocytes and natural killer cells helper t cells work to win the war",100,100);
	ctx.font = "15px Arial";
	ctx.fillText("the other white blood cells can fight the pathogen but not for long so ",50,150);
	ctx.fillText("helper t cells go and gather dead pathogens to see their antibodys",150,200);
  ctx.fillText("in this mini game you will move around a space avoiding pathogens while trying to find the dead remnent",100,250);
	ctx.fillText("coloect the pathogen rement to win",100,300);
  ctx.fillText("move with {w}{a}{s}{d} and touch the remnent to colect it",100,350);
	ctx.fillText("press {b} to begin",300,420)
}

class pathogenrement{
  constructor(x,y){
    this.rx=x
    this.ry=y
    this.state=1
    this.antigenpic=null
  }

  draw(){
    ctx.drawImage(this.antigenpic,this.rx+levelfourmx,this.ry+levelfourmy-10,50,50)
    ctx.drawImage(pathogenrimg,this.rx+levelfourmx,this.ry+levelfourmy,50,50)
  }
  
}


function levelfour(){
  ctx.fillStyle="#dd1120";
  
  ctx.fillRect(levelfourmx,levelfourmy,levelfourwidth,levelfourhegiht)
  drawRotatedImage(bloodwallimg,levelfourmx,levelfourmy-50,0,levelfourwidth,100)
  drawRotatedImage(bloodwallimg,levelfourmx+levelfourwidth,levelfourmy+levelfourhegiht+50,180,levelthreewidth,100)
  drawRotatedImage(bloodwallimg,levelfourmx+levelfourwidth,levelfourmy-50,90,levelfourhegiht+20,100)
  drawRotatedImage(bloodwallimg,-levelfourmx,0,270,100,100)

  ctx.drawImage(helpertimg,400,300,100,100)
  for(i in infectedcellslist2){

    if(infectedcellslist2[i].rx+levelfourmx>400 && infectedcellslist2[i].rx+levelfourmx<475){
      if(infectedcellslist2[i].ry+levelfourmy>300 && infectedcellslist2[i].ry+levelfourmy<400){
      lose("You Got killed by a pathogen")
      }
    }
  }
  if(rement.rx+levelfourmx>400 && rement.rx+levelfourmx<500){
    if(rement.ry+levelfourmy>300 && rement.ry+levelfourmy<400){
      level=4
      started=0
    }
  }
  
  rement.draw(ctx)

  
  
  for(i in infectedcellslist2){
    
    infectedcellslist2[i].draw(levelfourmx,levelfourmy)
    
  }

  ctx.fillStyle="#000000"
	ctx.font = "25px Arial";
	ctx.fillText(levelfourscore,50,50)
  
}

//level firve
let levelfivemx=0
let levelfivemy=200
let levelfivewidth=2000
let levelfivehegiht=500
tops=[]



function levelfivescreen(){
	ctx.fillStyle = "#dd1120";
    ctx.fillRect(20, 20, 860, 660);
	ctx.fillStyle="#000000"
	ctx.font = "25px Arial";
	ctx.fillText("now that the remnet has been colected the helper t cell must find the right killer t cell",100,100);
	ctx.font = "15px Arial";
	ctx.fillText("the helper t cell tests the antigen from the pathogen to find the killer t cell with the perfect attack",50,150);
	ctx.fillText("the killer t cell is a specal white blood  cell that is specifcly desinged to kill a specific pathogen",150,200);
  ctx.fillText("in this mini game you will move around trying t find the t cellthat matches the antigen of the pathogen(its in the cornor)",100,250);
	ctx.fillText("find the right killer t cell to win",100,300);
  ctx.fillText("movewith {w}{a}{s}{d} and touch tcells to pick them",100,350);
	ctx.fillText("press {b} to begin",300,420)
}

class option{
  constructor(x,y){
    this.rx=x
    this.ry=y
    this.antigenpic=null
    this.antigen=0
  }

  draw(){
    console.log(this.antigenpic)
    ctx.drawImage(killertimg,this.rx+levelfivemx,this.ry+levelfivemy,50,50)
    ctx.drawImage(this.antigenpic,this.rx+levelfivemx,this.ry+levelfivemy+10,25,25)
  }
  
}


function levelfive(){
  ctx.fillStyle="#dd1120";
  
  ctx.fillRect(levelfivemx,levelfivemy,levelfivewidth,levelfivehegiht)
  drawRotatedImage(bloodwallimg,levelfivemx,levelfivemy-50,0,levelfivewidth,100)
  drawRotatedImage(bloodwallimg,levelfivemx+levelfivewidth,levelfivemy+levelfivehegiht+50,180,levelthreewidth,100)
  drawRotatedImage(bloodwallimg,levelfivemx+levelfivewidth,levelfivemy-50,90,levelfivehegiht+20,100)
  drawRotatedImage(bloodwallimg,-levelfivemx,0,270,100,100)
  if(pathogenantigen==0){
    b=SquAntigenimg
    
  }
  else if(pathogenantigen==1){
    b=TriAntigenimg
  }
  else if(pathogenantigen==2){
    b=TriAntigenimgCirAntigenimg
}
ctx.drawImage(b,50,50,50,50)
  ctx.drawImage(helpertimg,400,300,100,100)
  for(i in tops){

    if(tops[i].rx+levelfivemx>400 && tops[i].rx+levelfivemx<500){
      if(tops[i].ry+levelfivemy>300 && tops[i].ry+levelfivemy<400){
        
      if(tops[i].antigen==pathogenantigen){
        level=5
        started=0
      }
      }
    }
  }
  
  
  for(i in tops){
    
    tops[i].draw()
    
  }

  ctx.fillStyle="#000000"
	ctx.font = "25px Arial";

  
}
//6
function levelsixscreen(){
	ctx.fillStyle = "#dd1120";
    ctx.fillRect(20, 20, 860, 660);
	ctx.fillStyle="#000000"
	ctx.font = "25px Arial";
	ctx.fillText("The immune system then begins the final attack",100,100);
	ctx.font = "15px Arial";
	ctx.fillText("now that the proper killer tcell was found it is used to kill the pathogn",50,150);
	ctx.fillText("killer t cells fight the pathogen in two  ways frist they fight it like the natuarl killers killing many bactria",150,200);
	ctx.fillText("then they send blue prints for a spefic antibody to b cells who biuld the anitbodys wich imabalize the pathogen",150,220);
  ctx.fillText("in this mini game you will move around a space attacking the pathogen with speical chemicals",100,250);
	ctx.fillText("kill 10 infected cells to win",100,300);
  ctx.fillText("movewith {w}{a}{s}{d} and attack with {q}",100,350);
	ctx.fillText("press {b} to begin",300,420)
}

//map
let levelsixmx=0
let levelsixmy=0
let levelsixwidth=2000
let levelsixhegiht=1000
let infectedcellslist6=[]
let levelsixscore=0


class infectedcell6{
  constructor(x,y){
    this.rx=x
    this.ry=y
    this.state=1
    
  }

  draw(){
    ctx.drawImage(pathogenimg,this.rx+levelsixmx,this.ry+levelsixmy,50,50)
    drawRotatedImage(antibodyimg,this.rx+levelsixmx,this.ry+levelsixmy-50,0,25,25)
    drawRotatedImage(antibodyimg,this.rx+levelsixmx-50,this.ry+levelsixmy-50,180,25,25)
  }
  
}


function levelsix(){
  ctx.fillStyle="#dd1120";
  ctx.fillRect(levelsixmx,levelsixmy,levelsixwidth,levelsixhegiht)
  drawRotatedImage(bloodwallimg,levelsixmx,levelsixmy-50,0,levelsixwidth,100)
  drawRotatedImage(bloodwallimg,levelsixmx+levelsixwidth,levelsixmy+levelsixhegiht+50,180,levelsixwidth,100)
  drawRotatedImage(bloodwallimg,levelsixmx+levelsixwidth,levelsixmy-50,90,levelsixhegiht+20,100)


  for(i in infectedcellslist){
    
    infectedcellslist6[i].draw()
  }

  ctx.drawImage(killertimg,400,300,100,100)
  ctx.beginPath();
ctx.arc(450, 350, 150, 0, 2 * Math.PI);
ctx.lineWidth = 1;
ctx.strokeStyle = "green";
ctx.stroke();


ctx.fillStyle="#000000"
	ctx.font = "25px Arial";
	ctx.fillText(levelsixscore,50,50);

if (levelsixscore>9){
  level=6
  started=0
}
}


function winscreen(){
	ctx.fillStyle = "#dd1120";
    ctx.fillRect(20, 20, 860, 660);
	ctx.fillStyle="#000000"
	ctx.font = "25px Arial";
	ctx.fillText("The immune system has defeted the pathogen",100,100);
	ctx.font = "15px Arial";
	ctx.fillText("now that the pathogen is dead the body returns to normal",50,150);
	ctx.fillText("but to ease the fight in the furture some sepcal memry b and t cells stay around so that they can more quickly fight the pathogen in te furture",150,200);
	ctx.fillText("ensuring the pathogen is remebers is a important part as if it dident we would have to start from ground one allover again",150,220);
  ctx.fillText("but the pathogen is killed and you win",100,250);
}

function lscreen(){
	ctx.fillStyle = "#ff0000";
    ctx.fillRect(20, 20, 860, 660);
	ctx.fillStyle="#000000"
	ctx.font = "25px Arial";
	ctx.fillText(lose_message,100,100);
}

function draw(){
    clearwindow("#ff3300");
	if(level==-1){lscreen()}
    if(level==0 && started==1)
		{levelone();}
	else if(level==0 && started==0){
		levelonescreen()
	
	}
  else if(level==1 && started==0)
		{leveltwoscreen();}
  else if(level==1 && started==1)
		{leveltwo();}
  else if(level==2 && started==0)
		{levelthreescreen();}
  else if(level==2 && started==1)
		{levelthree();}
  else if(level==3 && started==0)
		{levelfourscreen();}
  else if(level==3 && started==1)
		{levelfour();}
  else if(level==4 && started==0)
		{levelfivescreen();}
  else if(level==4 && started==1)
		{levelfive();}
  else if(level==5 && started==0)
		{levelsixscreen();}
  else if(level==5 && started==1)
		{levelsix();}
  else if(level==6 && started==0)
		{winscreen();}
    
    
    requestAnimationFrame(draw);
}
draw();
	