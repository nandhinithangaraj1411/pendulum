/*class Circle extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("ball.png");
  }

  move(){
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
   
      
   }
  
  
  display() {
      this.body.position.x = mouseX;
      this.body.position.y = mouseY
 super.display();
  }
}*/
class Circle{
constructor(x, y, width, height, angle) {
  var options = {
      'restitution':0.8,
      'fricion':0.08,
      'density':1.0,
  }
  this.body = Bodies.rectangle(x, y,50, 50, options);
  this.image=loadImage("ball.png")
  this.width = 50;
  this.height = 50;
  World.add(world, this.body);
}
display(){
  var angle = this.body.angle;
  push();
  translate(this.body.position.x, this.body.position.y);
  rotate(angle);
  imageMode(CENTER);
  image( this.image,0, 0, this.width, this.height);

if (keyIsDown(ENTER)){
  this.body.position.x =this.body.position.x ;
  this.body.position.y =this.body.position.y;
 // this.body.position.x = 0;
 /// this.body.position.y = 0;
  this.body.position.x = mouseX;
  this.body.position.y = mouseY;

}
//if(keyIsPressed ===true){
//  this.body.position.x = mouseX;
 // this.body.position.y = mouseY;
  pop();
}
}

  




