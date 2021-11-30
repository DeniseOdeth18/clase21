const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

//variable pelota

//var btn1,2


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  //btn1, imagen, posicion, tamaño, al hacer click con el mouse llamar a la funcion vforce

  //btn2

  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  //propiedades de la pelota, restitucion

  // crear un cuerpo circulo con x,y,radio y propiedad

  //añadir ball al mundo 

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  // mostrar la pelota y pasar su posicion en la funcion ellipse()
 
  ground.show();
  top_wall.show();
  left.show();
  right.show();

  Engine.update(engine);



}
function hForce(){

}

function vForce()
{
  
}