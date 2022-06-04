nosex=0
nosey=0
leftwristx=0
rightwristx=0
difference=0

function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);
    canvas=createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}

function draw(){
    background('light blue');
    document.getElementById("square_sides").innerHTML="Width and Height of a Square will be = "+difference+"px";
    fill('blue');
    stroke('green');
    square(nosex. nosey, difference);
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("noseX="+nosex+"noseY="+nosey);
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=floor(leftwristx-rightwristx);
        console.log("leftwristx="+leftwristx+"rightwristx="+rightwristx+"difference="+difference);
    }
}