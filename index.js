var readlineSync= require('readline-sync');
var chalk= require('chalk');
var score=0;
var userName= readlineSync.question(chalk.hsl(32, 100, 50).bold("Enter Your Name:-"));
console.log(" ");
console.log("Welcome To 3 idiots Quiz- "+chalk.bold.keyword('orange')(userName));
console.log("");
console.log(chalk.bgBlue.cyanBright("Are"+" "+"You"+" "+"Chatur Enough To Crack This Ultimate "+"\n"+"3 idiots Quiz!"));
console.log("       ");
console.log("The Rules Are:-");
console.log(chalk.red("1. Attempt all questions carefully."));
console.log(chalk.red("2. For right answer,Score will displayed and"+"\n"+"   "+"increase to 1."));
console.log( chalk.red("3. For wrong answer, Score will displayed 0."));
console.log( chalk.red("4. In the end of game, HighScore will  displayed."));
console.log(chalk.red("5. No negative marking."));
console.log(" ");
console.log(chalk.bold.rgb(10, 100, 200)("Now, LET'S BEGIN QUIZ!"));
console.log(chalk.green("So, its time to chant'ALL IS WELL'and answer the following question to know if you are biggest fan"+""+"of 3-Idiots or not.")); 
console.log(" ");
//Printing Right or Wrong answer
function quiz(question,answer)
{
   var userAnswer= readlineSync.question(question)
   console.log(chalk.bold.blueBright("Your Answer is= "+userAnswer))
   console.log(chalk.redBright("Correct Option is= "+answer))

  if(userAnswer==answer)
  {
    console.log(chalk.bold.green("Right Answer.."));
    score= score+1;
  
  }
  else
  {
    console.log(chalk.red("Wrong Answer!!"));
  }
   console.log("Current Score:" + chalk.yellowBright(score));
  console.log(chalk.red("----------------------"));
}

var ques=
  [{
    question: chalk.yellow("Q1.What was the name of the college where Rancho and Chatur studied?"+"\n"+"A. Imperial College of Engineering"+"\n"+"B. Indian College of Engineering"+"\n"+"C. Indian Institutes of Technology"+"\n"+"D. Imperial Centre of Engineering")+"\n", answer:"A" 
  },
 {
   question:chalk.yellow("Q2.Rancho escapes ragging by employing a basic concept of physics."+"\n"+"   Which concept was it?"+"\n"+"A. An object in motion stays in motion with the same speed and in the same"+"\n"+"   direction unless acted upon by an unbalanced force."+"\n"+"B. Saltwater is a great conductor of electricity."+"\n"+"C. Electric current is proportional to voltage and inversely proportional to resistance."+"\n"+"D. Acceleration of an object depends on two things,force and mass.")+"\n",
answer:"B", 
},
{
  question:chalk.yellow("Q3.Virus aka Viru Sahastrabuddhe took a power nap while listening to Opera. How long did the power nap last?"+"\n"+"A. 7 minutes"+"\n"+"B. 8 minutes"+"\n"+"C. 5.5 minutes"+"\n"+"D. 7.5 minutes")+"\n",
  answer:"D",
},
{
  question:chalk.yellow("Q4.What is the definition of books that Rancho shares with the professor in his class?"+"\n"+"A. A written or printed work consisting of pages glued or sewn together along"+"\n"+"   one side and bound in covers."+"\n"+"B. A bound set of blank sheets for writing in."+"\n"+"C. Instruments that record, analyse, and summarise information in either illustrated or non-illustrated form."+"\n"+"D. None of the above")+"\n",
  answer:"D"
},
{
 question:chalk.yellow("Q5.Raju's mom shares the price of vegetables with him and his friends. Pick the prices she shares:"+"\n"+"A. Okra: ₹10/- kilo,Cauliflower: ₹12/-kilo"+"\n"+"B. I only remember khujli wali roti"+"\n"+"C. Okra: ₹12/- kilo, Cauliflower: ₹10/-kilo"+"\n"+"D. Paneer sunar ki dukan mein bik raha tha, baaki yaad nahi.")+"\n",
 answer:"C",
},
{
 question:chalk.yellow("Q6.Raju drunkenly sings a song when Rancho professes his feelings to Pia."+"\n"+"   What song is it?"+"\n"+"A. Zoobi Doobi"+"\n"+"B. Kuch na kaho, kuch bhi na kaho"+"\n"+"C. Ek main aur ek tu"+"\n"+"D. Do dil mil rahe hain")+"\n",
 answer:"B",
},
{
  question:chalk.yellow("Q7.Rancho,Farhan, and Raju are caught gate-crashing Virus' daughter's wedding. Whose guest does Rancho claim to be?"+"\n"+"A. Science ki taraf se"+"\n"+"B. Ladkewalo ki taraf se"+"\n"+"C. Ladkiwalon ki taraf se"+"\n"+"D. Experiment ki taraf se")+"\n",
  answer:"A",
  
},
{
 question:chalk.yellow("Q8.What is the name of the school that Phunsuk Wangdu runs?"+"\n"+"A. It's not specified."+"\n"+"B. The Umbrella Academy"+"\n"+"C. Gurukul"+"\n"+"D. Wangdu Institute of Sciences")+"\n",
 answer:"A"
},
{
  question: chalk.yellow("Q9.Which of the following is not true about the film?"+"\n"+"A. A Mexican remake of the film was made, called 3 Idiotas."+"\n"+"B. The film won 3 National Film Awards."+"\n"+"C. The film incorporated real inventions by Remya Jose, Mohammad Idris,and"+"\n"+"   Jahangir Painter."+"\n"+"D. The film was India's official entry for Oscars.")+"\n",
  answer:"D"
},
];
for( var i=0; i<ques.length;i++)
{ 
  var currentQues=ques[i];
  quiz(currentQues.question,currentQues.answer);
} 
console.log("HURRAY!!, you scored: " + chalk.bold.cyanBright(score));
console.log("")

var player=
{
  name:"Jatin",
  score:5,
}
var player1=
{
  name:"Ram",
  score:9,
}
var highscore=[player,player1];

//Show Array of object data
var usercheck=readlineSync.question("Do you wish to check highscore?");
for(var i=0;i<highscore.length;i++)
{
  var marks=highscore[i];
   if(usercheck== "yes")
  {
   console.log(marks.name)
   console.log(marks.score)
  }
 else
  {
  console.log("Thanks For Playing...");
  }
}

//Show the Highscore
function db()
{
for(var i=0;i<1;i++)
{
if(player.score<player1.score)
if(score>5)
{
  console.log("")
  console.log(chalk.bgGray.bold.yellowBright("CONGRATULATION,YOU HAVE BEATEN THE SCORE!!"))
  console.log( chalk.bgGray.bold.yellowBright("Your Name is= "+ userName))
  console.log(chalk.bgGray.bold.yellowBright("Your HighScore is= "+score))
  console.log(chalk.bgGray.bold.yellowBright("Please send me a screenshot"))
 highscore[0].name=userName;
 highscore[0].score=score;
 update();
}
else
{
  console.log(chalk.bold("OOPS!! YOU  DID NOT BREAK THE RECORD..."))
  
}
}
}
db();

//Update Highscores
function update()
{
   console.log("");
   console.log("Update HighScore:-")
   for(i=0;i<highscore.length;i++)
   {
     highscore[0].name=userName;
     highscore[0].score=score;
     var newScores= highscore[i];
     console.log(newScores.name);
     console.log(newScores.score);
   }
}
console.log(chalk.bold("GoodBye!!Thanks For playing Quiz...."))





   
