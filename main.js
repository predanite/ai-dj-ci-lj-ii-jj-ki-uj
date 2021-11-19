song=""
rightwristX=0
rightwristY=0
leftwristY=0
leftwristX=0
scorerightwrist=0
scoreleftwrist=0
function preload(){
song=loadSound("the ignore the dot.mp3")
}
function setup(){
canvas=createCanvas(500,500)
canvas.position(382,200)

video=createCapture(VIDEO)
video.hide()

poseNet=ml5.poseNet(video,modelLoaded)

poseNet.on('pose',gotposes)
}
function draw(){
image(video,0,0,500,500)

fill("ff0000")
if(scoreleftwrist>0.2){
    circle(leftwristX,leftwristY,15)
    if(leftwristY>0&&leftwristY<=100){
        document.getElementById("sbutton").innerHTML="speed=0.5"
        song.rate(0.5)
    }
    if(leftwristY>0&&leftwristY<=100){
        document.getElementById("sbutton").innerHTML="speed=1"
        song.rate(1)
    }
    if(leftwristY>0&&leftwristY<=100){
        document.getElementById("sbutton").innerHTML="speed=1.5"
        song.rate(1.5)
    
    }
    if(leftwristY>0&&leftwristY<=100){
        document.getElementById("sbutton").innerHTML="speed=2"
        song.rate(2)
    }
        if(leftwristY>0&&leftwristY<=100){
            document.getElementById("sbutton").innerHTML="speed=2.5"
            song.rate(2.5)
        }    
    }
}
if(scorerightwrist>0.2)
{
    circle(rightwristX,rightwristY,15)
    is_number_rightwristY=Number(rightwristY)
    hexadecimal=floor(is_number_rightwristY)
    volume=hexadecimal/500
    document.getElementById("vbutton").innerHTML="volume"+volume
    song.setVolume(volume)
}
function playss(){
    song.play()
    song.setVolume(1)
}

function modelLoaded(){
   console.log("model is Loaded")
}


function gotposes(results){
    if(results.length>0)
    {
        console.log(results)
        scorerightwrist=results[0].pose.keypoints[10].score
        rightwristX=results[0].pose.rightWrist.x
        rightwristY=results[0].pose.rightWrist.y
        scoreleftwrist=results[0].pose.keypoints[9].score
        leftwristX=results[0].pose.leftWrist.x
        leftwristY=results[0].pose.leftWrist.y
      }
}