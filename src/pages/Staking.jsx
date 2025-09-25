import React, { useState } from 'react';

const Staking = () => {
  const [stakeAmount, setStakeAmount] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('3');

  const stakingPeriods = [
    { months: '3', apy: '1.5%' },
    { months: '6', apy: '3.2%' },
    { months: '9', apy: '5.8%' },
    { months: '12', apy: '8.7%' },
  ];

  const stats = [
    { label: 'Total Staked Value', value: '$8,453.59', icon: '💰' },
    { label: 'Total Rewards Earned', value: '$1,536.00', icon: '🏆' },
    { label: 'Current APY', value: '1.5%', icon: '📈' },
    { label: 'Available Balance', value: '8,000,000,000', icon: '💳' },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
          Staking
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Stake your Lunex tokens to earn rewards and participate in the network's security
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl">{stat.icon}</span>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
            <div className="space-y-1">
              <p className="text-gray-400 text-sm">{stat.label}</p>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Staking Form */}
        <div className="lg:col-span-2">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Stake Lunex</h2>
            
            {/* Staking Period Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Select Staking Period
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {stakingPeriods.map((period) => (
                  <button
                    key={period.months}
                    onClick={() => setSelectedPeriod(period.months)}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                      selectedPeriod === period.months
                        ? 'border-cyan-400 bg-cyan-400/10'
                        : 'border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-lg font-bold">{period.months} month{period.months !== '1' ? 's' : ''}</div>
                      <div className="text-sm text-gray-400">APY</div>
                      <div className="text-cyan-400 font-semibold">{period.apy}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Amount Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Enter Stake Amount
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(e.target.value)}
                  placeholder="0"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-4 text-xl font-semibold text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                  <span className="text-gray-400">Lunex</span>
                  <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-xs">L</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-sm text-gray-400">Available: 8,000,000,000</span>
                <button className="text-sm text-cyan-400 hover:text-cyan-300">MAX</button>
              </div>
            </div>

            {/* Stake Button */}
            <button className="w-full bg-gradient-to-r from-cyan-500 to-green-500 text-black font-bold py-4 rounded-lg hover:from-cyan-600 hover:to-green-600 transition-all duration-200 transform hover:scale-105">
              Stake
            </button>
          </div>
        </div>

        {/* Staking History/Rewards */}
        <div className="space-y-6">
          {/* Current Stakes */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Your Stakes</h3>
            <div className="space-y-4">
              <div className="text-center text-gray-500 py-8">
                <div className="text-4xl mb-2">📊</div>
                <p>No active stakes yet</p>
                <p className="text-sm">Start staking to see your positions here</p>
              </div>
            </div>
          </div>

          {/* Withdrawal History */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Withdrawal</h3>
              <div className="text-xs bg-gray-800 px-2 py-1 rounded">
                REWARD
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">AMOUNT</span>
                <span className="text-sm text-gray-400">WITHDRAWAL TIME</span>
              </div>
              <div className="text-center text-gray-500 py-4">
                <p className="text-sm">No rewards to withdraw yet</p>
              </div>
            </div>
          </div>

          {/* JOIN PRESALE Button */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-green-500/10 border border-cyan-400/30 rounded-xl p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Join Presale</h3>
            <p className="text-sm text-gray-400 mb-4">Get early access to Lunex tokens</p>
            <button className="bg-gradient-to-r from-cyan-500 to-green-500 text-black font-semibold px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-green-600 transition-all duration-200">
              JOIN PRESALE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staking;
