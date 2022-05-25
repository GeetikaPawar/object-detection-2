status1 = "";
couch_image = "";
function preload()
{
    couch_image = loadImage("couch.jpg");
}

function setup()
{
    canvas = createCanvas(640,350);
    canvas.center();
    
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="detecting project";
}

function modelLoaded()
{
    status1 = true;
    console.log("model LOADED")
    objectDetector.detect(couch.jpg,gotresult);
}

function gotResult(error,result)
{
    if(error){
        console.log(error);
    }       
    else{
        console.log(result);
        i = result;
    }
}

function draw(){
    image(couch_image,0,0,640,350);
}