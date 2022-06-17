document.getElementById('action').addEventListener('click', () => {
	// Crie uma página web na qual o usuário informe um número inteiro positivo e quando o usuário indicar que deseja que o cálculo seja realizado (pressionar um botão), seja exibida a soma de seus dígitos.
	let names = document.getElementsByClassName('name');
	let output_names = [];

	for (let i = 0; i < names.length; i++) {
		output_names.push(names[i].value);
	}

	output_names.sort();

	document.getElementById('result').value = `Nomes ordenados: ${output_names.join(', ')}`;
});
