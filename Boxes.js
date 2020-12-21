class Box {
    constructor(x, y, width, height) {
        var options = {
            restitution: 0.1,
            'friction': 1.0,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 225;
        World.add(world, this.body);
    }
    display() {
        if (this.body.speed < 3) {
            push();
            var pos = this.body.position;
            var angle = this.body.angle;
            translate(pos.x, pos.y);
            rotate(angle);
            strokeWeight(1.5);
            rectMode(CENTER);
            rect(0, 0, this.width, this.height);
            //this.body.visible = true;
            pop();
        }
        else {
            World.remove(world, this.body);
            push();
            this.visibility = this.visibility - 5;
            tint(255, this.visibility);
            pop();
        }
    }
    score() {
        if (this.visibility < 0 && this.visibility >= -50) {
            score++
        }
    }
}
