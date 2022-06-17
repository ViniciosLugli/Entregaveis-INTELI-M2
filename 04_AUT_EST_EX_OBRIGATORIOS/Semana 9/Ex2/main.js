document.getElementById('action').addEventListener('click', () => {
	let number = document.getElementById('number').value;

	let sum = 0;
	for (let i = 0; i < number.length; i++) {
		sum += Number(String(number)[i]);
	}

	document.getElementById('result').value = `A soma dos digitos é ${sum}`;
});
