import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi2';

const Vote = () => {
  const delegates = [
    {
      name: 'BLUE',
      address: '0xd2607...bf5e',
      votingPower: '42.69%',
      lunex: '2,925,837,753 LNEX',
      avatar: '🔵'
    },
    {
      name: 'cloaky',
      address: '0x2c890...221c',
      votingPower: '31.09%',
      lunex: '2,130,949,343 LNEX',
      avatar: '🕵️'
    },
    {
      name: 'Bonapublica',
      address: '0x550e6...72ad',
      votingPower: '14.47%',
      lunex: '992,087,928 LNEX',
      avatar: '👑'
    },
    {
      name: 'Tango',
      address: '0x4bed4...aa90',
      votingPower: '7.38%',
      lunex: '505,866,185 LNEX',
      avatar: '💃'
    },
    {
      name: 'aegisD',
      address: '0xfc48f...753d',
      votingPower: '1.09%',
      lunex: '74,579,374 LNEX',
      avatar: '🛡️'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-left space-y-4">
        <div className="relative inline-block">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-2">
            Governance <span className="text-[#34FCB4]">Voting</span>
          </h1>
      
        </div>
        <p className="text-gray-400 text-lg max-w-2xl">
          Shape the Future of Lunex
        </p>
        <p className="text-gray-400 text-sm max-w-2xl">
          Participate in governance decisions by voting with your LUNEX tokens.
        </p>
        <div className="relative inline-block">
          {/* Background shadow effect */}
          <div className='absolute inset-0 bg-[#34FCB4] transform translate-x-1 translate-y-1'></div>
          
          {/* Main button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative bg-black border border-[#34FCB4] text-white font-bold px-6 py-3 hover:bg-gray-900 transition-all duration-200 flex items-center gap-2"
          >
            DELEGATE
            <HiArrowRight className="w-4 h-4 text-[#34FCB4]" />
          </motion.button>
        </div>
      </div>

      {/* Governance Stats */}
      <div className="relative">
      <h2 className="text-xl font-bold text-white mb-6">Governance Stats</h2>
        {/* Background box/shadow effect */}
   
        
        {/* Main box */}
        <div className="bg-black border border-[#34FCB4] p-6 relative">

          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-1">Lunex in Governance</p>
              <p className="text-white text-lg font-bold">6.72B LNEX</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-1">Active Polls</p>
              <p className="text-white text-lg font-bold">0</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-1">Aligned Delegates</p>
              <p className="text-white text-lg font-bold">11</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-1">Shadow Delegates</p>
              <p className="text-white text-lg font-bold">25</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-1">Lunex Delegated</p>
              <p className="text-white text-lg font-bold">6.72B LNEX</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6">
            <h2 className="text-xl font-bold text-white mb-2">
              Top <span className="text-[#34FCB4]">Aligned Delegates</span>
            </h2>
            <p className="text-gray-400 text-sm">
              Aligned Delegates ranked by their voting power.
            </p>
          </div>
      {/* Top Aligned Delegates */}
      <div className="relative">
   
        {/* Background box/shadow effect */}
        <div className='absolute inset-0 bg-black border border-[#34FCB4] transform translate-x-3 translate-y-1'></div>
        
        {/* Main box */}
        <div className="bg-black border border-[#34FCB4] p-6 relative">
     

          {/* Table Header */}
          <div className="grid grid-cols-4 gap-4 mb-4 border-b border-gray-600 pb-3">
            <div className="text-left">
              <p className="text-xs text-white font-bold">NAME</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-white font-bold">VOTING POWER</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-white font-bold">LUNEX</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-white font-bold">ACTION</p>
            </div>
          </div>

          {/* Delegates List */}
          <div className="space-y-4">
            {delegates.map((delegate, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 items-center py-3 border-b border-gray-800 last:border-b-0">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-sm">
                    {delegate.avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{delegate.name}</p>
                    <p className="text-gray-400 text-xs">{delegate.address}</p>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-white font-semibold">{delegate.votingPower}</p>
                </div>
                <div className="text-center">
                  <p className="text-white font-semibold">{delegate.lunex}</p>
                </div>
                <div className="text-center">
                  <div className="relative inline-block">
                    {/* Background shadow effect */}
                    <div className='absolute inset-0 bg-[#34FCB4] transform translate-x-1 translate-y-1'></div>
                    
                    {/* Main button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative bg-black border border-[#34FCB4] text-white font-bold px-4 py-2 hover:bg-gray-900 transition-all duration-200"
                    >
                      Delegate
                    </motion.button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="mt-6 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800 border border-gray-600 text-white font-semibold px-6 py-3 rounded-lg hover:border-[#34FCB4] transition-all duration-200 flex items-center gap-2 mx-auto"
            >
              VIEW ALL
              <HiArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vote;
