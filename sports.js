const sportsData = `id, team, player
1, NBA > Western Conference > Golden State Warriors, Stephen Curry
2, NFL > NFC > San Francisco 49ers, Deebo Samuel
4, NBA > Eastern Conference > Milwaukee Bucks, Giannis Antetokounmpo
5, NBA > Western Conference > Golden State Warriors, Klay Thompson
6, NBA > Western Conference > Golden State Warriors, Draymond Green
7, NFL > AFC > Cincinatti Bengals, Joe Burrow
8, NBA > Eastern Conference > Milwaukee Bucks, Khris Middleton
8, NFL > NFC > San Francisco 49ers, Brandon Aiyuk
9, NFL > NFC > San Francisco 49ers, Jimmy Garoppolo
10, NFL > NFC > San Francisco 49ers, Trey Lance`;

const result = makeDir({}, sportsData);
console.log({ result });
console.log(JSON.stringify(result))

function makeDir(sportsDir, data) {

  const csv = data.split("\n");
  for (let i = 0; i < csv.length; i++) {
    if (i === 0) continue;
    const [id, group, player] = csv[i].split(", ");
    const [league, conf, team] = group.split(" > ");
    if (!sportsDir[league]) {
      sportsDir[league] = {};
    }
    if (!sportsDir[league][conf]) {
      sportsDir[league][conf] = {};
    }
    if (!sportsDir[league][conf][team]) {
      sportsDir[league][conf][team] = [];
    }
    const playerExistsOnTeam = sportsDir[league][conf][team].find( existingPlayerName => existingPlayerName === player )

    if (!playerExistsOnTeam) {
      sportsDir[league][conf][team].push(player);
    }
  }
  return sportsDir;
}


