(function(){
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">                
                ${currentQuestion.answers[letter]}
              </label><br>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
    var option=1;
    function showResults(){
      if (option==1){
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll('.answers');
    
        // keep track of user's answers
        let numCorrect = 0;
    
        // for each question...
        myQuestions.forEach( (currentQuestion, questionNumber) => {
    
          // find selected answer
          const answerContainer = answerContainers[questionNumber];
          const selector = `input[name=question${questionNumber}]:checked`;
          const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    
          // if answer is correct
          if(userAnswer === currentQuestion.correctAnswer){
            // add to the number of correct answers
            numCorrect++;
    
            // color the answers green
            answerContainers[questionNumber].style.color = 'lightgreen';
          }
          // if answer is wrong or blank
          else{
            // color the answers red
            answerContainers[questionNumber].style.color = 'red';
          }
        });
    
        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
        var submitId = document.getElementById('submit');
        submitId.innerHTML = 'Next';  
        submitId.style.marginLeft = " 41.5%";  
        option=2;
      }
      else 
      {
        window.location.href="Thank.php";
      }
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "Jim Clarke drove for which team?",
        answers: {
          a: "Lotus",
          b: "Maseratti",
          c: "McLaren",
          d: "Williams"
        },
        correctAnswer: "a"
      },
      {
        question: "Who won the 2007 World Driver' Championship",
        answers: {
          a: "Lewis Hamilton",
          b: "Fernando Alonso",
          c: "Kimi Raikkonen",
          d: "Jenson Button"
        },
        correctAnswer: "c"
      },
      {
        question: "Who won at Valencia in 2012?",
        answers: {
          a: "Michael Schumacher",
          b: "Fernando Alonso",
          c: "Sebastian Vettel",
          d: "Mark Webber"
        },
        correctAnswer: "b"
      },
      {
        question: "How many titles does Lewis Hamilton have, as of now?",
        answers: {
          a: "7",
          b: "6",
          c: "4",
          d: "2"
        },
        correctAnswer: "a"
      },
      {
        question: "When did F1 racing started?",
        answers: {
          a: "1950",
          b: "1960",
          c: "1945",
          d: "1959"
        },
        correctAnswer: "a"
      },
      {
        question: "What engines are being used in F1, as of now?",
        answers: {
          a: "V12",
          b: "V6",
          c: "V6-Hybrid",
          d: "V10"
        },
        correctAnswer: "c"
      },
      {
        question: "Who invented DAS(Dual Axis Steering)?",
        answers: {
          a: "Ferrari",
          b: "Racing Point",
          c: "Red Bull",
          d: "Mercedes"
        },
        correctAnswer: "d"
      },
      {
        question: "How many Grand-Prix did Schumacher win?",
        answers: {
          a: "45",
          b: "87",
          c: "90",
          d: "91"
        },
        correctAnswer: "d"
      },
      {
        question: "When did the first night race in F1 took place?",
        answers: {
          a: "2008",
          b: "2009",
          c: "2004",
          d: "2010"
        },
        correctAnswer: "a"
      },
      {
        question: "Where did Niki Lauda's Car caught Fire in the middle of the race and he was taken to the hospital?",
        answers: {
          a: "Zolder",
          b: "Nuburing",
          c: "Spa-Francorchamps",
          d: "Monza"
        },
        correctAnswer: "b"
      }
    ];
  
    // Kick things off
    buildQuiz();
  
    // Event listeners
    
    submitButton.addEventListener('click', showResults);
  })();