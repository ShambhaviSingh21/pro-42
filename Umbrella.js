class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("walking_1.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella);

    //     this.batmanImg = loadImage("batman.png");
    //    World.add(world, this.batmanImg);
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        // if(framecount >=200){
        // image(this.batmanImg,pos.x,pos.y+70,200,300);
        // }
        image(this.image,pos.x,pos.y+70,300,300);
    }
}