import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { HiChevronDown, HiArrowTopRightOnSquare, HiArrowRight, HiPlus } from 'react-icons/hi2';

const Delegates = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showVotingPower, setShowVotingPower] = useState(false);
  const navigate = useNavigate();

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

  // Active proposal for voting dashboard
  const activeProposal = {
    id: 1,
    title: 'Expand Cross-Chain Bridge Support for Additional Blockchains',
    status: 'VOTING OPEN',
    startDate: '09/23/2025 14:00',
    endDate: '09/30/2025 10:00',
    timeRemaining: '6 Days',
    documentationLink: '#',
    communityLink: '#'
  };

  // Voting Dashboard Component
  const VotingDashboard = () => (
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

      {/* Header with Create Proposal Button */}
      <div className="flex justify-between items-start">
        <motion.h1 
          className="text-4xl font-bold text-white"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Voting dashboard
        </motion.h1>
        
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black border border-[#34FCB4] text-white font-semibold px-6 py-3 hover:bg-[#34FCB4]/10 transition-all duration-200 flex items-center gap-2"
        >
          <HiPlus className="w-4 h-4 text-[#34FCB4]" />
          CREATE A PROPOSAL
        </motion.button>
      </div>

      {/* Description */}
      <motion.p 
        className="text-[#D1D5DB] text-lg leading-relaxed max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Shape the future of Lunex Network by voting on proposals with your $LNEX tokens. Use your tokens directly on our decentralized exchange or from your wallet to influence key decisions. All active proposals are listed below for you to review and vote on.
      </motion.p>

      {/* Voting Power Section */}
      <motion.div 
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <button
          onClick={() => setShowVotingPower(!showVotingPower)}
          className="flex items-center gap-2 text-white text-lg font-semibold hover:text-[#34FCB4] transition-colors duration-200"
        >
          My current voting power
          <motion.div
            animate={{ rotate: showVotingPower ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <HiChevronDown className="w-5 h-5" />
          </motion.div>
        </button>
        
        {showVotingPower && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-black border border-[#34FCB4] p-4"
          >
            <p className="text-[#34FCB4] text-lg font-bold">-</p>
          </motion.div>
        )}
      </motion.div>

      {/* Separator */}
      <div className="border-t border-white" />

      {/* Active Proposals Section */}
      <motion.div 
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-white">Active Proposals</h2>
        
        {/* Active Proposal Card */}
        <motion.div 
          className="bg-black border border-[#34FCB4] p-6 relative cursor-pointer hover:shadow-lg hover:shadow-[#34FCB4]/20 transition-all duration-300"
          whileHover={{ y: -2 }}
          onClick={() => navigate(`/proposal/${activeProposal.id}`)}
        >
          {/* Top Row */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-4">
              <span className="text-[#34FCB4] text-sm font-semibold">
                {activeProposal.status}
              </span>
              <span className="text-white text-sm">
                {activeProposal.startDate} - {activeProposal.endDate}
              </span>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-white text-sm">ENDS IN</span>
              <span className="text-[#34FCB4] font-bold">{activeProposal.timeRemaining}</span>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black border border-[#34FCB4] text-white font-semibold px-6 py-2 hover:bg-[#34FCB4]/10 transition-all duration-200 flex items-center gap-2"
              onClick={(e) => {
                e.stopPropagation();
                // Handle vote action
              }}
            >
              VOTE NOW
              <HiArrowRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Proposal Title */}
          <h3 className="text-white font-bold text-xl mb-4">
            {activeProposal.title}
          </h3>

          {/* Bottom Links */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <a 
                href={activeProposal.documentationLink}
                className="text-[#34FCB4] text-sm hover:underline flex items-center gap-1"
                onClick={(e) => e.stopPropagation()}
              >
                Proposal documentation
                <HiArrowTopRightOnSquare className="w-3 h-3" />
              </a>
              <a 
                href={activeProposal.communityLink}
                className="text-[#34FCB4] text-sm hover:underline flex items-center gap-1"
                onClick={(e) => e.stopPropagation()}
              >
                Community link
                <HiArrowTopRightOnSquare className="w-3 h-3" />
              </a>
            </div>
            
            <HiArrowRight className="w-5 h-5 text-white" />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );

  // Original Delegates View Component
  const DelegatesView = () => (
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
        {filteredProposals.map((proposal) => (
          <motion.div 
            key={proposal.id} 
            className="relative"
            whileHover={{ 
              y: -3,
              transition: { duration: 0.2 }
            }}
          >
            {/* Main card */}
            <div 
              className="bg-black border border-[#34FCB4] p-6 relative cursor-pointer hover:shadow-lg hover:shadow-[#34FCB4]/20 transition-all duration-300"
              onClick={() => {
                if (proposal.status === 'Closed') {
                  navigate(`/proposal/${proposal.id}`);
                }
              }}
            >
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

  return (
    <div>
      {/* Conditional Rendering */}
      {activeFilter === 'Active' ? <VotingDashboard /> : <DelegatesView />}
    </div>
  );
};

export default Delegates;