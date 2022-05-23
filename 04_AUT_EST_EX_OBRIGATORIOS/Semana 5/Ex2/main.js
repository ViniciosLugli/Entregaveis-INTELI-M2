const MONEY_CELLS_VALUE = [100, 50, 20, 10, 5, 1];

function moneyCellsToHeader(moeney_cells) {
	let header = '';
	for (const [cell_value, quantity] of Object.entries(moeney_cells)) {
		if (quantity > 0) {
			header += `${cell_value}R$ x ${quantity}<br>`;
		}
	}
	return header;
}

function main() {
	let number = document.getElementById('num').value;

	let money_cells = {
		100: 0,
		50: 0,
		20: 0,
		10: 0,
		5: 0,
		1: 0,
	};

	MONEY_CELLS_VALUE.forEach((CELL_VALUE) => {
		while (number >= CELL_VALUE) {
			number -= CELL_VALUE;
			money_cells[CELL_VALUE]++;
		}
	});

	document.getElementById('result').innerHTML = moneyCellsToHeader(money_cells);
}

document.getElementById('action').addEventListener('click', main);
