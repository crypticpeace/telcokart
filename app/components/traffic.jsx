import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Telcokart - Drive Traffic and Inspire Action</title>
        <meta name="description" content="Maximize customer engagement and product education by driving traffic to your Store on brand site with the help of unique Ads insights and ad formats." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-gray-900">Telcokart</h1>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16 sm:py-24">
            {/* Hero Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Drive traffic and inspire{' '}
              <span className="text-blue-500">action</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Maximize customer engagement and product education by driving traffic to your Store on brand 
              site with the help of unique Ads insights and ad formats.
            </p>

            {/* CTA Button */}
            <div className="mb-16">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform">
                Small Business
              </button>
            </div>

            {/* Secondary Text */}
            <p className="text-gray-700 text-lg mb-12 max-w-2xl mx-auto">
              Achieve your goals with easy-to-use solutions for 
              businesses of any size.
            </p>

            {/* Bottom Section */}
            
          </div>
        </main>
      </div>
    </>
  )
}