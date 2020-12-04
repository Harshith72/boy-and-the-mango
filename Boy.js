class Boy extends BaseClass{
    constructor(x, y){
        super(x,y,250,250);
        this.image = loadImage("boy.png");
        this.image.shapeSize = 2;
    }

};