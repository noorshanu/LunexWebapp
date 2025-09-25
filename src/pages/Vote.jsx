import React, { useState } from 'react';

const Vote = () => {
  const [selectedProposal, setSelectedProposal] = useState(null);

  const proposals = [
    {
      id: 1,
      title: 'Increase Staking Rewards by 2%',
      description: 'Proposal to increase the base staking rewards from 5% to 7% APY to encourage more participation in network security.',
      status: 'active',
      votesFor: 2456789,
      votesAgainst: 987654,
      totalVotes: 3444443,
      endTime: '2024-01-15T23:59:59Z',
      proposer: '0x1234...5678',
      category: 'Economics'
    },
    {
      id: 2,
      title: 'Implement Cross-Chain Bridge to Polygon',
      description: 'Enable cross-chain functionality to allow Lunex tokens to be bridged to Polygon network for lower transaction costs.',
      status: 'active',
      votesFor: 1876543,
      votesAgainst: 543210,
      totalVotes: 2419753,
      endTime: '2024-01-20T23:59:59Z',
      proposer: '0xabcd...efgh',
      category: 'Infrastructure'
    },
    {
      id: 3,
      title: 'Treasury Allocation for Marketing',
      description: 'Allocate 5% of treasury funds for marketing initiatives to increase Lunex adoption and community growth.',
      status: 'ended',
      votesFor: 3210987,
      votesAgainst: 1098765,
      totalVotes: 4309752,
      endTime: '2023-12-30T23:59:59Z',
      proposer: '0x9876...5432',
      category: 'Treasury',
      result: 'passed'
    }
  ];

  const userVotingPower = 125000;

  const formatNumber = (num) => {
    return new Intl.NumberFormat().format(num);
  };

  const getTimeRemaining = (endTime) => {
    const now = new Date();
    const end = new Date(endTime);
    const diff = end - now;
    
    if (diff <= 0) return 'Ended';
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    return `${days}d ${hours}h remaining`;
  };

  const getStatusColor = (status, result = null) => {
    if (status === 'active') return 'text-green-400 bg-green-400/10';
    if (status === 'ended' && result === 'passed') return 'text-blue-400 bg-blue-400/10';
    if (status === 'ended' && result === 'failed') return 'text-red-400 bg-red-400/10';
    return 'text-gray-400 bg-gray-400/10';
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Economics': 'text-yellow-400 bg-yellow-400/10',
      'Infrastructure': 'text-purple-400 bg-purple-400/10',
      'Treasury': 'text-cyan-400 bg-cyan-400/10',
      'Governance': 'text-green-400 bg-green-400/10'
    };
    return colors[category] || 'text-gray-400 bg-gray-400/10';
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
          Vote
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Participate in Lunex governance and help shape the future of the protocol
        </p>
      </div>

      {/* Voting Power Card */}
      <div className="max-w-md mx-auto">
        <div className="bg-gradient-to-r from-cyan-500/10 to-green-500/10 border border-cyan-400/30 rounded-xl p-6">
          <div className="text-center space-y-2">
            <h3 className="text-lg font-semibold text-gray-300">Your Voting Power</h3>
            <div className="text-3xl font-bold text-white">{formatNumber(userVotingPower)}</div>
            <p className="text-sm text-gray-400">LUNEX tokens staked</p>
          </div>
        </div>
      </div>

      {/* Proposals List */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Active Proposals</h2>
          <button className="bg-gradient-to-r from-cyan-500 to-green-500 text-black font-semibold px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-green-600 transition-all duration-200">
            Create Proposal
          </button>
        </div>

        <div className="grid gap-6">
          {proposals.map((proposal) => (
            <div
              key={proposal.id}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between space-y-3 md:space-y-0">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(proposal.status, proposal.result)}`}>
                        {proposal.status === 'ended' ? (proposal.result || 'ended').toUpperCase() : proposal.status.toUpperCase()}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(proposal.category)}`}>
                        {proposal.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">{proposal.title}</h3>
                    <p className="text-gray-400 text-sm">{proposal.description}</p>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="text-sm text-gray-400">Proposed by</p>
                    <p className="text-sm font-mono text-cyan-400">{proposal.proposer}</p>
                  </div>
                </div>

                {/* Voting Progress */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Voting Progress</span>
                    <span className="text-gray-300">{formatNumber(proposal.totalVotes)} votes</span>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full bg-gray-800 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-green-400 h-3 rounded-full transition-all duration-300"
                        style={{ 
                          width: `${(proposal.votesFor / proposal.totalVotes) * 100}%` 
                        }}
                      ></div>
                      <div 
                        className="bg-gradient-to-r from-red-500 to-red-400 h-3 rounded-full absolute top-0 right-0 transition-all duration-300"
                        style={{ 
                          width: `${(proposal.votesAgainst / proposal.totalVotes) * 100}%` 
                        }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-gray-400">For: {formatNumber(proposal.votesFor)}</span>
                      <span className="text-green-400">({((proposal.votesFor / proposal.totalVotes) * 100).toFixed(1)}%)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <span className="text-gray-400">Against: {formatNumber(proposal.votesAgainst)}</span>
                      <span className="text-red-400">({((proposal.votesAgainst / proposal.totalVotes) * 100).toFixed(1)}%)</span>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between pt-4 border-t border-gray-800 space-y-3 md:space-y-0">
                  <div className="text-sm text-gray-400">
                    {getTimeRemaining(proposal.endTime)}
                  </div>
                  
                  {proposal.status === 'active' && (
                    <div className="flex space-x-3">
                      <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                        Vote For
                      </button>
                      <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                        Vote Against
                      </button>
                      <button className="border border-gray-600 hover:border-gray-500 text-gray-300 px-4 py-2 rounded-lg font-medium transition-colors">
                        Details
                      </button>
                    </div>
                  )}
                  
                  {proposal.status === 'ended' && (
                    <button className="border border-gray-600 hover:border-gray-500 text-gray-300 px-4 py-2 rounded-lg font-medium transition-colors">
                      View Details
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Governance Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div className="text-2xl mb-2">🗳️</div>
          <div className="text-2xl font-bold text-white">24</div>
          <div className="text-sm text-gray-400">Total Proposals</div>
        </div>
        
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div className="text-2xl mb-2">👥</div>
          <div className="text-2xl font-bold text-white">12,543</div>
          <div className="text-sm text-gray-400">Active Voters</div>
        </div>
        
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div className="text-2xl mb-2">💰</div>
          <div className="text-2xl font-bold text-white">78.5%</div>
          <div className="text-sm text-gray-400">Participation Rate</div>
        </div>
      </div>
    </div>
  );
};

export default Vote;
