// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MetaNexus {
    struct User {
        address userAddress;
        string username;
        bool isRegistered;
    }

    struct Game {
        uint256 gameId;
        string gameName;
        uint256 prizePool;
        bool isActive;
    }

    struct Tournament {
        uint256 tournamentId;
        string tournamentName;
        uint256 entryFee;
        uint256 totalPrize;
        bool isOpen;
    }

    mapping(address => User) public users;
    mapping(uint256 => Game) public games;
    mapping(uint256 => Tournament) public tournaments;

    uint256 public gameCount;
    uint256 public tournamentCount;

    // Register a new user
    function registerUser(string memory _username) public {
        require(!users[msg.sender].isRegistered, "User is already registered.");

        users[msg.sender] = User({
            userAddress: msg.sender,
            username: _username,
            isRegistered: true
        });
    }

    // Create a new game
    function createGame(string memory _gameName, uint256 _prizePool) public {
        gameCount++;
        games[gameCount] = Game({
            gameId: gameCount,
            gameName: _gameName,
            prizePool: _prizePool,
            isActive: true
        });
    }

    // Create a new tournament
    function createTournament(string memory _tournamentName, uint256 _entryFee, uint256 _totalPrize) public {
        tournamentCount++;
        tournaments[tournamentCount] = Tournament({
            tournamentId: tournamentCount,
            tournamentName: _tournamentName,
            entryFee: _entryFee,
            totalPrize: _totalPrize,
            isOpen: true
        });
    }

    // Join a tournament
    function joinTournament(uint256 _tournamentId) public payable {
        require(tournaments[_tournamentId].isOpen, "Tournament is not open.");
        require(msg.value >= tournaments[_tournamentId].entryFee, "Insufficient entry fee.");

        // Logic to add user to the tournament (not shown here)
    }

    // Close a tournament
    function closeTournament(uint256 _tournamentId) public {
        require(tournaments[_tournamentId].isOpen, "Tournament is already closed.");
        tournaments[_tournamentId].isOpen = false;
    }
}
