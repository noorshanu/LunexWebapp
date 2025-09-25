import React, { useState } from 'react';

const Swap = () => {
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [fromToken, setFromToken] = useState('ETH');
  const [toToken, setToToken] = useState('LUNEX');
  const [slippage, setSlippage] = useState('0.5');

  const tokens = [
    { symbol: 'ETH', name: 'Ethereum', balance: '2.5', icon: '⟠' },
    { symbol: 'BTC', name: 'Bitcoin', balance: '0.125', icon: '₿' },
    { symbol: 'USDT', name: 'Tether', balance: '1,250.00', icon: '₮' },
    { symbol: 'LUNEX', name: 'Lunex', balance: '8,000,000,000', icon: 'L' },
  ];

  const slippageOptions = ['0.1', '0.5', '1.0', 'Custom'];

  const handleSwapTokens = () => {
    setFromToken(toToken);
    setToToken(fromToken);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
          Swap
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Trade tokens instantly with the best rates across multiple DEXs
        </p>
      </div>

      <div className="max-w-md mx-auto">
        {/* Swap Interface */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Swap Tokens</h2>
            <button className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>

          {/* From Token */}
          <div className="space-y-4">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">From</span>
                <span className="text-sm text-gray-400">
                  Balance: {tokens.find(t => t.symbol === fromToken)?.balance} {fromToken}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  value={fromAmount}
                  onChange={(e) => setFromAmount(e.target.value)}
                  placeholder="0.0"
                  className="flex-1 bg-transparent text-2xl font-semibold text-white placeholder-gray-500 focus:outline-none"
                />
                <div className="flex items-center space-x-2 bg-gray-700 rounded-lg px-3 py-2 cursor-pointer hover:bg-gray-600 transition-colors">
                  <span className="text-lg">{tokens.find(t => t.symbol === fromToken)?.icon}</span>
                  <span className="font-semibold">{fromToken}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs text-gray-500">≈ $1,234.56</span>
                <button className="text-xs text-cyan-400 hover:text-cyan-300">MAX</button>
              </div>
            </div>

            {/* Swap Button */}
            <div className="flex justify-center">
              <button
                onClick={handleSwapTokens}
                className="bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-full p-2 transition-colors"
              >
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </button>
            </div>

            {/* To Token */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">To</span>
                <span className="text-sm text-gray-400">
                  Balance: {tokens.find(t => t.symbol === toToken)?.balance} {toToken}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  value={toAmount}
                  onChange={(e) => setToAmount(e.target.value)}
                  placeholder="0.0"
                  className="flex-1 bg-transparent text-2xl font-semibold text-white placeholder-gray-500 focus:outline-none"
                />
                <div className="flex items-center space-x-2 bg-gray-700 rounded-lg px-3 py-2 cursor-pointer hover:bg-gray-600 transition-colors">
                  <span className="text-lg">{tokens.find(t => t.symbol === toToken)?.icon}</span>
                  <span className="font-semibold">{toToken}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <div className="mt-2">
                <span className="text-xs text-gray-500">≈ $1,234.56</span>
              </div>
            </div>
          </div>

          {/* Slippage Settings */}
          <div className="mt-6 p-4 bg-gray-800/30 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium">Slippage Tolerance</span>
              <span className="text-sm text-cyan-400">{slippage}%</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {slippageOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => option !== 'Custom' && setSlippage(option)}
                  className={`py-2 px-3 rounded text-sm font-medium transition-colors ${
                    slippage === option
                      ? 'bg-cyan-400 text-black'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {option === 'Custom' ? 'Custom' : `${option}%`}
                </button>
              ))}
            </div>
          </div>

          {/* Swap Details */}
          <div className="mt-6 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Rate</span>
              <span>1 ETH = 2,456.78 LUNEX</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Network Fee</span>
              <span>~$12.34</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Price Impact</span>
              <span className="text-green-400">{'<'}0.01%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Minimum Received</span>
              <span>2,444.32 LUNEX</span>
            </div>
          </div>

          {/* Swap Button */}
          <button className="w-full bg-gradient-to-r from-cyan-500 to-green-500 text-black font-bold py-4 rounded-lg hover:from-cyan-600 hover:to-green-600 transition-all duration-200 transform hover:scale-105 mt-6">
            Swap Tokens
          </button>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-6">Recent Transactions</h3>
          <div className="space-y-4">
            <div className="text-center text-gray-500 py-8">
              <div className="text-4xl mb-2">🔄</div>
              <p>No recent swaps</p>
              <p className="text-sm">Your swap history will appear here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swap;
