var nose_x_tika=0,nose_y_tika=0;
var nose_x_neck=0,nose_y_neck=0;
var nose_x_pagdi=0,nose_y_pagdi=0;
var nose_x_goggles=0,nose_y_goggles=0;
function preload(){
    tika = loadImage('bindi.png');
    neklace = loadImage('necklace.png');
    pagdi = loadImage('pagdi.png');
    goggles = loadImage('goggles.png');
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(300,300);
    pose_Net = ml5.poseNet(video, modelLoaded);
    pose_Net.on('pose', got_poses);
}
function modelLoaded(){
    console.log("Model Loaded !!");
}
function got_poses(results){
    if(results.length > 0){
        console.log(results);
        nose_x_tika = results[0].pose.nose.x-5;
        nose_y_tika = results[0].pose.nose.y-35;
        nose_x_neck = results[0].pose.nose.x-10.5;
        nose_y_neck = results[0].pose.nose.y+35;
        nose_x_pagdi = results[0].pose.nose.x-25;
        nose_y_pagdi = results[0].pose.nose.y-70;
        nose_x_goggles = results[0].pose.nose.x-20;
        nose_y_goggles = results[0].pose.nose.y-20;
    }
}
function draw(){
    image(video,0,0,300,300);
    image(tika, nose_x_tika, nose_y_tika, 10, 10);
    image(neklace, nose_x_neck, nose_y_neck, 30, 40);
    image(pagdi, nose_x_pagdi, nose_y_pagdi, 60, 40);
    image(goggles, nose_x_goggles, nose_y_goggles, 45, 20);
}
function take_snapshot(){
    save('extra_filter_img.png');
}