import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Telcokart - Solutions for every marketing objective</title>
        <meta name="description" content="Maximize customer engagement and product education by driving traffic to your Store on brand site with the help of unique Ads insights and ad formats." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Header Section */}
          <div className="mb-16">
            {/* Blue accent line */}
            <div className="w-16 h-5 bg-blue-500 rounded-full mb-6"></div>
            
            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Solutions for every marketing objective
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
              Maximize customer engagement and product education by driving traffic to your Store on brand site with the help of unique Ads insights and ad formats.
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-blue-500 h-40 w-full"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Reach more customers
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Maximize customer engagement and product education by driving traffic to your
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-blue-500 h-40 w-full"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Reach more customers
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Maximize customer engagement and product education by driving traffic to your
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-blue-500 h-40 w-full"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Reach more customers
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Maximize customer engagement and product education by driving traffic to your
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}