let allRopes = [];

class Rope {
    constructor(Object1, Object2, offset) {
        this.offset = offset;
        this.chain = Constraint.create({
            'bodyA' : Object1.body,
            'pointB' : {'x' : this.offset.x + Object2.body.position.x, 'y' : this.offset.y + Object2.body.position.y},
            'stiffness' : 0.005,
            'length' : 300
        });
        World.add(world, this.chain);
        allRopes.push(this);
    }
    display() {
        push();
        line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.pointB.x, this.chain.pointB.y);
        pop();
    }
}

function displayAllRopes() {
    for (loop1 = 0; loop1 < allRopes.length; loop1 +=1) {
        allRopes[loop1].display();
    }
}