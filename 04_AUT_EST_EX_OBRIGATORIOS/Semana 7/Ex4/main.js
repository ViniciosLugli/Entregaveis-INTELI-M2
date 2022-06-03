const COST_PERIOD = {
	NOCTURNAL: 100,
	DIURNAL: 200,
};

function calcular() {
	let quantity = document.getElementById('quantity').value;
	let period = document.getElementById('period').value;

	if (quantity == '' || period == '') {
		document.getElementById('result').value = 'Preencha todos os campos.';
		return;
	}

	let cost = 0;

	if (period === 'noturno') {
		if (quantity > 50) {
			cost = quantity * COST_PERIOD.NOCTURNAL * 0.6;
		}
	} else if (period === 'diurno') {
		if (quantity > 50) {
			cost = quantity * COST_PERIOD.DIURNAL * 0.8;
		}
	}

	document.getElementById('result').value = cost;
}
document.getElementById('action').addEventListener('click', calcular);
