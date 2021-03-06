class Stone{
    constructor(x,y,width,height)
    {
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.width = width;
        this.height = height;
        this.image = loadImage("images/stone.png")
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.body);
    }

    display(){
        var stonePos = this.body.position;
        push();
        translate(stonePos.x,stonePos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}

