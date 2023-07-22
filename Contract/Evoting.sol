// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract EVoting {
    struct Candidate {
        uint id;
        string name;
        uint votecount;
    }

    struct Voter {
        bool voted; // if true, that person already voted
        address delegate; // person delegated to
    }

    Candidate[3] public candidates;
    mapping(address => Voter) public voters;

    uint candidateCount;

    address public manager;

    constructor() {
        manager = msg.sender;
    }

    //Project
    function createCandidate(
        uint _id,
        string calldata _name,
        uint _votecount
    ) external {
        require(candidateCount < 3, "Only 3 candidate allowed");
        candidates[candidateCount] = Candidate(_id, _name, _votecount);
        candidateCount++;
    }

    function allcandidates() external view returns (Candidate[3] memory) {
        return candidates;
    }

    function giveVote(uint _candidateid) external {
        require(!voters[msg.sender].voted, "The voter already voted.");

        for (uint i = 0; i < candidates.length; i++) {
            if (candidates[i].id == _candidateid) {
                candidates[i].votecount += 1;
            }
        }
        voters[msg.sender].voted = true;
    }
}

// 0xD7ACd2a9FD159E69Bb102A1ca21C9a3e3A5F771B  this is contract address
