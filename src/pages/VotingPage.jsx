import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { HiChevronLeft, HiArrowTopRightOnSquare, HiChevronDown } from 'react-icons/hi2';

const VotingPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedVote, setSelectedVote] = useState('Yes');
  const [showVotingPower, setShowVotingPower] = useState(false);

  const proposal = {
    id: id,
    title: 'Expand Cross-Chain Bridge Support for Additional Blockchains',
    description: 'The Lunex Network proposes integrating Avalanche, Polygon, and Cosmos into its multi-chain bridge to enable seamless, non-custodial asset transfers. This will expand access to over 60,000 crypto pairs, lower fees, and ensure zero slippage, aligning with Lunex\'s mission for fast, secure, and transparent DeFi transactions.',
    status: 'Open',
    creator: '0x6d3C...94267',
    documentation: 'LNEX-GOV-001',
    communityLink: '#',
    votingPeriod: '09/23/2025 14:00 - 09/30/2025 10:00',
    votingParticipation: '0 %',
    results: {
      yes: { votes: 0, percentage: 0 },
      no: { votes: 0, percentage: 0 },
      abstain: { votes: 0, percentage: 0 }
    }
  };

  const handleVote = () => {
    // Handle voting logic here
    console.log('Voting:', selectedVote);
    // You can add actual voting logic here
  };

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

      {/* Back Navigation */}
      <motion.div 
        className="flex items-center gap-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <button
          onClick={() => navigate('/delegates')}
          className="flex items-center gap-2 text-[#34FCB4] hover:text-white transition-colors duration-200"
        >
          <HiChevronLeft className="w-4 h-4" />
          Voting dashboard
        </button>
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Voting Info and Proposal */}
        <div className="lg:col-span-2 space-y-8">
          {/* Voting Information Panel */}
          <motion.div 
            className="bg-black border border-[#34FCB4] p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-semibold mb-2">VOTING PERIOD</h3>
                <p className="text-[#D1D5DB]">{proposal.votingPeriod}</p>
              </div>
              
              <div>
                <button
                  onClick={() => setShowVotingPower(!showVotingPower)}
                  className="flex items-center gap-2 text-white font-semibold hover:text-[#34FCB4] transition-colors duration-200"
                >
                  YOUR VOTING POWER
                  <motion.div
                    animate={{ rotate: showVotingPower ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>
                <p className="text-white">-</p>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-2">VOTING PARTICIPATION</h3>
                <p className="text-[#34FCB4] font-bold">{proposal.votingParticipation}</p>
              </div>
            </div>
          </motion.div>

          {/* Proposal Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-white">{proposal.title}</h2>
            <p className="text-[#D1D5DB] text-lg leading-relaxed">{proposal.description}</p>
          </motion.div>

          {/* Voting Interface */}
          <motion.div 
            className="bg-black border border-[#34FCB4] p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-white font-semibold text-lg mb-4">Cast your vote</h3>
            <div className="space-y-4">
              {['Yes', 'No', 'Abstain'].map((option) => (
                <label key={option} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="vote"
                    value={option}
                    checked={selectedVote === option}
                    onChange={(e) => setSelectedVote(e.target.value)}
                    className="w-4 h-4 text-[#34FCB4] bg-transparent border-2 border-[#34FCB4] focus:ring-[#34FCB4] focus:ring-2"
                  />
                  <span className="text-white font-medium">{option}</span>
                </label>
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleVote}
              className="mt-6 bg-[#34FCB4] text-black font-bold px-8 py-3 hover:bg-[#34FCB4]/90 transition-all duration-200"
            >
              Submit Vote
            </motion.button>
          </motion.div>
        </div>

        {/* Right Column - Details and Results */}
        <div className="space-y-8">
          {/* Details Panel */}
          <motion.div 
            className="bg-black border border-[#34FCB4] p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-white font-semibold text-lg mb-4">Details</h3>
            <div className="space-y-3">
              <div>
                <span className="text-[#D1D5DB] text-sm">Status:</span>
                <span className="text-white ml-2">{proposal.status}</span>
              </div>
              <div>
                <span className="text-[#D1D5DB] text-sm">Creator:</span>
                <a href="#" className="text-[#34FCB4] ml-2 hover:underline flex items-center gap-1">
                  {proposal.creator}
                  <HiArrowTopRightOnSquare className="w-3 h-3" />
                </a>
              </div>
              <div>
                <span className="text-[#D1D5DB] text-sm">Proposal documentation:</span>
                <a href="#" className="text-[#34FCB4] ml-2 hover:underline flex items-center gap-1">
                  {proposal.documentation}
                  <HiArrowTopRightOnSquare className="w-3 h-3" />
                </a>
              </div>
              <div>
                <span className="text-[#D1D5DB] text-sm">Community link:</span>
                <a href="#" className="text-[#34FCB4] ml-2 hover:underline flex items-center gap-1">
                  Community link
                  <HiArrowTopRightOnSquare className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Results Panel */}
          <motion.div 
            className="bg-black border border-[#34FCB4] p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-white font-semibold text-lg mb-4">Results</h3>
            <div className="space-y-4">
              {[
                { option: 'Yes', data: proposal.results.yes },
                { option: 'No', data: proposal.results.no },
                { option: 'Abstain', data: proposal.results.abstain }
              ].map(({ option, data }) => (
                <div key={option}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">{option}</span>
                    <span className="text-[#34FCB4] font-bold">{data.votes} ({data.percentage}%)</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-[#34FCB4] h-2 rounded-full transition-all duration-300"
                      style={{ width: `${data.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default VotingPage;
