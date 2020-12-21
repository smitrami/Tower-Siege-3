class Polygon {
    constructor(x, y, radius) {
        var options =
        {
            isStatic: false,
            restitution: 1.0
        }
        this.r = radius;
        this.body = Bodies.circle(x, y, this.r, options);
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var scale = scale;
        push();
        //ellipse(pos.x, pos.y, this.r);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 75, 75);
        pop();
    }
}