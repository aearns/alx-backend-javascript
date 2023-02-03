export function taskFirst() {
	const task = 'I prefer const when I can.';
	return task;
}

export function taskNext() {
	return ' is okay';
}

export function getLast() {
	let combination = 'But sometimes let';
	combination += getLast();

	return combination;
}

