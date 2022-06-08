const chalk = require('chalk');

var readLineSync = require('readline-sync');
var count = 0;

console.log(chalk.bgYellow('Welcome to the Cricket Quiz \n'));

let userName = readLineSync.question(chalk.bgBlue('Please Enter your Name \n'));

let questions = [
    {
        question: 'How many world cups did India Won till now ?' + '\n' + ' a: 3 \n b: 4 \n c: 5 \n d: 2',
        answer: 'a'
    },
    {
        question: 'In which year India has won the 1st T20 worldcup ?' + '\n' + ' a: 2002 \n b: 2007 \n c: 2012 \n d: 2009',
        answer: 'b'
    }
    , {
        question: 'Whom did India played against in the First ever World Test Championship Final ?' + '\n' + ' a: Australia \n b: Pakista \n c: England \n d: Newzeland',
        answer: 'd'
    },
    {
        question: 'How many hundereds virat has across all formats for india ?' + '\n' + ' a: 80 \n b: 71 \n c: 100 \n d: 50',
        answer: 'b'
    },
    {
        question: 'How many times India has beaten Australia in their home soil ?' + '\n' + ' a: 0 \n b: 3 \n c: 2 \n d: 1',
        answer: 'c'
    },
    {
        question: 'Who was awarded as Man of the series for CWC\'11 ?' + '\n' + ' a: Virat Kholi  \n b: Gautam Gambhir \n c: MS Dhoni \n d: Sachin Tendulkar',
        answer: 'b'
    },
    {
        question: 'How many titles RCB has Won till now ?' + '\n' + ' a: 0 \n b: 3 \n c: 2 \n d: 1',
        answer: 'a'
    },
    {
        question: 'Currently how many teams are playing in IPL ?' + '\n' + ' a: 8 \n b: 6 \n c: 12 \n d: 10',
        answer: 'd'
    },
    {
        question: 'Who won IPL emerging player of the year 2022 award ?' + '\n' + ' a: Ravi Bishnoi \n b: Tilak Verma \n c: Umran Malik \n d: Moshin Khan',
        answer: 'c'
    },
    {
        question: 'Who won Fastest delivery of the season award ?' + '\n' + ' a: Lockie Ferguson \n b: Umran Malik \n c: Alzhari Joseph \n d: Karthik Tyagi',
        answer: 'a'
    }
]

function questionBank(questions, num) {
    userAnswer = readLineSync.question(questions[num].question + "\n");
    if (userAnswer === questions[num].answer) {
        count++;
        console.log(chalk.yellowBright("Correct"));
    }
    else {
        count--;
        console.log(chalk.redBright("Wrong"));
    }
}

for (var i = 0; i < questions.length; i++) {
    questionBank(questions, i);
}

console.log(chalk.bgYellow('Your Score is : ' + count));
