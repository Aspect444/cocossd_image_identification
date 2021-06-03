img = "";
statuss = "";
object = [];

function preload(){
    img = loadImage("image_1.jpeg");
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    od = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "status : detecting objects"
}

function change_html1(){
    window.location = "index(1).html";
}

function change_html2(){
    window.location = "index(2).html";
}

function change_html3(){
    window.location = "index(3).html";
}

function change_html4(){
    window.location = "index(4).html";
}

function change_html5(){
    window.location = "index(5).html";
}

function modelLoaded(){
    console.log("model is loaded");
    status = "true";
    od.detect(img, got_results);
}

function got_results(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        object = results;
    }
}

function draw(){
    image(img, 0, 0, 640, 420);
    if(status != ""){
        for(i = 0; i < object.length; i++){
            height = object[i].height;
            width = object[i].width;
            position_x = object[i].x;
            position_y = object[i].y;
            percentage = floor(object[i].confidence * 100);
            name_of_object = object[i].label;
            fill(32, 207, 23);
            text( name_of_object + " " + percentage + "%", position_x + 15, position_y + 15); 
            noFill();
            stroke(32, 207, 23);
            rect(position_x, position_y, width, height);
            document.getElementById("status").innerHTML = "status : objects detected";
        }
    }
    else{
        document.getElementById("status").innerHTML = "status : no objects detected";
    }
}