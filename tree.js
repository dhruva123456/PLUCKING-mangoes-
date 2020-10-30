class Tree{
    constructor(x,y){
       var options={
        isStatic:true
       }
       this.x = 920;
       this.y = 305;
       this.body = Bodies.rectangle(this.x,this.y,options)
       this.image = loadImage("sprites/tree.png")
       
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,350,350);
    }
}