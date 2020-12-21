class Wall{
   // properties
   constructor(x,y,width,height){
    var options={
       isStatic:true
    }
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.width=width;
    this.height=height;
    World.add(world,this.body)
   }

   //functions
   display(){
      var wall=this.body.position
      rectMode(CENTER);
      fill("blue");
      strokeWeight(0)
      rect(wall.x,wall.y,this.width,this.height);
   }
}