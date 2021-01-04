var players = [
    { name: "Sunilgavasker", debue: 1974, retired: 1987, runs: 10122 },
    { name: "Rahuldravid", debue: 1996, retired: 2011, runs: 10889 },
    { name: "Sachintendulkar", debue: 1989, retired: 2012, runs: 18426 },
    { name: "yuvarajsingh", debue: 2000, retired: 2017, runs: 8701 },
    { name: "MSDhoni", debue: 2004, retired: 2019, runs: 10773 },
    { name: "Souravganguly", debue: 1992, retired: 2007, runs: 11363 },
    { name: "VirenderSehwag", debue: 1999, retired: 2013, runs: 8273 },
    { name: "GautamGambhir", debue: 2003, retired: 2013, runs: 5238 }

]
console.log("Name of the players");
players.forEach(player => console.log(player.name.toUpperCase()));
console.log("Players who  have more than 8 years experience")
players.filter(player => (player.retired - player.debue) > 8).forEach(player => console.log(player.name))
console.log("Players with highest ODI runs")
var runs = players.map(player => player.runs).
    reduce((run1, run2) => run1 > run2 ? run1 : run2);
players.filter(player=>player.runs==runs).forEach(player=>console.log(player));


