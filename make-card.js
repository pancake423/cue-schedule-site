function createMatchCard(m) {
	card = document.createElement("div");
	mainInfo = document.createElement("div");
	subInfo = document.createElement("div");
	timeInfo = document.createElement("div");

	card.className = "vert match-card";
	mainInfo.className = "horiz middle-info";
	subInfo.className = "horiz bottom-info";
	timeInfo.className = "horiz top-info";

	card.appendChild(timeInfo);
	card.appendChild(mainInfo);
	card.appendChild(subInfo);

	team1Logo = document.createElement("img");
	team2Logo = document.createElement("img");
	team1Logo.className = "logo-img";
	team2Logo.className = "logo-img";
	team1Logo.src = m.team1Logo;
	team2Logo.src = m.team2Logo;

	team1Name = document.createElement("h2");
	team2Name = document.createElement("h2");
	team1Name.className = "team-name";
	team2Name.className = "team-name";
	team1Name.innerText = m.team1Name;
	team2Name.innerText = m.team2Name;

	team1Score = document.createElement("h1");
	team2Score = document.createElement("h1");
	team1Score.innerText = m.team1Score;
	team2Score.innerText = m.team2Score;

	leagueName = document.createElement("p");
	leagueName.innerText = m.leagueName;

	weekOrRound = document.createElement("p");
	weekOrRound.innerText = m.weekOrRound;

	bestOf = document.createElement("p");
	bestOf.innerText = m.bestOf;

	matchLocation = document.createElement("p");
	matchLocation.innerText = m.matchLocation;

	videoLink = document.createElement("a");
	videoLink.innerText = m.videoLink;

	matchDate = document.createElement("p");
	matchDate.innerText = m.matchDate;
	matchTime = document.createElement("p");
	matchTime.innerText = hoursToString(m.matchTime);

	timeInfo.appendChild(matchDate);
	timeInfo.appendChild(matchTime);

	mainInfo.appendChild(team1Logo);
	mainInfo.appendChild(team1Name);
	mainInfo.appendChild(team1Score);
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