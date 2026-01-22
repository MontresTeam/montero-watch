import React from 'react'

const Page = () => {
  // Sample data - replace with your actual data source
  const warrantyData = {
    modelName: "Apple Watch Series 9",
    dialVersion: "GPS + Cellular, 45mm",
    serialNumber: "ABCD1234EFGH5678",
    purchaseDate: "2024-01-15",
    warrantyExpiryDate: "2025-01-15",
    status: "Active",
    remainingDays: 120
  };

  // Calculate remaining warranty time
  const getRemainingTimeText = () => {
    const months = Math.floor(warrantyData.remainingDays / 30);
    const days = warrantyData.remainingDays % 30;
    
    if (months > 0) {
      return `${months} month${months > 1 ? 's' : ''} ${days > 0 ? ` and ${days} day${days > 1 ? 's' : ''}` : ''}`;
    }
    return `${days} day${days !== 1 ? 's' : ''}`;
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4">
      {/* Header */}
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">NFC Card Warranty</h1>
        <p className="text-gray-600">Scan your NFC card to view warranty details</p>
      </div>

      {/* Warranty Card */}
      <div className="max-w-md mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-6 border border-blue-100">
        {/* Status Badge */}
        <div className="flex justify-end mb-6">
          <span className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
            warrantyData.status === 'Active' 
              ? 'bg-green-100 text-green-800 border border-green-200' 
              : 'bg-red-100 text-red-800 border border-red-200'
          }`}>
            {warrantyData.status}
          </span>
        </div>

        {/* Device Model */}
        <div className="mb-8 text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-1">{warrantyData.modelName}</h2>
          <p className="text-gray-600">{warrantyData.dialVersion}</p>
        </div>

        {/* Details Grid */}
        <div className="space-y-4 mb-8">
          {/* Serial Number */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide font-medium mb-1">Serial Number</p>
                <p className="text-gray-800 font-mono font-semibold">{warrantyData.serialNumber}</p>
              </div>
              <button className="text-blue-600 hover:text-blue-800 p-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Purchase Date */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
            <p className="text-xs text-gray-500 uppercase tracking-wide font-medium mb-1">Purchase Date</p>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-800 font-medium">{formatDate(warrantyData.purchaseDate)}</p>
            </div>
          </div>

          {/* Warranty Expiry */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
            <p className="text-xs text-gray-500 uppercase tracking-wide font-medium mb-1">Warranty Expiry Date</p>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-800 font-medium">{formatDate(warrantyData.warrantyExpiryDate)}</p>
            </div>
          </div>

          {/* Remaining Warranty */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl p-4 text-white">
            <p className="text-xs opacity-90 uppercase tracking-wide font-medium mb-1">Remaining Warranty Time</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-xl font-bold">{getRemainingTimeText()}</p>
              </div>
              <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                {warrantyData.remainingDays} days
              </span>
            </div>
          </div>
        </div>

        {/* View Full Terms Button */}
        <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3.5 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          View Full Terms & Conditions
        </button>

        {/* Help Text */}
        <p className="text-xs text-gray-500 text-center mt-4">
          Need help? Contact support at support@example.com
        </p>
      </div>

      {/* Additional Info */}
      <div className="max-w-md mx-auto mt-6 bg-white rounded-xl p-4 shadow-sm border border-gray-200">
        <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
          <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          NFC Card Instructions
        </h3>
        <ul className="text-sm text-gray-600 space-y-1 pl-2">
          <li>• Tap your NFC card near your phone s NFC reader</li>
          <li>• Keep the card steady during scanning</li>
          <li>• Ensure NFC is enabled on your device</li>
          <li>• Warranty details are securely stored on the card</li>
        </ul>
      </div>
    </div>
  )
}

export default Page