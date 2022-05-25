status1 = "";
tv_image = "";
function preload()
{
    tv_image = loadImage("tv.jpg");
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
    objectDetector.detect(tv.jpg,gotresult);
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
    image(tv_image,0,0,640,350);
}