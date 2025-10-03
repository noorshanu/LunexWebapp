import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { HiChevronLeft, HiChevronDown, HiPlus, HiTrash } from 'react-icons/hi2';

const CreateProposal = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    uri: '',
    communityUrl: 'https://community.wingriders.com/',
    acceptChoices: ['Yes'],
    rejectChoices: ['No'],
    allowMultipleChoices: false,
    votingSchedule: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const addChoice = (type) => {
    setFormData(prev => ({
      ...prev,
      [type]: [...prev[type], '']
    }));
  };

  const removeChoice = (type, index) => {
    setFormData(prev => ({
      ...prev,
      [type]: prev[type].filter((_, i) => i !== index)
    }));
  };

  const updateChoice = (type, index, value) => {
    setFormData(prev => ({
      ...prev,
      [type]: prev[type].map((choice, i) => i === index ? value : choice)
    }));
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted:', formData);
    // You can add actual submission logic here
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

      {/* Main Form */}
      <motion.div 
        className="bg-black border border-[#34FCB4] p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.h1 
          className="text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Create proposal
        </motion.h1>
        
        <motion.p 
          className="text-[#D1D5DB] text-lg mb-8 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Complete the fields below to submit a new proposal for the Lunex Network. A collateral of 10,000 $LNEX is required to create a proposal, which will be refunded if the proposal is approved by the community.
        </motion.p>

        <div className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-white font-semibold mb-2">Name</label>
            <input
              type="text"
              placeholder="Proposal name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full bg-transparent border border-[#34FCB4] text-white px-4 py-3 focus:outline-none focus:border-[#34FCB4] focus:ring-1 focus:ring-[#34FCB4]"
            />
          </div>

          {/* Description Field */}
          <div>
            <label className="block text-white font-semibold mb-2">Description</label>
            <textarea
              placeholder="Proposal description"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              rows={4}
              className="w-full bg-transparent border border-[#34FCB4] text-white px-4 py-3 focus:outline-none focus:border-[#34FCB4] focus:ring-1 focus:ring-[#34FCB4] resize-none"
            />
          </div>

          {/* URI Field */}
          <div>
            <label className="block text-white font-semibold mb-2">URI</label>
            <input
              type="text"
              placeholder="://"
              value={formData.uri}
              onChange={(e) => handleInputChange('uri', e.target.value)}
              className="w-full bg-transparent border border-[#34FCB4] text-white px-4 py-3 focus:outline-none focus:border-[#34FCB4] focus:ring-1 focus:ring-[#34FCB4]"
            />
          </div>

          {/* Community URL Field */}
          <div>
            <label className="block text-white font-semibold mb-2">Community URL</label>
            <input
              type="text"
              value={formData.communityUrl}
              onChange={(e) => handleInputChange('communityUrl', e.target.value)}
              className="w-full bg-transparent border border-[#34FCB4] text-white px-4 py-3 focus:outline-none focus:border-[#34FCB4] focus:ring-1 focus:ring-[#34FCB4]"
            />
          </div>

          {/* Accept Choices */}
          <div>
            <label className="block text-white font-semibold mb-2">Accept choices</label>
            <div className="space-y-3">
              {formData.acceptChoices.map((choice, index) => (
                <div key={index} className="flex items-center gap-3">
                  <input
                    type="text"
                    value={choice}
                    onChange={(e) => updateChoice('acceptChoices', index, e.target.value)}
                    className="flex-1 bg-transparent border border-[#34FCB4] text-white px-4 py-3 focus:outline-none focus:border-[#34FCB4] focus:ring-1 focus:ring-[#34FCB4]"
                  />
                </div>
              ))}
              <button
                onClick={() => addChoice('acceptChoices')}
                className="flex items-center gap-2 text-[#34FCB4] hover:text-white transition-colors duration-200"
              >
                <HiPlus className="w-4 h-4" />
                ADD NEW CHOICE
              </button>
            </div>
          </div>

          {/* Reject Choices */}
          <div>
            <label className="block text-white font-semibold mb-2">Reject choices</label>
            <div className="space-y-3">
              {formData.rejectChoices.map((choice, index) => (
                <div key={index} className="flex items-center gap-3">
                  <input
                    type="text"
                    value={choice}
                    onChange={(e) => updateChoice('rejectChoices', index, e.target.value)}
                    className="flex-1 bg-transparent border border-[#34FCB4] text-white px-4 py-3 focus:outline-none focus:border-[#34FCB4] focus:ring-1 focus:ring-[#34FCB4]"
                  />
                  {formData.rejectChoices.length > 1 && (
                    <button
                      onClick={() => removeChoice('rejectChoices', index)}
                      className="text-red-400 hover:text-red-300 transition-colors duration-200"
                    >
                      <HiTrash className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
              <button
                onClick={() => addChoice('rejectChoices')}
                className="flex items-center gap-2 text-[#34FCB4] hover:text-white transition-colors duration-200"
              >
                <HiPlus className="w-4 h-4" />
                ADD NEW CHOICE
              </button>
            </div>
          </div>

          {/* Allow Multiple Choices */}
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.allowMultipleChoices}
                onChange={(e) => handleInputChange('allowMultipleChoices', e.target.checked)}
                className="w-4 h-4 text-[#34FCB4] bg-transparent border-2 border-[#34FCB4] rounded focus:ring-[#34FCB4] focus:ring-2"
              />
              <span className="text-white font-semibold">Allow multiple choices</span>
            </label>
          </div>

          {/* Voting Schedule */}
          <div>
            <label className="block text-white font-semibold mb-2">Voting schedule</label>
            <div className="relative">
              <select
                value={formData.votingSchedule}
                onChange={(e) => handleInputChange('votingSchedule', e.target.value)}
                className="w-full bg-transparent border border-[#34FCB4] text-white px-4 py-3 focus:outline-none focus:border-[#34FCB4] focus:ring-1 focus:ring-[#34FCB4] appearance-none"
              >
                <option value="">Select schedule</option>
                <option value="1day">1 Day</option>
                <option value="3days">3 Days</option>
                <option value="7days">7 Days</option>
                <option value="14days">14 Days</option>
              </select>
              <HiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white w-4 h-4 pointer-events-none" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSubmit}
              className="bg-black border border-[#34FCB4] text-white font-bold px-8 py-3 hover:bg-[#34FCB4]/10 transition-all duration-200"
            >
              CREATE PROPOSAL
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-300 text-black font-bold px-8 py-3 hover:bg-gray-200 transition-all duration-200"
            >
              CONNECT WALLET
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CreateProposal;

