import React, { useState } from 'react';
import StakingModal from '../components/StakingModal';

const Staking = () => {
  const [stakeAmount, setStakeAmount] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('3');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stakingPeriods = [
    { months: '3', apy: '1.5%' },
    { months: '6', apy: '3.2%' },
    { months: '9', apy: '5.8%' },
    { months: '12', apy: '8.7%' },
  ];

  const stats = [
    { label: 'Total Staked Value', value: '$8,453.59', icon: '/images/stake.png' },
    { label: 'Total Rewards Earned', value: '$1,536.00', icon: '/images/reward.png' },
    { label: 'Current APY', value: '1.5%', icon: '/images/leaf.png' },
    { label: 'Available Balance', value: '8,000,000,000', icon: '/images/locker.png' },
  ];

  return (
    <div className="space-y-8 relative">
      <img src="images/border-top.png" alt="" className='absolute top-0 left-0  w-full' />
      {/* Hero Section */}
      <div className="text-left">
        <div className="relative inline-block">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
            Staking
          </h1>
         
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
       <div className='relative pl-2'>
         {/* Background box/shadow effect */}
         <div className='absolute inset-0 bg-black border border-[#34FCB4] h-[128px] w-[96%] transform translate-x-4 translate-y-1'></div>
         
         {/* Main box */}
         <div className='bg-black border border-[#34FCB4] w-full h-[130px] relative'>
            <div className="p-4 w-full h-full flex items-center">
              <div className="flex items-center gap-4 w-full">
                <img src={stat.icon} alt={stat.label} className="w-14 h-16 sm:w-18 sm:h-22 " />
                <div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                  <p className="text-white text-xl font-bold">{stat.value}</p>
                </div>
              </div>
            </div>
        </div>
       </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-8">
        {/* Staking Form */}
        <div className="lg:col-span-2 w-full sm:w-1/2">
          <div className="relative">
            {/* Background box/shadow effect */}
            <div className='absolute inset-0 bg-black border border-[#34FCB4] transform translate-x-3 translate-y-1'></div>
            
            {/* Main box */}
            <div className="bg-black border border-[#34FCB4] px-4 py-8 relative">
            {/* Staking Period Selection */}
            <div className="mb-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {stakingPeriods.map((period) => (
                  <button
                    key={period.months}
                    onClick={() => setSelectedPeriod(period.months)}
                    className={`p-4 rounded border transition-all duration-200 cursor-pointer ${
                      selectedPeriod === period.months
                        ? 'border-[#34FCB4] bg-gradient-to-r from-[#34FCB4] to-[#1F966B] text-black'
                        : 'border-[#34FCB4] text-white hover:border-gray-500'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-lg font-bold">{period.months} month{period.months !== '1' ? 's' : ''}</div>
                      <div className={`text-xs ${selectedPeriod === period.months ? 'text-black' : 'text-gray-400'}`}>{period.apy}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Amount Input */}
            <div className="mb-6 px-8">
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Enter Stake Amount
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(e.target.value)}
                  placeholder="0"
                  className="w-full bg-white border border-gray-600 rounded-lg px-4 py-4 text-xl font-semibold text-black placeholder-black focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                  <img src="/fav.png" alt="Lunex" className="" />
                  <span className="text-black font-bold">Lunex</span>
                </div>
              </div>
              <div className="flex justify-start gap-2 mt-2">
                <span className="text-sm text-gray-400">Available Amount</span>
                <span className="text-sm text-white flex items-center gap-2"> <img src="/wtfav.png" alt="" className='w-4 h-4' /> 8,000,000,000</span>
              </div>
            </div>

            {/* Stake Button */}
            <div className='flex justify-center px-8'>
            <button 
              onClick={() => setIsModalOpen(true)}
              className=" bg-[#34FCB4] text-black font-bold py-4 rounded-lg hover:from-cyan-500 hover:to-green-500 transition-all duration-200 w-full cursor-pointer"
            >
                Stake
              </button>
            </div>
          </div>
          </div>
        </div>

        {/* Staking History/Rewards */}
        <div className="space-y-2 w-full sm:w-1/2">
          {/* Withdrawal History */}
          <div className="relative">
            {/* Background box/shadow effect */}
   
            
            {/* Main box */}
            <div className="bg-black border border-[#34FCB4]  relative">
            <div className="grid grid-cols-4 gap-4 mb-4 border-b border-[#535353] px-2 py-3">
              <div className="text-center">
                <p className="text-xs text-white font-bold mb-1">AMOUNT</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-white font-bold mb-1">WITHDRAWAL TIME</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-white font-bold mb-1">REWARD</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-white font-bold mb-1">WITHDRAWAL</p>
              </div>
            </div>
            <div className="text-center text-white py-8">
              <p className="text-sm">You have no staking history yet!</p>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Staking Modal */}
      <StakingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default Staking;
