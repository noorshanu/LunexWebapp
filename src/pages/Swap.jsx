import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiCog6Tooth, HiChevronDown } from 'react-icons/hi2';
import PopupModal from '../components/PopupModal';

const Swap = () => {
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('0.00');
  const [fromToken, setFromToken] = useState('ETH');
  const [toToken, setToToken] = useState('');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleSwapTokens = () => {
    setFromToken(toToken);
    setToToken(fromToken);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
   

      <div className="max-w-xl mx-auto">
        {/* Swap Interface */}
        <div className="relative">
          {/* Background box/shadow effect */}
       
          
          {/* Main box */}
          <div className="bg-black border border-[#34FCB4] p-6 relative">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Swap</h2>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsSettingsOpen(true)}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <HiCog6Tooth className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Divider */}
            <div className="border-b border-gray-600 mb-6"></div>

            {/* From Section */}
            <div className="mb-4">
              <label className="block text-white text-sm mb-2">From</label>
              <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 flex items-center justify-between">
                <input
                  type="text"
                  value={fromAmount}
                  onChange={(e) => setFromAmount(e.target.value)}
                  placeholder="Please enter 1-42000000"
                  className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none text-lg"
                />
                <div className="flex items-center gap-2 mt-2">
                  <img src="/fav.png" alt="ETH" className="w-6 h-6" />
                  <span className="text-white font-semibold">ETH</span>
                  <HiChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Swap Button */}
            <div className="flex justify-center my-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleSwapTokens}
                className=" transition-colors"
              >
                <img src="/images/swapicon.png" alt="Swap" className="w-10 h-10" />
              </motion.button>
            </div>

            {/* To Section */}
            <div className="mb-6">
              <label className="block text-white text-sm mb-2">To</label>
              <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 flex items-center justify-between">
                <input
                  type="text"
                  value={toAmount}
                  readOnly
                  className="w-full bg-transparent text-white text-lg "
                />
                <div className="flex items-center gap-2  w-[200px]">
                  <button className="bg-gray-700 text-white px-3 py-1 rounded text-sm hover:bg-gray-600 transition-colors w-full">
                    Select Token
                  </button>
                </div>
              </div>
            </div>

            {/* Swap Now Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#34FCB4] text-black font-bold py-4 rounded-lg hover:bg-[#34FCB4]/80 transition-all duration-200"
            >
              Swap Now
            </motion.button>
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      <PopupModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        title="Swap Settings"
      >
        <div className="space-y-6">
          {/* Slippage Tolerance */}
          <div>
            <h3 className="text-white font-semibold mb-3">Slippage Tolerance</h3>
            <div className="grid grid-cols-3 gap-2">
              {['0.1%', '0.5%', '1.0%'].map((option) => (
                <button
                  key={option}
                  className="bg-gray-800 border border-gray-600 text-white py-2 px-3 rounded hover:border-[#34FCB4] transition-colors"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Transaction Deadline */}
          <div>
            <h3 className="text-white font-semibold mb-3">Transaction Deadline</h3>
            <input
              type="number"
              placeholder="20"
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#34FCB4]"
            />
            <p className="text-gray-400 text-sm mt-1">minutes</p>
          </div>

          {/* Expert Mode */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-semibold">Expert Mode</h3>
              <p className="text-gray-400 text-sm">Allow high price impact trades</p>
            </div>
            <button className="bg-gray-800 border border-gray-600 w-12 h-6 rounded-full relative">
              <div className="bg-gray-600 w-4 h-4 rounded-full absolute top-1 left-1 transition-all"></div>
            </button>
          </div>

          {/* Multihops */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-semibold">Multihops</h3>
              <p className="text-gray-400 text-sm">Allow swaps through multiple routes</p>
            </div>
            <button className="bg-[#34FCB4] border border-[#34FCB4] w-12 h-6 rounded-full relative">
              <div className="bg-white w-4 h-4 rounded-full absolute top-1 right-1 transition-all"></div>
            </button>
          </div>
        </div>
      </PopupModal>
    </div>
  );
};

export default Swap;
