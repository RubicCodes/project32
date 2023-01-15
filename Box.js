class Box{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.width=50;
        this.height=40;
        this.visibility=255;
        var ops={
            isStatic:false
        }
        this.body=Bodies.rectangle(x,y,50,50,ops);
        World.add(world,this.body);

        // score++
    }
    display(){
        if(this.body.speed<10){
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,50,50);
    
    }else{
        World.remove(world,this.body);
        push();
        this.visibility=this.visibility-5;
        tint(255,this.visibility);
        pop();
    }
    

}
score(){
    if(this.visibility<0 && this.visibility>-105){
        score++
    }
}
}