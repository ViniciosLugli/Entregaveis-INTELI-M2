document.getElementById('action').addEventListener('click', () => {
	let n1 = document.getElementById('number1').value;
	let n2 = document.getElementById('number2').value;

	let prime_numbers = [];
	for (let n = n1; n <= n2; n++) {
		let is_prime = true;

		for (let i = 2; i < n; i++) {
			if (n % i === 0) {
				is_prime = false;
				break;
			}
		}

		if (is_prime) {
			prime_numbers.push(n);
		}
	}

	document.getElementById('result').value = `Os números primos no intervalo [${n1}, ${n2}] são ${prime_numbers.join(', ')}`;
});
