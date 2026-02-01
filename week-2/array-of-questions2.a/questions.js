//Array of questions
const myQuiz = [
    {
        question: "What do you use to color that comes in a box of 24?",
        answer: "crayons"
    },
    {
        question: "What do your call art made by folding paper, that comes from Japan?",
        answer: "origami"
    },
    {
        question: "Wha do artist use to remove pencil marks from paper?",
        answer: "eraser"
    }

]

//Generating random question
const myRandomQues = Math.floor (Math.random() * myQuiz.length);


//Creating prompt windows
const userQues= window.prompt(myQuiz[myRandomQues].question);

const userResponse = "You responded " + userQues + ". The correct answer was " + myQuiz[myRandomQues].answer;

window.alert(userResponse);

console.log(userResponse);


