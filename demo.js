(function(){
    // Functions
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
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults()
    {
  
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
    //   resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;

    if (numCorrect < 2){
      resultsContainer.innerHTML=`<h3> You scored ${numCorrect}/${myQuestions.length} &#9996 </h3> 
      <h1 id="h">Better Luck Next Time!</h1>
      <button class="btn"onclick="location.reload()"> play Again </button>`
      resultsContainer.classList.remove("scoreArea"); 
    }
    else 
    {
      resultsContainer.innerHTML=`<h3> You scored ${numCorrect}/${myQuestions.length} &#9996 </h3> 
      <h1 id="ok">🏆Congratulations!🏆 </h1>
      <button class="btn"onclick="location.reload()"> play Again </button>`
      resultsContainer.classList.remove("scoreArea"); 
    }

   
        
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "Q1: What is the full form of HTML?",
        answers: {
          a: "Hello To My Land",
          b: "Hey Text Markup Language",
          c: "HyperText Makeup Language",
          d: "Hypertext Markup Language",
        },
        correctAnswer: "d"
      },
      {
        question: "Q2: Which one of these is a JavaScript package manager?",
        answers: {
          a: "Node.js",
          b: "TypeScript",
          c: "npm"
        },
        correctAnswer: "c"
      },
      {
        question: "Q3: What is the full form of CSS?",
        answers: {
          a: "Cascading Style Sheets",
          b: "Cascading Style Sheep",
          c: "Cartoon Style Sheets",
          d: "Cascading Super Sheets", 
        },
        correctAnswer: "a"
      },
      {
        question: "Q4: What is the full form of JS?",
        answers: {
          a: "JavaScript",
          b: "JavaSuper",
          c: "JustScript",
          d: "JordenShoes",
        },
        correctAnswer: "a"
      },
      
      {
        question: "Q5: Which tool can you use to ensure code quality?",
        answers: {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "ESLint"
        },
        correctAnswer: "d"
      }
    ];
  
    // Kick things off
    buildQuiz();
  
    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    // Show the first slide
    showSlide(currentSlide);
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
  























  




  // Click "Congratulations!" to play animation

// $(function() {
// 	var numberOfStars = 20;
	
// 	for (var i = 0; i < numberOfStars; i++) {
// 	  $('.congrats').append('<div class="blob fa fa-star ' + i + '"></div>');
// 	}	

// 	animateText();
	
// 	animateBlobs();
// });

// $('.congrats').click(function() {
// 	reset();
	
// 	animateText();
	
// 	animateBlobs();
// });

// function reset() {
// 	$.each($('.blob'), function(i) {
// 		TweenMax.set($(this), { x: 0, y: 0, opacity: 1 });
// 	});
	
// 	TweenMax.set($('h1'), { scale: 1, opacity: 1, rotation: 0 });
// }

// function animateText() {
// 		TweenMax.from($('h1'), 0.8, {
// 		scale: 0.4,
// 		opacity: 0,
// 		rotation: 15,
// 		ease: Back.easeOut.config(4),
// 	});
// }
	
// function animateBlobs() {
	
// 	var xSeed = _.random(350, 380);
// 	var ySeed = _.random(120, 170);
	
// 	$.each($('.blob'), function(i) {
// 		var $blob = $(this);
// 		var speed = _.random(1, 5);
// 		var rotation = _.random(5, 100);
// 		var scale = _.random(0.8, 1.5);
// 		var x = _.random(-xSeed, xSeed);
// 		var y = _.random(-ySeed, ySeed);

// 		TweenMax.to($blob, speed, {
// 			x: x,
// 			y: y,
// 			ease: Power1.easeOut,
// 			opacity: 0,
// 			rotation: rotation,
// 			scale: scale,
// 			onStartParams: [$blob],
// 			onStart: function($element) {
// 				$element.css('display', 'block');
// 			},
// 			onCompleteParams: [$blob],
// 			onComplete: function($element) {
// 				$element.css('display', 'none');
// 			}
// 		});
// 	});
// }