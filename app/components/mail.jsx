import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Telcokart - Getting Started Guide</title>
        <meta name="description" content="Maximize customer engagement and product education by driving traffic to your Store on brand site with the help of unique Ads insights and ad formats." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-12 space-y-8">
          
          {/* Getting Started Guide Section */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="text-sm text-gray-600 mb-4">Guide</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                  Getting started guide for sponsored ads
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Maximize customer engagement and product education by driving traffic to your
                </p>
                <button className="text-gray-900 font-semibold underline hover:no-underline transition-all">
                  Read the guide
                </button>
              </div>

              {/* Right Content - Blue Rectangle */}
              <div className="flex justify-center">
                <div className="bg-blue-500 w-full max-w-sm h-40 rounded-2xl"></div>
              </div>
            </div>
          </div>

          {/* Email Subscription Section */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
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
      </div>
    </>
  )
}