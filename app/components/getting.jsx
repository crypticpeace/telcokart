import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Telcokart - Getting Started Guide</title>
        <meta name="description" content="Maximize customer engagement and product education by driving traffic to your Store on brand site with the help of unique Ads insights and ad formats." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="h-min bg-gray-200">
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
            </div>
          </div>
    </>
  )
}