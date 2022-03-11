var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;
var xyz
var question, contestant, quiz;
var noq
var img


function setup(){
  canvas = createCanvas(windowWidth,windowHeight);
  database = firebase.database();
  
  xyz = createButton('Start');
  xyz.position(windowWidth/2-180,windowHeight/2+100)
  xyz.class("customButton")

  //img = loadImage("galaxy.jpg")
  this.tittle = createElement('h1')
    this.tittle.class("gameTitle")
   




}
function draw(){
  background("pink");
  this.tittle.html("My Space Quiz Game");
  this.tittle.position(width/2-140,0);
  xyz.mousePressed(()=>{
    quiz = new Quiz();
  quiz.getState();
  quiz.start();
  xyz.hide()
  
  })

  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
  getQues()
  console.log(random)

  text("My Space Quiz")

  
}

function getQues(){

  var randomRef = database.ref('random');
  randomRef.on("value",(data)=>{
    random = data.val();
  })

//  var no = 'Questions/q'+ random
//  var quesRef = database.ref('Questions/q'+no);
//  quesRef.on("value",(data)=>{
 //   contestantCount = data.val();
 // })

}