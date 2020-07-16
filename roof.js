let allRoofs = [];

class Roof {
    constructor (width, height, x, y) {
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, this.width, this.height, {isStatic:true});
        World.add(world, this.body);
        this.display = function () {
            push();
            strokeWeight(0);
            fill(0,0,0);
            rectMode(CENTER);
            rect(this.body.position.x, this.body.position.y, this.width, this.height);
            pop();
        };
        allRoofs.push(this);
    }
}
function displayAllRoofs () {
    for (loop1 = 0; loop1 < allRoofs.length; loop1++) {
        allRoofs[loop1].display();
    }
}