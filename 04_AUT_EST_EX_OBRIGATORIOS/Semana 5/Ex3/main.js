function bubbleSort(list) {
	let swapping = true;

	while (swapping) {
		swapping = false;

		for (let i = 0; i < list.length - 1; i++) {
			if (list[i] > list[i + 1]) {
				let temp = list[i];
				list[i] = list[i + 1];
				list[i + 1] = temp;
				swapping = true;
			}
		}
	}

	return list;
}

function main() {
	let list = document.getElementById('list').value.split(',').map(Number);
	let focus = parseInt(document.getElementById('focus').value);

	if (list.indexOf(focus) === -1) {
		document.getElementById('result').value = 'Item de foco não encontrado na lista';
		return;
	}

	document.getElementById('list').value = bubbleSort(list).join(',');

	document.getElementById('result').value = `O número ${focus} está na ${list.indexOf(focus) + 1}° posição`;
}

document.getElementById('action').addEventListener('click', main);
