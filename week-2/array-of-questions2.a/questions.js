//Array of questions
const myQuiz = [
    {
        question: "What do you use to color that comes in a box of 24?",
        answer: "Crayons"
    },
    {
        question: "What do your call art made by folding paper, that comes from Japan?",
        answer: "Origami"
    },
    {
        question: "Wha do artist use to remove pencil marks from paper?",
        answer: "An eraser"
    }

]
console.log("Hello, please answer the following question: ", myQuiz[0].question);

//Generating random question
const myRandomQues = Math.floor (Math.random() * myQuiz.length);
console.log(myRandomQues);

//Creating prompt
const userQuestion = window.prompt(myQuiz[myRandomQues].question);



