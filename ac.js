status1 = "";
ac_image = "";
function preload()
{
    ac_image = loadImage("ac.jpg");
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
    objectDetector.detect(ac.jpg,gotresult);
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
    image(ac_image,0,0,640,350);
}