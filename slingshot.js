class SlingShot{
    constructor(bodyA, pointB){
        var options1 = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.03,
            length: 10
        }
        this.slingShot = Constraint.create(options1);
        World.add(world, this.slingShot);
    }
    fly(){
        this.slingShot.bodyA = null;
    }
    attach(){
        this.slingShot.bodyA = rock.body;   
    }
    display(){
        if(this.slingShot.bodyA != null){
        var pointA = this.slingShot.bodyA.position;
        var pointB = this.slingShot.pointB;
        strokeWeight(20);
        stroke("brown");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}