let allBobs = [], loop1;
class Bob {
    constructor (x, y, radius) {
        this.radius = radius;
        this.body = Bodies.circle(x, y, this.radius, {isStatic: false, restitution: 0.3, friction: 0.5, density: 1.2});
        World.add(world, this.body);
        this.launch = function() {
            Matter.Body.applyForce(this.body, this.body.position, {x: 200, y: -300});
        }
        this.display = function () {
            push();
            strokeWeight(0);
            ellipseMode(RADIUS);
            fill(255, 255, 0);
            ellipse(this.body.position.x, this.body.position.y, this.radius);
            pop();
        };
        allBobs.push(this);
    }
}
function displayAllBobs () {
    for (loop1 = 0; loop1 < allBobs.length; loop1 += 1) {
        allBobs[loop1].display();
    }
}
