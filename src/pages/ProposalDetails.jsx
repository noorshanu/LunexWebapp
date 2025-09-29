import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';

const ProposalDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock proposal data - in real app this would come from API
  const proposal = {
    id: 1,
    title: 'Implementation of Enhanced Staking Tiers',
    description: 'Introduce tiered staking (12-20% APY), expand cross-chain support to 10 new blockchains, and launch a DAO portal for $LNEX holders to submit/vote on proposals.',
    motivation: 'Boost $LNEX value, holder rewards, and community governance while enhancing multi-chain liquidity and user engagement in the Lunex DeFi ecosystem.',
    implementation: 'Upgrade $LNEX smart contract for staking tiers and bridge adapters; deploy IPFS-hosted DAO portal. Audit by SolidProof, launch in Phase 4, funded by presale ($7.28M).',
    voteLaunch: '06/20/2025',
    voteEnd: '06/25/2025',
    forVotes: 3100000,
    againstVotes: 0,
    abstainVotes: 0,
    totalVotes: 3100000
  };

  const forPercentage = (proposal.forVotes / proposal.totalVotes) * 100;
  const againstPercentage = (proposal.againstVotes / proposal.totalVotes) * 100;
  const abstainPercentage = (proposal.abstainVotes / proposal.totalVotes) * 100;

  return (
    <motion.div 
      className="min-h-screen bg-black p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <motion.button
          onClick={() => navigate('/vote/delegates')}
          className="flex items-center gap-2 text-white hover:text-[#34FCB4] transition-colors duration-200 mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          whileHover={{ x: -5 }}
        >
          <HiArrowLeft className="w-5 h-5" />
          Back to Proposals
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section - Proposal Details */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-black border border-[#34FCB4] p-8">
              {/* Title */}
              <motion.h1 
                className="text-3xl font-bold text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {proposal.title}
              </motion.h1>

              {/* Description */}
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h2 className="text-xl font-bold text-white mb-4">Description</h2>
                <p className="text-[#D1D5DB] leading-relaxed">
                  {proposal.description}
                </p>
              </motion.div>

              {/* Motivation */}
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="text-xl font-bold text-white mb-4">Motivation</h2>
                <p className="text-[#D1D5DB] leading-relaxed">
                  {proposal.motivation}
                </p>
              </motion.div>

              {/* Implementation */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <h2 className="text-xl font-bold text-white mb-4">Implementation</h2>
                <p className="text-[#D1D5DB] leading-relaxed">
                  {proposal.implementation}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Section - Final Votes */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-black border border-[#34FCB4] p-8">
              {/* Header */}
              <motion.h2 
                className="text-xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Final Votes
              </motion.h2>

              {/* Vote Dates */}
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white">Vote Launch</span>
                  <span className="text-white">{proposal.voteLaunch}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Vote End</span>
                  <span className="text-white">{proposal.voteEnd}</span>
                </div>
              </motion.div>

              {/* Voting Progress Bar */}
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="w-full bg-gray-700 h-4 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-[#34FCB4]"
                    initial={{ width: 0 }}
                    animate={{ width: `${forPercentage}%` }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </div>
              </motion.div>

              {/* Vote Breakdown */}
              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {/* For Votes */}
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-[#34FCB4] rounded"></div>
                  <span className="text-white">For</span>
                  <span className="text-white ml-auto">
                    {proposal.forVotes.toLocaleString()}
                  </span>
                </div>

                {/* Against Votes */}
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-red-500 rounded"></div>
                  <span className="text-white">Against</span>
                  <span className="text-white ml-auto">
                    {proposal.againstVotes.toLocaleString()}
                  </span>
                </div>

                {/* Abstain Votes */}
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-gray-500 rounded"></div>
                  <span className="text-white">Abstain</span>
                  <span className="text-white ml-auto">
                    {proposal.abstainVotes.toLocaleString()}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProposalDetails;
