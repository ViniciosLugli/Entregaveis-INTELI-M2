function swap() {
	[document.getElementById('value1').value, document.getElementById('value2').value] = [document.getElementById('value2').value, document.getElementById('value1').value];
}

document.getElementById('action').addEventListener('click', swap);
