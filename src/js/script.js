import { closeSelectedSeats } from './modules/payment.mjs';

const seats = document.querySelectorAll('.seat');
const paymentText = document.querySelector('.totalPayment');
let totalPayment = 0;

// *________________________________Выбор места
for (let i = 0; i < seats.length; i++) {
	seats[i].addEventListener('click', () => {
		if (seats[i].classList.contains('close')) { }
		else if (seats[i].classList.contains('selected')) {
			seats[i].classList.remove('selected');
			seats[i].innerHTML = `<img src="src/svg/seat.svg" alt="seat">`;
			totalPayment -= 800;
		} else {
			seats[i].classList.add('selected');
			seats[i].innerHTML = `<img src="src/svg/seat-selected.svg" alt="seat-selected">`;
			totalPayment += 800;
		}
		refreshPayment();
	});
}

// * ________________________________Оплата
const paymentButton = document.getElementById('paymentButton').addEventListener('click', () => {
	closeSelectedSeats(seats);
	totalPayment = 0;
	refreshPayment();
});

// *________________________________Обновление общей суммы
function refreshPayment() {
	paymentText.textContent = totalPayment;
}

// *________________________________Выбор дня фильма
const dayButtons = document.querySelectorAll(".day");
let daySelected = document.querySelector('.day.selected');
for (let i = 0; i < dayButtons.length; i++) {
	dayButtons[i].addEventListener('click', () => {
		daySelected.classList.remove('selected');
		daySelected = dayButtons[i];
		daySelected.classList.add('selected');
	});
}

// *________________________________Открытие/закрытие гамбургера
document.querySelector('.gamburger').addEventListener('click', () => {
	document.querySelector('.gamburger_menu').classList.toggle('open');
});