import React, { useState } from 'react'

 function Web3GambleEarnHub() {
  const [usdtAmount, setUsdtAmount] = useState('0')
  const [airbAmount, setAirbAmount] = useState('0')

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center p-4">
      <div className="w-full max-w-[1400px] mx-auto bg-black bg-opacity-50 rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <div className="flex space-x-4 mb-6">
              {['Discord', 'Twitter', 'Telegram', 'YouTube', 'Instagram', 'Facebook', 'Medium'].map((social) => (
                <span key={social} className="text-purple-400 text-2xl">*</span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">The Ultimate Web3 Gamble & Earn Hub</h1>
            <p className="text-gray-300 mb-8">Gambling Redefined: Become the House with unprecedented rewards, endless possibilities, and cross-community bridge-building!</p>
            <div className="flex flex-wrap gap-4 mb-8">
              {['Raffles', 'Games', 'Betting'].map((item) => (
                <button key={item} className="bg-gray-800 text-white hover:bg-gray-700 px-4 py-2 rounded">{item}</button>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="text-white border border-white hover:bg-white hover:text-black px-4 py-2 rounded">Whitepaper</button>
              <button className="text-white border border-white hover:bg-white hover:text-black px-4 py-2 rounded">
                Audited & KYC | 100% Secure & Verified
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-8 rounded-lg">
          <div className="bg-black bg-opacity-50 rounded-lg p-6">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-white mb-2">00 : 00 : 00 : 00</div>
              <div className="text-sm text-gray-300">Day Hours Minutes Seconds</div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">$AIRB Pre-Sale 2</h2>
            <div className="bg-white rounded-full h-2 mb-4">
              <div className="bg-blue-500 h-2 rounded-full" style={{width: '0.376%'}}></div>
            </div>
            <div className="text-white mb-4">
              <p>Total Raised: $22,57,119,908</p>
              <p>USD Raised: $4 / $1,125</p>
              <p>Listing price: $0.060</p>
              <p>1 $AIRB = $0.025</p>
            </div>
            <div className="flex gap-2 mb-4">
              {['ETH', 'USDT', 'USDC'].map((currency) => (
                <button key={currency} className="flex-1 text-white border border-white hover:bg-white hover:text-black px-4 py-2 rounded">
                  {currency}
                </button>
              ))}
            </div>
            <p className="text-center text-white mb-4">Switch network to buy with BNB</p>
            <div className="space-y-4 mb-4">
              <div>
                <label htmlFor="usdtAmount" className="block text-sm font-medium text-gray-300">Amount in USDT You Pay:</label>
                <input
                  id="usdtAmount"
                  type="number"
                  value={usdtAmount}
                  onChange={(e) => setUsdtAmount(e.target.value)}
                  className="mt-1 block w-full rounded-md bg-gray-800 border-transparent focus:border-gray-500 focus:bg-gray-900 focus:ring-0 text-white px-4 py-2"
                  placeholder="0"
                />
              </div>
              <div>
                <label htmlFor="airbAmount" className="block text-sm font-medium text-gray-300">Amount in AIRB You Receive:</label>
                <input
                  id="airbAmount"
                  type="number"
                  value={airbAmount}
                  onChange={(e) => setAirbAmount(e.target.value)}
                  className="mt-1 block w-full rounded-md bg-gray-800 border-transparent focus:border-gray-500 focus:bg-gray-900 focus:ring-0 text-white px-4 py-2"
                  placeholder="0"
                />
              </div>
            </div>
            <p className="text-white mb-4">You get free 0 NFT Tickets</p>
            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded">
              Connect wallet
            </button>
            <div className="flex gap-2 mt-4">
              <button className="flex-1 text-white border border-white hover:bg-white hover:text-black px-4 py-2 rounded">
                How to buy
              </button>
              <button className="flex-1 text-white border border-white hover:bg-white hover:text-black px-4 py-2 rounded">
                5% Referral Link
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Web3GambleEarnHub