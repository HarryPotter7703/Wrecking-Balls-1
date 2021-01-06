class Block{
  constructor(x,y){

    var options = {
      'isStatic':false,
      restitution:0.5,
      friction:0.1
    }
    this.color1 =Math.round(random(0,255))
    this.color2 =Math.round(random(0,255))
    this.color3 =Math.round(random(0,255))
    
    this.body = Bodies.rectangle(x,y,35,55, options);
    this.width = 35
    this.height = 50
    World.add(world, this.body)
    
  }
  display(){

    strokeWeight(4);
    stroke(0)
    fill(this.color1,this.color2,this.color3)
    var pos = this.body.position
    rect(pos.x, pos.y, this.width, this.height)
  }
}