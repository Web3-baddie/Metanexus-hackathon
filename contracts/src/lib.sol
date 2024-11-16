// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library MetaNexusLib {
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

    // Function to validate user registration
    function validateRegistration(User storage user) internal view returns (bool) {
        return !user.isRegistered;
    }

    // Function to validate tournament entry fee
    function validateEntryFee(uint256 sentValue, uint256 requiredFee) internal pure returns (bool) {
        return sentValue >= requiredFee;
    }

    // Function to toggle game status
    function toggleGameStatus(Game storage game) internal {
        game.isActive = !game.isActive;
    }

    // Function to close a tournament
    function closeTournament(Tournament storage tournament) internal {
        require(tournament.isOpen, "Tournament is already closed.");
        tournament.isOpen = false;
    }
}
