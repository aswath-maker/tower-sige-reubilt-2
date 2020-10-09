class target {
    constructor(x,y,width,height){

        var options={
            isStatic : false,       
            friction : 1.5,
           density : 0.10,
           restitution : 1             
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height
        World.add(world, this.body);
        this.Visiblity = 255;   
    }


        


        display(){
            if(this.body.speed < 12){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            fill("blue");
            rect(0,0,this.width,this.height);
            pop();
            }else{
                World.remove(world, this.body);
                push();
                this.Visiblity = this.Visiblity - 5;
                tint(255,this.Visiblity);
                pop();
              }
        }

        display2(){
            if(this.body.speed < 12){
            var angle = this.body.angle;
            var pos =this.body.position;
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            strokeWeight(5);
            fill("green");
            rect(0,0,this.width,this.height);
            pop();
            }else{
                World.remove(world, this.body);
                push();
                this.Visiblity = this.Visiblity - 5;
                tint(255,this.Visiblity);
                pop();
              }



    }
}

