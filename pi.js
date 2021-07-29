// multiply 2x2 matrix a by matrix b
function comp(a,b) {
	return [
		a[0]*b[0] + a[1]*b[2],
		a[0]*b[1] + a[1]*b[3],
		a[2]*b[0] + a[3]*b[2],
		a[2]*b[1] + a[3]*b[3],
	];
}

let state = [1n, 0n, 0n, 1n];
let i = 1n;

export default function nextDigit() {
	while (true) {
		const x = 27n * i - 12n;
		const y = (state[0]*x + 5n*state[1]) / (state[2]*x + 5n*state[3]);
		const x2 = 675n * i - 216n;
		const z = (state[0]*x2 + 125n*state[1]) / (state[2]*x2 + 125n*state[3]);
		if (y == z) {
			state = comp([10n, y*-10n, 0n, 1n], state);
			return y;
		}
		const j = 3n*(3n*i+1n)*(3n*i+2n);
		state = comp(state, [i*(2n*i-1n), j*(5n*i-2n), 0n, j]);
		i += 1n;
	}
}
