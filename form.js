class Form{
    constructor(){
        this.button=createButton('Play')
        this.dice=createButton('Dice')
        //this.greeting = createElement('h2');
        //this.title = createElement('h2');
        //this.input = createInput("Name");
        //this.input.hide();
       // this.title.hide();
    }
    hide(){
      this.button.hide();
      //this.greeting.hide();
       
    }
    display(){
        this.button.position(displayWidth/2 , displayHeight/2); 
        
        this.button.mousePressed(()=>{
            this.dice=createButton('Dice');
            this.dice.position(displayWidth/2 +50, displayHeight/2);
     
            
        monopoly_img.visible=false;
        board=createSprite(350,300);
            board.scale=0.3;
            board.addImage(board_img);
        num1=createSprite(630,550,10,10);
  num2=createSprite(620,550,10,10);
  num3=createSprite(610,550,10,10);
  num4=createSprite(600,550,10,10);
  num1.shapeColor="red";
  num2.shapeColor="blue";
  num3.shapeColor="green";
  num4.shapeColor="pink";

           
            this.button.hide();
            
           
           
        });
        this.dice.mousePressed(()=>{
            
            this.button.hide();
        
               
              
                
               random(1,6)
               this.dice.hide();
            });
        

            
            
            
          
    }
    
}
