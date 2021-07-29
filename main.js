import nextDigit from "./pi.js";
import { openMouth } from './face.js';

const sound = new Audio('sound.ogg');

const clips = {
	0: { from: 0, to: 0.603 },
	1: { from: 0.975, to: 1.661 },
	2: { from: 1.811, to: 2.873 },
	3: { from: 3.047, to: 3.981 },
	4: { from: 4.174, to: 4.972 },
	5: { from: 5.279, to: 6.213 },
	6: { from: 6.316, to: 7.016 },
	7: { from: 7.176, to: 7.598 },
	8: { from: 7.825, to: 8.322 },
	9: { from: 8.522, to: 9.260 },
	point: { from: 9.509, to: 9.998 }
}

function playClip(clip) {
	sound.currentTime = clip.from;
	sound.play();
	return new Promise(resolve => {
		stopIfPastTo();
		function stopIfPastTo() {
			const timeLeft = clip.to - sound.currentTime;
			if (timeLeft <= 0) {
				sound.pause();
				resolve();
			} else
				setTimeout(stopIfPastTo, timeLeft * 1000);
		}
	});
}

const start = document.getElementById('start');
start.addEventListener('click', async e => {
	document.body.removeChild(start);
	await sayDigit(nextDigit());
	await sayDigit('point');
	while (true) await sayDigit(nextDigit());
});

function sayDigit(digit) {
	console.log(digit);
	openMouth();
	return playClip(clips[digit]);
}
