// Team object
const team = {
  _players : [{
    firstName : 'Derrick',
    lastName : 'Rose',
    age : 31
  }, {
    firstName : 'Blake',
    lastName : 'Griffin',
    age : 31
  }, {
    firstName : 'Christian',
    lastName : 'Wood',
    age : 24
  }],

  _games : [{
    opponent : 'Mavericks',
    teamPoints : 124,
    opponentPooint : 117
  }, {
    opponent : 'Magic',
    teamPoints : 91,
    opponentPooint : 115
  }, {
    opponent : 'Cavaliers',
    teamPoints : 109,
    opponentPooint : 105
  }],

  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },

  // Adds new player object to players array
  addPlayer(firstName, lastName, age) {
    const newPlayer = {
      firstName,
      lastName,
      age
    };
    this.players.push(newPlayer);
  },

  // Adds new game object to games array
  addGame(oppName, teamPoints, oppPoints) {
    const game = {
      oppName,
      teamPoints,
      oppPoints
    };
    this.games.push(game);
  },
};

// Addition functions invoked
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('76ers', 111, 117);
team.addGame('Hawks', 100, 117);
team.addGame('Pacers', 119, 110);

console.log(team.players);
console.log(team.games);
