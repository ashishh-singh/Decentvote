// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    struct Candidate {
        string name;
        uint256 voteCount;
    }

    mapping(address => bool) public hasVoted;
    mapping(string => Candidate) private candidates;
    string[] public candidateNames;

    constructor(string[] memory _candidateNames) {
        for (uint i = 0; i < _candidateNames.length; i++) {
            string memory name = _candidateNames[i];
            candidates[name] = Candidate(name, 0);
            candidateNames.push(name);
        }
    }

    function vote(string memory _candidateName) public {
        require(!hasVoted[msg.sender], "You have already voted");
        require(candidateExists(_candidateName), "Invalid candidate");

        candidates[_candidateName].voteCount += 1;
        hasVoted[msg.sender] = true;
    }

    function getVotes(string memory _candidateName) public view returns (uint256) {
        require(candidateExists(_candidateName), "Candidate not found");
        return candidates[_candidateName].voteCount;
    }

    function getAllCandidates() public view returns (string[] memory) {
        return candidateNames;
    }

    function candidateExists(string memory _name) internal view returns (bool) {
        for (uint i = 0; i < candidateNames.length; i++) {
            if (keccak256(bytes(candidateNames[i])) == keccak256(bytes(_name))) {
                return true;
            }
        }
        return false;
    }
}
