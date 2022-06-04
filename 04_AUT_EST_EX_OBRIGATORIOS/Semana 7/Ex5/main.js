const alunoTemplate = `<div class="student">
<input id="value-test" type="text" placeholder="Nota prova" />
<input id="value-task" type="text" placeholder="Nota trabalho" />
<output></output>
</div>`;

class InternalMaths {
	static arithmeticMean(values) {
		return values.reduce((acc, curr) => acc + curr, 0) / values.length;
	}

	static getHighest(values) {
		return Math.max(...values);
	}

	static getLowest(values) {
		return Math.min(...values);
	}
}

class Students {
	static instanceStudents() {
		let students = document.getElementById('students-container');
		let number_of_students = document.getElementById('students-quantity').value;

		students.innerHTML = '';

		for (let i = 0; i < number_of_students; i++) {
			let student = document.createElement('div');
			student.innerHTML = alunoTemplate;
			students.appendChild(student.firstChild);
		}
	}

	static getStudentsTestValues() {
		let students = document.getElementById('students-container');
		let students_test_values = [];

		students.querySelectorAll('input[id^="value-test"]').forEach((student) => {
			students_test_values.push(parseFloat(student.value));
		});

		return students_test_values;
	}

	static getStudentsTaskValues() {
		let students = document.getElementById('students-container');
		let students_task_values = [];

		students.querySelectorAll('input[id^="value-task"]').forEach((student) => {
			students_task_values.push(parseFloat(student.value));
		});

		return students_task_values;
	}

	static updateEachStudentAverage() {
		let students = document.getElementById('students-container');
		let students_test_values = Students.getStudentsTestValues().map((x) => x * 2);
		let students_task_values = Students.getStudentsTaskValues().map((x) => x * 3);
		let students_average = [];
		let tmp_mean = 0;
		students.querySelectorAll('output').forEach((student_output, index) => {
			tmp_mean = InternalMaths.arithmeticMean([students_test_values[index], students_task_values[index]]);
			student_output.innerHTML = `Média: ${tmp_mean}`;
			students_average.push(tmp_mean);
		});

		return students_average;
	}

	static updateGlobalValues() {
		let general_output = document.getElementById('general-output');
		let tasks_values = Students.getStudentsTaskValues();
		let test_values = Students.getStudentsTestValues();

		general_output.innerHTML = `
			<p>Maior nota do trabalho: ${InternalMaths.getHighest(tasks_values)}</p>
			<p>Menor nota do trabalho: ${InternalMaths.getLowest(tasks_values)}</p>
			<p>Maior nota da prova: ${InternalMaths.getHighest(test_values)}</p>
			<p>Menor nota da prova: ${InternalMaths.getLowest(test_values)}</p>
			<p>Média geral: ${InternalMaths.arithmeticMean(Students.updateEachStudentAverage())}</p>
		`;
	}

	static verifyIfAllStudentsHasValues() {
		let general_output = document.getElementById('general-output');
		let students_test_values = Students.getStudentsTestValues();
		let students_task_values = Students.getStudentsTaskValues();

		if (students_test_values.includes(NaN) || students_task_values.includes(NaN)) {
			general_output.innerHTML = `<p>Preencha todos os campos!</p>`;
			return false;
		}
		return true;
	}
}

document.getElementById('instance-students').addEventListener('click', Students.instanceStudents);
document.getElementById('calculate').addEventListener('click', () => {
	if (Students.verifyIfAllStudentsHasValues()) {
		Students.updateGlobalValues();
	}
});
