function hoursToString(hrs) {
	return `${(hrs - 1) % 12 + 1}:00 ${ hrs < 12 ? "AM":"PM"} Eastern`
}

//compares dates represented as a string of "m/d/y" aka dumb american format
//returns -1 if a < b, 0 if a=b, 1 if a>b
function compareDate(a, b) {
	[aM, aD, aY] = a.split("/");
	[bM, bD, bY] = b.split("/");

	const comp = (bY - aY) * 4 + (bM - aM) * 2 + (bD - aD);

	return Math.sign(comp);
}

//gets the current date and time and returns it as a string. completely ignores time zones because
//everyone I want to share this with is eastern or central time
function getCurrentDate() {
	const time = new Date(Date.now());
	return `${time.getMonth() + 1}/${time.getDate()}/${time.getFullYear()}`;
}

function getCurrentHour() {
	const time = new Date(Date.now());
	return time.getHours();
}