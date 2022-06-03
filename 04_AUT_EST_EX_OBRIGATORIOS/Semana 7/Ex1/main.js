function increment() {
	document.getElementById('products').value++;
}

function decrement() {
	if (document.getElementById('products').value - 1 <= 0) {
		document.getElementById('products').value = 0;
		return;
	}
	document.getElementById('products').value--;
}

document.getElementById('increment').addEventListener('click', increment);
document.getElementById('decrement').addEventListener('click', decrement);
