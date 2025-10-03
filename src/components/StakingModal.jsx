import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiInformationCircle } from 'react-icons/hi';
import PopupModal from './PopupModal';
import { IoAddCircleSharp } from "react-icons/io5";

const StakingModal = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState('');
  const [agreed, setAgreed] = useState(false);

  return (
    <PopupModal
      isOpen={isOpen}
      onClose={onClose}
      title={
        <div className="flex items-center gap-3">
          <img src="/wtfav.png" alt="Lunex" className="w-8 h-8" />
          <span>Lunex Staking</span>
        </div>
      }
    >

              {/* Staking Details */}
              <div className="space-y-4 mb-6 ">
                {/* Reference APR */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Reference APR</span>
                  <span className="text-[#34FCB4] font-semibold">2.21%</span>
                </div>

                {/* Term */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Term</span>
                  <div className="flex items-center gap-2">
                    <span className="text-white">Flexible</span>
                    <HiInformationCircle className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Amount */}
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Amount</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Min amount: 0.001 Lunex"
                      className="w-full  border border-[#34FCB4] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#34FCB4] transition-colors"
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center ">
                      <span className="text-gray-200 flex items-center gap-2"> <img src="/fav.png" alt="Lunex" className="w-4 h-4" /> Lunex</span>
                      <button className=" text-[#34FCB4] px-3 py-1 rounded text-sm font-semibold hover:bg-[#34FCB4]/80 transition-colors">
                        Max
                      </button>
                    </div>
                  </div>
                </div>

                {/* Funding Account */}
                <div>
                 
                  <div className="flex items-center justify-between ">
                  <label className="block text-gray-400 text-xs mb-2">Funding Account</label>
               <div className='flex items-center text-xs gap-2'>     <span className="text-white text-xs">0 Lunex</span>
            
                    <IoAddCircleSharp className='w-4 h-4 text-[#34FCB4]' />
         
                  </div> </div>
                </div>

                {/* Max Amount */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-xs">Max Amount</span>
                  <span className="text-white  text-xs">10.207.99474212 Lunex</span>
                </div>
              </div>

              {/* Summary Section */}
              <div className="mb-6 border-t-2 border-[#2D2C2D]  pt-4">
                <h3 className="text-white font-semibold mb-4 text-center text-xl">Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">First Distribution Date</span>
                    <span className="text-white">9/19/2025, 20:34</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Interest End Date</span>
                    <span className="text-white">9/20/2025, 18:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Redeem To</span>
                    <span className="text-white">9/22/2025, 14:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Redemption Period</span>
                    <span className="text-white">3 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Profit Received</span>
                    <span className="text-white">Daily</span>
                  </div>
                </div>
              </div>

              {/* Estimated Rewards */}
              <div className="mb-6">
                <h3 className="text-white font-semibold mb-2">Estimated Rewards</h3>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Lunex Earnings</span>
                  <span className="text-white">- Lunex / D</span>
                </div>
              </div>

              {/* Agreement */}
              <div className="mb-6">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="w-4 h-4 text-[#34FCB4] bg-gray-800 border-gray-600 rounded focus:ring-[#34FCB4] focus:ring-2"
                  />
                  <span className="text-gray-400 text-sm">
                    I have read and agree to the{' '}
                    <span className="text-[#34FCB4] underline cursor-pointer hover:text-[#34FCB4]/80">
                      Lunex Network Agreement
                    </span>
                  </span>
                </label>
              </div>

              {/* Confirm Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={!agreed}
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-200 ${
                  agreed
                    ? 'bg-[#34FCB4] text-black hover:bg-[#34FCB4]/80 cursor-pointer'
                    : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                }`}
              >
                Confirm
              </motion.button>
    </PopupModal>
  );
};

export default StakingModal;
