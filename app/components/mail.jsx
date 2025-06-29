import Head from 'next/head'

export default function Home() {
  return (
    <>
          {/* Email Subscription Section */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
          <div className="flex justify-center items-center ">
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-white shadow-lg p-8 rounded-3xl max-w-6xl w-full">
              {/* Left Content */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                  Get Amazon Ads emails delivered directly to your inbox
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Maximize customer engagement and product education by driving traffic to your
                </p>
                
                {/* Email Form */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      *Business Email
                    </label>
                    <input
                      type="email"
                      placeholder="Business Email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-colors">
                    Submit
                  </button>
                  
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Opt out anytime. By signing in you agree to our Privacy Policy
                  </p>
                </div>
              </div>

              {/* Right Content - Blue Rectangle */}
              <div className="flex justify-center">
                <div className="bg-blue-500 w-full max-w-sm h-56 rounded-2xl"></div>
              </div>
            </div>
          </div>
          </div>
    </>
  )
}