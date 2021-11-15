class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  }

  display() {
    //this.body.position.x = 20;
    //this.body.position.y = 20;
    super.display();
  }
}
