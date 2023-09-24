export function closeSelectedSeats(seats) {
	for (let i = 0; i < seats.length; i++) {
		if (seats[i].classList.contains('selected')) {
			seats[i].classList.remove('selected');
			seats[i].classList.add('closed');
			seats[i].innerHTML = `<img src="src/svg/seat-close.svg" alt="seat-close">`;
		}
	}
}