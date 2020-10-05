class Red {
  
    constructor(x,y,width,height) {
        
      var options = {
        friction : 0, 
        density : .001
      }
      this.body = Bodies.rectangle(x,y,width,height) 
      this.image = loadImage("images/redPiece.png")
      this.width = width;
      this.height = height;
      World.add (world,this.body)
    }
    display () {
      var pos = this.body.position ;
      var angle = this.body.angle ;
      rotate(angle)
      imageMode (CENTER)
      image(this.image,0,0,this.width,this.height)
    }  
    moveright () {
      Matter.Body.setVelocity(this.body,{x:6.85,y:0});
  }
  moveleft () {
      Matter.Body.setVelocity(this.body,{x:-6.85,y:0});
  }
  moveup () {
      Matter.Body.setVelocity(this.body,{x:0,y:-6.8});
  }
  
}