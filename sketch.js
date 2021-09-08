var rocket,rocketImg;
var asteroid,asteroidImg;
var backgrounds,backgroundImg;

function preload(){

rocketImg = loadImage("Rocket.jpg");
asteroidImg = loadImage("asteroid.png");
backgroundImg = loadImage("background.jpg")

}

function setup() {

    backgrounds = createSprite(1000,900);
    backgrounds.addImage(backgroundImg);
 
    rocket = createSprite(500,600,50,50);
    rocket.scale = 0.08;
    rocket.addImage("flying",rocketImg);
    
    asteroid = createSprite(500,0,50,50);
    asteroid.scale = 0.4;
    asteroid.addImage("coming",asteroidImg);
    asteroid.velocityY = 4;

}

function draw() {
    createCanvas(1000,1000);

    rocket.x = World.mouseX;

    drawSprites();


}