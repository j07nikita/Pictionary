class Player {
	
    constructor(playerName, isAdmin) {
        this.playerName = playerName;
        this.isAdmin = isAdmin;
        this.points = 0;
        this.scoketId = 0;
    }
}

module.exports = Player
