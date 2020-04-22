/*class Log extends BaseClass{
  constructor(x,y,height,angle){
  super(x,y,20,height,angle);
   this.image = loadImage("sprites/wood2.png");
  Matter.Body.setAngle(this.body, angle);
  }
}*/
/*class Log{
constructor(x, y, height, angle) {
  var options = {
       isStatic:true
    }
 
  this.body = Bodies.rectangle(x,y,width,height, options);
  this.width = width;
  this.height =height;
  this.image=loadImage("wood2.png")
  Matter.Body.setAngle(this.body, angle);
  World.add(world, this.body);
}
display(){
  var angle = this.body.angle;
  push();
  translate(this.body.position.x, this.body.position.y);
  rotate(angle);
  imageMode(CENTER);
  image(this.image,0, 0, this.width, this.height);
  pop();
}



}
*/
class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,10,50,angle);
    this.image = loadImage("wood2.png");
    Matter.Body.setAngle(this.body, angle);
  }
}