import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Telcokart - Sponsored Ads</title>
        <meta name="description" content="Maximize customer engagement and product education by driving traffic to your Store on brand site with the help of unique Ads insights and ad formats." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Single Main Card */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              {/* Left Content */}
              <div>
                <h1 className="text-4xl font-bold text-blue-500 mb-6">
                  Sponsored Ads
                </h1>
                <p className="text-gray-800 text-lg mb-8 leading-relaxed">
                  Maximize customer engagement and product education by driving traffic to your Store on brand site with the help of unique Ads insights and ad formats.
                </p>
                <div className="flex gap-4">
                  <button className="border-2 border-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-full hover:border-gray-400 transition-colors">
                    Learn more
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition-colors">
                    Get Started
                  </button>
                </div>
              </div>

              {/* Right Content - Laptop Mockup */}
              <div className="flex justify-center">
                <div className="relative">
                  {/* Laptop Frame */}
                  <div className="bg-gray-800 rounded-t-2xl p-6 pb-2">
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                      {/* Browser Bar */}
                      <div className="bg-gray-100 px-4 py-3 flex items-center gap-2">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="flex-1 bg-white rounded mx-4 px-3 py-1">
                          <div className="text-xs text-gray-500">www.telcokart.com</div>
                        </div>
                      </div>
                      
                      {/* Website Content */}
                      <div className="p-4 bg-teal-50">
                        <div className="text-center mb-4">
                          <div className="bg-teal-100 rounded-lg p-3 mb-3">
                            <div className="h-3 bg-teal-300 rounded mb-2"></div>
                            <div className="h-2 bg-teal-200 rounded"></div>
                          </div>
                        </div>
                        
                        {/* Product Grid */}
                        <div className="grid grid-cols-4 gap-2">
                          {/* Row 1 */}
                          <div className="bg-gray-300 aspect-square rounded"></div>
                          <div className="bg-red-200 aspect-square rounded"></div>
                          <div className="bg-gray-300 aspect-square rounded"></div>
                          <div className="bg-red-300 aspect-square rounded flex items-center justify-center">
                            <div className="text-white text-xs font-bold">SALE</div>
                          </div>
                          
                          {/* Row 2 */}
                          <div className="bg-yellow-200 aspect-square rounded"></div>
                          <div className="bg-gray-300 aspect-square rounded"></div>
                          <div className="bg-blue-200 aspect-square rounded"></div>
                          <div className="bg-teal-200 aspect-square rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Laptop Base */}
                  <div className="bg-gray-700 h-4 rounded-b-2xl"></div>
                  <div className="bg-gray-600 h-2 mx-8 rounded-b-lg"></div>
                </div>
              </div>
            </div>

            {/* Bottom Section within same card */}
            <div className="border-t border-gray-100 pt-8">
              <div className="flex items-start gap-4">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Maximize customer engagement and product education by driving traffic to your Store on brand site with the help of unique Ads insights and ad formats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}