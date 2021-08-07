song=""
song2=""

function preload(){
    song= loadSound("Juice-WRLD-Come-Go-ft-Marshmello-(HipHopKit.com).mp3");
    song2=loadSound(Juice-WRLD-Lucid-Dreams-(HipHopKit.com).mp3);
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,500);
}

function PlayIt(){
    song.play();
}