import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Delegates = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const proposals = [
    {
      id: 1,
      title: 'Implementation of Enhanced Staking Tiers',
      description: 'Enhanced Staking and Cross-Chain Expansion',
      status: 'Closed',
      totalVotes: 252,
      type: 'closed'
    },
    {
      id: 2,
      title: 'Implementation of Enhanced Staking Tiers',
      description: 'Enhanced Staking and Cross-Chain Expansion',
      status: 'Closed',
      totalVotes: 252,
      type: 'closed'
    },
    {
      id: 3,
      title: 'Implementation of Enhanced Staking Tiers',
      description: 'Enhanced Staking and Cross-Chain Expansion',
      status: 'Closed',
      totalVotes: 252,
      type: 'closed'
    },
    {
      id: 4,
      title: 'Cross-Chain Bridge Integration',
      description: 'Multi-Chain Infrastructure Development',
      status: 'Active',
      totalVotes: 189,
      type: 'active'
    },
    {
      id: 5,
      title: 'Governance Token Distribution',
      description: 'Token Economics and Distribution',
      status: 'Active',
      totalVotes: 156,
      type: 'active'
    }
  ];

  const filteredProposals = activeFilter === 'All' 
    ? proposals 
    : proposals.filter(proposal => proposal.type === activeFilter.toLowerCase());

  const activeCount = proposals.filter(p => p.type === 'active').length;
  const closedCount = proposals.filter(p => p.type === 'closed').length;

  return (
    <motion.div 
      className="space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header Section */}
      <motion.div 
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-black border border-[#34FCB4] p-8 relative">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <motion.div
              initial={{ rotate: -180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ 
                duration: 1, 
                delay: 0.3, 
                type: "spring", 
                stiffness: 200 
              }}
              whileHover={{ 
                rotate: 360,
                scale: 1.1,
                transition: { duration: 0.5 }
              }}
            >
              <img src="/images/biglogo.png" alt="Lunex" className="" />
            </motion.div>
            
            {/* Title and Description */}
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.h1 
                className="text-3xl font-bold text-white mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.6,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{
                  scale: 1.05,
                  textShadow: "0 0 20px rgba(52, 252, 180, 0.5)",
                  transition: { duration: 0.3 }
                }}
              >
                Lunex Network
              </motion.h1>
              <motion.p 
                className="text-[#D1D5DB] text-xl leading-relaxed max-w-5xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{
                  color: "#34FCB4",
                  transition: { duration: 0.3 }
                }}
              >
                A Web3 multi-chain bridge empowering seamless, secure, and non-custodial cross-chain asset transfers with deep liquidity and low fees.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Status Filter */}
      <motion.div 
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex items-center gap-4">
          <label className="block text-white text-sm font-medium">
            Status
          </label>
          <button
            onClick={() => setActiveFilter('All')}
            className={`px-6 py-1 text-sm font-semibold transition-all duration-200 hover:scale-105 ${
              activeFilter === 'All'
                ? 'bg-[#34FCB4] text-black'
                : 'border border-[#34FCB4] text-white hover:bg-[#34FCB4]/10'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveFilter('Active')}
            className={`px-6 py-1 text-sm font-semibold transition-all duration-200 hover:scale-105 ${
              activeFilter === 'Active'
                ? 'bg-[#34FCB4] text-black'
                : 'border border-[#34FCB4] text-white hover:bg-[#34FCB4]/10'
            }`}
          >
            Active {activeCount}
          </button>
          <button
            onClick={() => setActiveFilter('Closed')}
            className={`px-6 py-1 text-sm font-semibold transition-all duration-200 hover:scale-105 ${
              activeFilter === 'Closed'
                ? 'bg-[#34FCB4] text-black'
                : 'border border-[#34FCB4] text-white hover:bg-[#34FCB4]/10'
            }`}
          >
            Closed {closedCount}
          </button>
        </div>
      </motion.div>

      {/* Proposal Cards */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {filteredProposals.map((proposal, index) => (
          <motion.div 
            key={proposal.id} 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.6 + (index * 0.1)
            }}
            whileHover={{ 
              y: -3,
              transition: { duration: 0.2 }
            }}
          >
            {/* Main card */}
            <div className="bg-black border border-[#34FCB4] p-6 relative cursor-pointer hover:shadow-lg hover:shadow-[#34FCB4]/20 transition-all duration-300">
              {/* Status Badge */}
              <div className="mb-4">
                <span 
                  className={`px-3 py-1 text-xs font-semibold border ${
                    proposal.status === 'Active' 
                      ? 'border-[#34FCB4] text-[#34FCB4]' 
                      : 'border-white text-white'
                  }`}
                >
                  {proposal.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-lg mb-2 leading-tight">
                {proposal.title}
              </h3>

              {/* Description */}
              <p className="text-[#D1D5DB] text-sm mb-4">
                {proposal.description}
              </p>

              {/* Separator */}
              <div className="border-t border-white mb-4" />

              {/* Total Votes */}
              <div className="text-right">
                <span className="text-white text-sm">Total Votes: </span>
                <span className="text-[#34FCB4] font-bold">
                  {proposal.totalVotes}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Empty State */}
      {filteredProposals.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">
            No proposals found for the selected filter.
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default Delegates;