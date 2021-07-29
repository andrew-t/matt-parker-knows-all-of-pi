let upperJaw,
	lowerJaw;

document.addEventListener('DOMContentLoaded', e => {
	upperJaw = document.getElementById('face-upper');
	lowerJaw = document.getElementById('face-lower');
});

export function closeMouth() {
	upperJaw.style.transform = 'none';
	lowerJaw.style.transform = 'none';
}

export function openMouth() {
	upperJaw.style.transform = randomJawMotion(-1, -8);
	lowerJaw.style.transform = randomJawMotion(0, 3);
}

function randomJawMotion(offset, multiplier) {
	return randomVertical(offset, multiplier) + ' ' +
		randomRotation();
}

function randomVertical(offset, multiplier) {
	return 'translate(0, ' +
		(offset + Math.random() * multiplier) + 'vh)';
}

function randomRotation() {
	return 'rotate(' +
		(Math.random() * 20 - 10) + 'deg)';
}