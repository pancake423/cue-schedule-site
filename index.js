/*
create a match card for every match contained in data.
ensure that the cards are sorted by date.
scroll the page so that the first card visible is the next upcoming match.
*/

window.onload = () => {
	const parent = document.querySelector("#page-body");
	const currentDate = getCurrentDate();
	const currentTime = getCurrentHour();

	const matchList = DATA.toSorted((a, b) => {
		return Math.sign(compareDate(a.matchDate, b.matchDate) * 2 + (a.matchTime - b.matchTime))
	});


	var scrollIndex = matchList.findIndex((e) => compareDate(currentDate, e.matchDate) * 2 + (currentTime - e.matchTime) >= 0) - 2
	if (scrollIndex < 0) scrollIndex = 0;

	const cardList = matchList.map((m) => createMatchCard(m))
	cardList.forEach((n) => parent.appendChild(n));

	cardList[scrollIndex].scrollIntoView(true);
}

