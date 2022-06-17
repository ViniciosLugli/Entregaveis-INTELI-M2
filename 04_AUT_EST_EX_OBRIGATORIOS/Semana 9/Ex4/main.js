document.getElementById('action').addEventListener('click', () => {
	let n = document.getElementById('n').value;

	let fibonacci = [1, 1];

	for (let i = 2; i < n; i++) {
		fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
	}

	document.getElementById('result').value = `A série de Fibonacci até o ${n}º termo é ${fibonacci.join(', ')}`;
});
