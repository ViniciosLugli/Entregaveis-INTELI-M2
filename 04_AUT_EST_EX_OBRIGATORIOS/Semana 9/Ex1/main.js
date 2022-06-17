document.getElementById('action').addEventListener('click', () => {
	let number = document.getElementById('number').value;

	let centena = String(number).substring(0, 1);

	document.getElementById('result').value = centena % 2 === 0 ? 'O digito da centena é par' : 'O digito da centena é impar';
});
