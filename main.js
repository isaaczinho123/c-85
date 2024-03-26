canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

roverWidth=100;
roverHeight=90;
roverX=10;
roverY=10

backgroundImage="mars.jpg";
roverImage="rover.png";

function add(){
    backgroundImgTag=new Image();//definido uma variavel com uma nova img
    backgroundImgTag.onload= uploadBackground;//ajustando uma funçao ao carregar essa variavel
    backgroundImgTag.src=backgroundImage; //carregar a imagem

    roverImgTag=new Image();//definido uma variavel com uma nova img
    roverImgTag.onload= uploadRover;//ajustando uma funçao ao carregar essa variavel
    roverImgTag.src=roverImage; //carregar a imagem

}

function uploadBackground(){
    ctx.drawImage(backgroundImgTag,0,0,canvas.width,canvas.height);
}

function uploadRover(){
    ctx.drawImage(roverImgTag,roverX,roverY,roverWidth,roverHeight);
}

window.addEventListener("keydown",myKeydown);

function myKeydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    
    if(keyPressed=='38'){
        up();
        console.log("cima")
    }

    if(keyPressed=='40'){
        down();
        console.log("baixo")
    }

    if(keyPressed=='37'){
        left();
        console.log("esquerda")
    }

    if(keyPressed=='39'){
        right();
        console.log("direita")
    }
}
function up(){
    if(roverY>=0){
        roverY=roverY-10;
        console.log("Quando a seta para cima for pressionada X= "+roverX+"Y= "+roverY);
        uploadBackground();
        uploadRover();
    }
}
function down(){
    if(roverY<=500){
        roverY=roverY+10;
        console.log("Quando a seta para baixo for pressionada X= "+roverX+"Y= "+roverY);
        uploadBackground();
        uploadRover();
    }
}
function left(){
    if(roverX>=0){
        roverX=roverX-10;
        console.log("Quando a seta para esquerda for pressionada X= "+roverX+"Y= "+roverY);
        uploadBackground();
        uploadRover();
    }
}
function right(){
    if(roverX<=700){
        roverX=roverX+10;
        console.log("Quando a seta para direita for pressionada X= "+roverX+"Y= "+roverY);
        uploadBackground();
        uploadRover();
    }
}