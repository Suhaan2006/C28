class Chain{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
       
       if(this.chain.bodyA)       
            { var pointA = this.chain.bodyA.position;
            var pointB = this.chain.bodyB.position;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            }
    }
 
    fly() {
        this.chain.bodyA = null;
    }

}