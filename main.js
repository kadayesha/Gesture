var noseX = 0;
var noseY = 0;
var rightWristX = 0;
var leftWristX = 0;
var difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose",getPoses);
}

function draw(){
    background("black");
    document.getElementById("squareSides").innerHTML = "The size of the square is "+difference+"px";
    fill("white");
    stroke("red");

    rect(noseX, noseY, difference,difference);
}

function modelLoaded(){
    console.log("model is loaded")
}

function getPoses(results){
    if(results.length>0){
    console.log(results);

    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;

    rightWristX = results[0].pose.rightWrist.x;
    leftWristX  = results [0].pose.leftWrist.x;

    difference = floor(leftWristX - rightWristX);

    console.log(difference);
    }



}