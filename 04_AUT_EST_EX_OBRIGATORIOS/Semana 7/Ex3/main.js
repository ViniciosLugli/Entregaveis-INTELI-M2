const STRUCTURE_VERIFIER = ['(', 'number', 'number', ')', 'number', 'number', 'number', 'number', 'number', '-', 'number', 'number', 'number', 'number'];

function verifyPhone() {
	// Formato (XX)XXXXX-XXXX
	let phone = document.getElementById('phone').value;
	let errors = [];
	if (phone.length != 14) {
		errors.push('O número de telefone deve ter 14 dígitos.');
	} else {
		let index = 0;

		for (let i = 0; i < phone.length; i++) {
			if (STRUCTURE_VERIFIER[index] == 'number') {
				if (phone[i] < '0' || phone[i] > '9') {
					errors.push('O número de telefone deve conter apenas dígitos.');
				}
			} else if (STRUCTURE_VERIFIER[index] == '-') {
				if (phone[i] != '-') {
					errors.push('O número de telefone deve conter um traço.');
				}
			} else if (STRUCTURE_VERIFIER[index] == '(') {
				if (phone[i] != '(') {
					errors.push('O número de telefone deve conter um parênteses de abertura.');
				}
			} else if (STRUCTURE_VERIFIER[index] == ')') {
				if (phone[i] != ')') {
					errors.push('O número de telefone deve conter um parênteses de fechamento.');
				}
			}
			index++;
		}
	}

	if (errors.length > 0) {
		document.getElementById('phone').style.borderColor = 'red';
		document.getElementById('phone').style.borderWidth = '6px';
		document.getElementById('result').innerHTML = errors.join('<br>');
	} else {
		document.getElementById('phone').style.borderColor = 'green';
		document.getElementById('phone').style.borderWidth = '6px';
		document.getElementById('result').innerHTML = 'Número de telefone válido.';
	}
}

document.getElementById('action').addEventListener('click', verifyPhone);
