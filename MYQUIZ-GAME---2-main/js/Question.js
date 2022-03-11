class Question {

  constructor() {
    this.title = createElement('h1')
    this.title.class("gameTitle")
    this.input1 = createInput("").attribute("placeHolder","Enter you name");
    this.input2 = createInput("").attribute("placeHolder","Enter you option");
    this.button = createButton('Submit');
    this.button2 = createButton('Reset');
    this.question = createElement('h2');
    this.option1 = createElement('h2');
    this.option2 = createElement('h2');
    this.option3 = createElement('h2');
    this.option4 = createElement('h2');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    //this.button2.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("My Space Quiz Game");
    this.title.position(width/2-140,0);
    

    this.question.html("Question:- The 7th Planet ''Uranus'' has only been visited by what spacecraft? (by 2021) " );
    this.question.position(150, 70);
    this.option1.html("1: Apollo 11" );
    this.option1.position(150, 95);
    this.option2.html("2: Voyager 2" );
    this.option2.position(150, 120);
    this.option3.html("3: Voyager 1" );
    this.option3.position(150, 145);
    this.option4.html("4: Vostok 1" );
    this.option4.position(150, 170);

    this.input1.position(width/2-275, 500);
    this.input1.class("customInput")
    this.input2.position(width/2+100, 500);
    this.input2.class("customInput")
    this.button.position(width/2-125, 600);
    this.button.class("custom2Button")
    this.button2.position(width/2+50, 600);
    this.button2.class("custom2Button")

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });

    this.button2.mousePressed(()=>{

      //Contestant.getC()
      
        location.reload()
      
        contestant.updateCount(0)
      quiz.update(0)
      var ref = database.ref("contestants")
      ref.remove()
      this.button2.position(width/2,600)

      
      
    })
  }

 
}
