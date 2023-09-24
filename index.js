/*
Read match data from a database or static file, and load it into the website at runtime.
Allow user to filter which matches are displayed based on a number of criteria.

Required:
Home Team
Away Team
Match scores
Date and time
location
league or tournament
Round or week information
twitch stream or location

Optional:
Team rosters
game scores
VOD link (ASK ABOUT PERMANENT VODS!)
*/

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

	leagueName = document.createElement("p");
	weekOrRound = document.createElement("p");
	bestOf = document.createElement("p");
	matchLocation = document.createElement("p");
	videoLink = document.createElement("a");
	videoType = ""; // stream, vod, none

	matchDate = document.createElement("p");
	matchTime = document.createElement("p");

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

