status1 = "";
laptop_image = "";
function preload()
{
    laptop_image = loadImage("laptop.jpg");
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
    objectDetector.detect(laptop.jpg,gotresult);
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
    image(laptop_image,0,0,640,350);
}