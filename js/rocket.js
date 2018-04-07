var timer = null;
var countdownNumber = 10;

var changeState = function (state) {
	document.body.className = 'body-state' + state;
	clearInterval(timer);
	countdownNumber = 10;
	document.getElementById('countdown').innerHTML = countdownNumber;
			countdownNumber = countdownNumber

	if (state == 2) {
		timer = setInterval(function() {
			countdownNumber = countdownNumber - 1;

			document.getElementById('countdown').innerHTML = countdownNumber;

			if (countdownNumber <= 0) {
			changeState(3)
			};
		}, 200);	
	}
	else if (state == 3) {
		var success = setTimeout(function ()
		{
			var randomNumber = Math.round(Math.random()*10)

			console.log('randomNumber:' , randomNumber)

			if (randomNumber > 9) {
				changeState(4)
			}
			else {
				changeState(5)
			}
		}, 1000);
	}
}