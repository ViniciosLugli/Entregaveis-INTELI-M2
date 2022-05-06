const GRAVITY = 10; // m/s^2

function caculate_physic() {
	let initialVelocity = parseFloat(document.getElementById('initial-velocity').value);

	let max_time = initialVelocity / GRAVITY;
	let max_height = Math.pow(initialVelocity, 2) / (2 * GRAVITY);

	document.getElementById('max-height').innerHTML = `Max height: ${max_height.toFixed(2)} meters`;
	document.getElementById('max-time').innerHTML = `Max time: ${max_time.toFixed(2)} seconds`;
}
