function createMatchCard(m) {
	const card = document.createElement("div");
	const mainInfo = document.createElement("div");
	const subInfo = document.createElement("div");
	const timeInfo = document.createElement("div");

	let dateComp = compareDate(getCurrentDate(), m.matchDate);
	let cardShadow = "shadow-complete";
	if (dateComp < 0) {
		cardShadow = "shadow-upcoming";
	} else if (dateComp == 0) {
		cardShadow = "shadow-today";
	}
	card.className = "vert match-card " + cardShadow;
	//m.cardColor
	mainInfo.className = `horiz middle-info ${m.cardColor}`;
	subInfo.className = "horiz bottom-info";
	timeInfo.className = "horiz top-info";

	card.appendChild(timeInfo);
	card.appendChild(mainInfo);
	card.appendChild(subInfo);

	const team1Logo = document.createElement("img");
	const team2Logo = document.createElement("img");
	team1Logo.className = "logo-img";
	team2Logo.className = "logo-img";
	team1Logo.src = m.team1Logo;
	team2Logo.src = m.team2Logo;

	const team1Name = document.createElement("h2");
	const team2Name = document.createElement("h2");
	team1Name.className = "team-name";
	team2Name.className = "team-name";
	team1Name.innerText = m.team1Name;
	team2Name.innerText = m.team2Name;

	const team1Score = document.createElement("h1");
	const team2Score = document.createElement("h1");
	team1Score.innerText = m.team1Score;
	team2Score.innerText = m.team2Score;

	const spacer = document.createElement("div");
	spacer.style.width = "10rem";

	const leagueName = document.createElement("p");
	leagueName.innerText = m.leagueName;

	const weekOrRound = document.createElement("p");
	weekOrRound.innerText = m.weekOrRound;

	const bestOf = document.createElement("p");
	bestOf.innerText = "Bo" + m.bestOf;

	const matchLocation = document.createElement("p");
	matchLocation.innerText = m.matchLocation;

	let videoLink;
	if (isValidUrl(m.videoLink)) {
		videoLink = document.createElement("a");
		videoLink.innerText = m.videoLink;
		videoLink.href = m.videoLink;
	} else {
		videoLink = document.createElement("p");
		videoLink.innerText = m.videoLink;
	}

	const matchDate = document.createElement("p");
	matchDate.innerText = m.matchDate;
	const matchTime = document.createElement("p");
	matchTime.innerText = hoursToString(m.matchTime);

	timeInfo.appendChild(matchDate);
	timeInfo.appendChild(matchTime);

	mainInfo.appendChild(team1Logo);
	mainInfo.appendChild(team1Name);
	mainInfo.appendChild(team1Score);
	mainInfo.appendChild(spacer);
	mainInfo.appendChild(team2Score);
	mainInfo.appendChild(team2Name);
	mainInfo.appendChild(team2Logo);

	subInfo.appendChild(leagueName);
	subInfo.appendChild(weekOrRound);
	subInfo.appendChild(bestOf);
	subInfo.appendChild(matchLocation)
	subInfo.appendChild(videoLink);
	

	return card;
}