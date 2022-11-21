s = "";
video="";
function setup()
{
    canvas= createCanvas(480,380);
    canvas.center();

}
function preload()
{
    video = createVideo(VIDEO);
    video.hide();
}
 function start()
 {
    objectDetecter = ml5.objectDetecter('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "status : detecting objects";
 }
 function draw()
 {
    image(video,0,0,480,380)
 }
 function modelLoaded()
 {
    console.log(modelLoaded);
    s = true;
    video.speed(1);
    video.volume(0);
    video.loop();
 }

 