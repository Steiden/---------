const seats = document.querySelectorAll('.seat');

let totalPayment = 0;

for (let i = 0; i < seats.length; i++) {
	seats[i].addEventListener('click', () => {
		if (seats[i].classList.contains('close')) { }
		else if (seats[i].classList.contains('selected')) {
			seats[i].classList.remove('selected');
			seats[i].innerHTML = `<img src="src/svg/seat.svg" alt="seat">`;
			totalPayment -= 800;
			refreshPayment();
		} else {
			seats[i].classList.add('selected');
			seats[i].innerHTML = `<img src="src/svg/seat-selected.svg" alt="seat-selected">`;
			totalPayment += 800;
			refreshPayment();
		}
	});
}

const paymentButton = document.getElementById('paymentButton').addEventListener('click', () => {
	for (let i = 0; i < seats.length; i++) {
		if (seats[i].classList.contains('selected')) {
			seats[i].classList.remove('selected');
			seats[i].classList.add('close');
			seats[i].innerHTML = `<img src="src/svg/seat-close.svg" alt="seat-close">`;
		}
	}
	totalPayment = 0;
	refreshPayment();
});

function refreshPayment() {
	document.querySelector(".totalPayment").textContent = totalPayment;
}