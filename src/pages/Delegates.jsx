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
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Background box/shadow effect */}
        <motion.div 
          className='absolute inset-0 bg-black border border-[#34FCB4] transform translate-x-3 translate-y-1'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        
        {/* Main box */}
        <div className="bg-black border border-[#34FCB4] p-8 relative">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <motion.div 
              className="flex items-center justify-center"
              initial={{ rotate: -180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 200 }}
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Lunex Network
              </motion.h1>
              <motion.p 
                className="text-[#D1D5DB] text-xl leading-relaxed max-w-5xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
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
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <div className="flex items-center gap-4">
          <motion.label 
            className="block text-white text-sm font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.2 }}
          >
            Status
          </motion.label>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(52, 252, 180, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveFilter('All')}
            className={`px-6 py-1 text-sm font-semibold transition-all duration-200 ${
              activeFilter === 'All'
                ? 'bg-[#34FCB4] text-black'
                : 'border border-[#34FCB4] text-white hover:bg-[#34FCB4]/10'
            }`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.3 }}
          >
            All
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(52, 252, 180, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveFilter('Active')}
            className={`px-6 py-1 text-sm font-semibold transition-all duration-200 ${
              activeFilter === 'Active'
                ? 'bg-[#34FCB4] text-black'
                : 'border border-[#34FCB4] text-white hover:bg-[#34FCB4]/10'
            }`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.4 }}
          >
            Active {activeCount}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(52, 252, 180, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveFilter('Closed')}
            className={`px-6 py-1 text-sm font-semibold transition-all duration-200 ${
              activeFilter === 'Closed'
                ? 'bg-[#34FCB4] text-black'
                : 'border border-[#34FCB4] text-white hover:bg-[#34FCB4]/10'
            }`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.5 }}
          >
            Closed {closedCount}
          </motion.button>
        </div>
      </motion.div>

      {/* Proposal Cards */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.6 }}
      >
        {filteredProposals.map((proposal, index) => (
          <motion.div 
            key={proposal.id} 
            className="relative"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 1.8 + (index * 0.1),
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.2 }
            }}
          >
            {/* Background box/shadow effect */}
            <motion.div 
              className='absolute inset-0 bg-black border border-[#34FCB4] transform translate-x-3 translate-y-1'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 2.0 + (index * 0.1) }}
            />
            
            {/* Main card */}
            <motion.div 
              className="bg-black border border-[#34FCB4] p-6 relative cursor-pointer"
              whileHover={{ 
                boxShadow: "0 0 30px rgba(52, 252, 180, 0.2)",
                borderColor: "#34FCB4"
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Status Badge */}
              <motion.div 
                className="mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 2.2 + (index * 0.1) }}
              >
                <motion.span 
                  className={`px-3 py-1 text-xs font-semibold border ${
                    proposal.status === 'Active' 
                      ? 'border-[#34FCB4] text-[#34FCB4]' 
                      : 'border-white text-white'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {proposal.status}
                </motion.span>
              </motion.div>

              {/* Title */}
              <motion.h3 
                className="text-white font-bold text-lg mb-2 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 2.4 + (index * 0.1) }}
              >
                {proposal.title}
              </motion.h3>

              {/* Description */}
              <motion.p 
                className="text-white text-sm mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 2.6 + (index * 0.1) }}
              >
                {proposal.description}
              </motion.p>

              {/* Separator */}
              <motion.div 
                className="border-t border-white mb-4"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 2.8 + (index * 0.1) }}
              />

              {/* Total Votes */}
              <motion.div 
                className="text-right"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 3.0 + (index * 0.1) }}
              >
                <span className="text-white text-sm">Total Votes: </span>
                <motion.span 
                  className="text-[#34FCB4] font-bold"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 3.2 + (index * 0.1),
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {proposal.totalVotes}
                </motion.span>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Empty State */}
      {filteredProposals.length === 0 && (
        <motion.div 
          className="text-center py-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
        >
          <motion.p 
            className="text-gray-400 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            No proposals found for the selected filter.
          </motion.p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Delegates;