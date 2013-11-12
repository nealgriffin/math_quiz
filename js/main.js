$(document).ready(function() {
	console.log("good to see you neal");
	
	
	
	
	function mathGame () {
		var firstNumber = 0;
		var secondNumber = 0;
		var actualAnswer = 0;
		var questionsAnswered = 0;
		var correctAnswers = 0;
		
		
		var _setNumbers = function() {
			firstNumber = Math.floor(Math.random() * 9);
			secondNumber = Math.floor(Math.random() * 9);
			actualAnswer = firstNumber * secondNumber;
			//console.log(actualAnswer);
			
		};
		var _updateUI = function() {
			$('#firstNumber').html(firstNumber);
			$('#secondNumber').html(secondNumber);
			$('#answer').val("");
			$('#progress').html(correctAnswers + " of " + questionsAnswered)
		}
		var _nextQuestion = function() {
			_setNumbers();
			_updateUI();
		}
		
		_setNumbers();
		_updateUI();
		
		this.compareAnswer = function(playerAnswer) {
			questionsAnswered++;
			console.log(questionsAnswered);
			var playerAnswerInt = parseInt(playerAnswer);
			if (playerAnswerInt === actualAnswer) {
				$('#feedback').html("Correct");
				correctAnswers++;
			} else { 
				$('#feedback').html("Incorrect");
			};
			_nextQuestion();
		};
		var secT = 10;
		var minT = 0;
		
		function countDownTimer() {
			secT--;
			if (secT == -01) {
				secT = 59;
				minT = minT - 1; }
			else {
				minT = minT; }
			if (secT<=9) { secT = "0" + secT; }
			timeT = (minT<=9 ? "0" + minT : minT) + " min and " + secT + " sec ";

			//if (document.getElementById) { document.getElementById('theTimeT').innerHTML = timeT; }
			$('#timer').html(timeT);

			var myTimeout = setTimeout(function() { countDownTimer();}, 1000);
			if (minT == '00' && secT == '00') { 
				secT = "00";
				window.clearTimeout(myTimeout);
				_stopGame();
			}
		};
		countDownTimer();
		var _stopGame = function() {
			$('#answerButton').hide();
			$('#feedback').html("Game Over!");
			$('#newGame').show();
			
		};
	}
	var myGame = null;
	$('#newGame').click(function() {
		myGame = new mathGame();
		$('#newGame').hide();
		$('#answerButton').show();
	});
	
	$('#answerButton').click(function()  {
		myGame.compareAnswer($('#answer').val());
	});
	
	var firstNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	
	function combinations(numArr, choose) {
		var questionPairs = new Array();
	    var n = numArr.length;
	    var c = [];
	    var inner = function(start, choose_) {
	        if (choose_ == 0) {
	            questionPairs.push(c);
	        } else {
	            for (var i = start; i <= n - choose_; ++i) {
	                c.push(numArr[i]);
	                inner(i + 1, choose_ - 1);
	                var something = c.pop();
	            }
	        }
	    }
	    inner(0, choose);
		return questionPairs;
	}

	var questionPairs = combinations(firstNumber, 2);


	
	
	
	
	
});
