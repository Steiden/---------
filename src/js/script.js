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

// ! ________________________________Оплата
document.getElementById('paymentButton').addEventListener('click', () => {

	if (closeSelectedSeats(seats) === 0) {

		document.querySelector(".error-text_content").textContent = "Выберите места";
		document.querySelector(".error").classList.add("show-error");
		setTimeout(() => {
			document.querySelector(".error").classList.remove("show-error");
		}, 3000)

	} else {

		// *________________________________Заполнение информацией модалки
		const modalContentInfo = document.querySelector(".modal-content .info");
		modalContentInfo.innerHTML = "";

		const date = document.querySelector(".day.selected input").value;
		const dateInfo = document.createElement('p');
		dateInfo.textContent = `Дата: ${date}`;

		const cinemaInfo = document.createElement('p');
		cinemaInfo.textContent = `Кинотеатр: ${cinemaValue}`;

		const timeInfo = document.createElement('p');
		timeInfo.textContent = `Время: ${timeValue}`;

		const priceInfo = document.createElement('p');
		priceInfo.textContent = `Итоговая сумма: ${totalPayment} ₽`;

		modalContentInfo.appendChild(dateInfo);
		modalContentInfo.appendChild(cinemaInfo);
		modalContentInfo.appendChild(timeInfo);
		modalContentInfo.appendChild(priceInfo);

		// *________________________________Открытие модалки
		document.querySelector(".modal").classList.add("show");

		// *________________________________Обновление свободных мест
		closeSelectedSeats(seats);

		// *________________________________Обновление общей суммы
		totalPayment = 0;
		refreshPayment();
	}
});

// * ________________________________Закрытие модалки
document.querySelector('.modal-close').addEventListener('click', () => {
	document.querySelector(".modal").classList.remove("show");
});

// *________________________________Закрытие уведомления об ошибке
document.querySelector(".error-btn").addEventListener('click', () => {
	document.querySelector(".error").classList.remove("show-error");
});

// !________________________________Обновление общей суммы
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

// !________________________________click на window
window.addEventListener('click', (e) => {
	// *________________________________Закрытие гамбургера вне гамбургера
	if (e.target != document.querySelector('.gamburger')) {
		document.querySelector('.gamburger_menu').classList.remove('show-gamburger');
	}
});

// !________________________________Открытие/закрытие гамбургера
document.querySelector('.gamburger').addEventListener('click', () => {
	document.querySelector('.gamburger_menu').classList.toggle('show-gamburger');
});

// !________________________________onChange на cinema
const cinemaSelect = document.getElementById("cinema");
let cinemaValue = cinemaSelect.value;
cinemaSelect.addEventListener("change", (e) => {
	cinemaValue = cinemaSelect.value;
});

// !________________________________onChange на time
const timeSelect = document.getElementById("time");
let timeValue = timeSelect.value;
timeSelect.addEventListener("change", (e) => {
	timeValue = timeSelect.value;
});