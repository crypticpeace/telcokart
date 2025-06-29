import Head from 'next/head'

const adTypes = [
  {
    id: 1,
    title: "Sponsored Ads",
    description: "Drive targeted traffic to your products with AI-powered ad placements that appear in high-visibility locations across our platform.",
    color: "blue",
    detail: "Our algorithm automatically optimizes your ad placements based on real-time performance data to maximize your ROI.",
    content: (
      <div className="flex justify-center">
        <div className="relative">
          <div className="bg-gray-800 rounded-t-2xl p-6 pb-2">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
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
              <div className="p-4 bg-teal-50">
                <div className="text-center mb-4">
                  <div className="bg-teal-100 rounded-lg p-3 mb-3">
                    <div className="h-3 bg-teal-300 rounded mb-2"></div>
                    <div className="h-2 bg-teal-200 rounded"></div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <div className="bg-gray-300 aspect-square rounded"></div>
                  <div className="bg-red-200 aspect-square rounded"></div>
                  <div className="bg-gray-300 aspect-square rounded"></div>
                  <div className="bg-red-300 aspect-square rounded flex items-center justify-center">
                    <div className="text-white text-xs font-bold">AD</div>
                  </div>
                  <div className="bg-yellow-200 aspect-square rounded"></div>
                  <div className="bg-gray-300 aspect-square rounded"></div>
                  <div className="bg-blue-200 aspect-square rounded"></div>
                  <div className="bg-teal-200 aspect-square rounded"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-700 h-4 rounded-b-2xl"></div>
          <div className="bg-gray-600 h-2 mx-8 rounded-b-lg"></div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Sponsored Products",
    description: "Promote individual products directly in search results and product listings to boost visibility and conversions.",
    color: "purple",
    detail: "Increase discoverability of your products when shoppers are actively searching for similar items.",
    content: (
      <div className="flex justify-center">
        <div className="relative w-full max-w-md">
          <div className="bg-gray-100 rounded-lg p-6 shadow-inner">
            <div className="flex items-center mb-4 p-2 bg-white rounded">
              <div className="w-6 h-6 bg-gray-300 rounded mr-3"></div>
              <div className="flex-1 bg-gray-200 h-6 rounded"></div>
            </div>
            <div className="space-y-4">
              <div className="flex bg-white p-3 rounded-lg shadow-sm items-center">
                <div className="w-16 h-16 bg-yellow-100 rounded mr-4"></div>
                <div className="flex-1">
                  <div className="h-4 bg-blue-100 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-green-100 rounded w-1/2"></div>
                </div>
                <div className="w-20 h-8 bg-purple-200 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-bold text-purple-700">SPONSORED</span>
                </div>
              </div>
              <div className="flex bg-white p-3 rounded-lg shadow-sm items-center">
                <div className="w-16 h-16 bg-blue-100 rounded mr-4"></div>
                <div className="flex-1">
                  <div className="h-4 bg-blue-100 rounded w-2/3 mb-2"></div>
                  <div className="h-3 bg-green-100 rounded w-1/3"></div>
                </div>
              </div>
              <div className="flex bg-white p-3 rounded-lg shadow-sm items-center">
                <div className="w-16 h-16 bg-green-100 rounded mr-4"></div>
                <div className="flex-1">
                  <div className="h-4 bg-blue-100 rounded w-4/5 mb-2"></div>
                  <div className="h-3 bg-green-100 rounded w-2/5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Display Ads",
    description: "Capture attention with visually rich banner ads displayed across our network of high-traffic websites.",
    color: "green",
    detail: "Perfect for brand awareness campaigns with customizable sizes and formats to match your marketing goals.",
    content: (
      <div className="flex justify-center">
        <div className="relative w-full max-w-md">
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-blue-400 to-green-400 flex items-center justify-center">
              <div className="text-white text-xl font-bold text-center p-4">
                YOUR BRAND HERE
                <div className="text-sm mt-2">Amazing Deals Inside!</div>
              </div>
            </div>
            <div className="p-4 bg-white">
              <div className="flex justify-between items-center mb-2">
                <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                <div className="h-3 bg-gray-200 rounded w-1/4"></div>
              </div>
              <div className="h-3 bg-gray-200 rounded w-1/2 mb-4"></div>
              <div className="grid grid-cols-3 gap-2">
                <div className="h-20 bg-blue-100 rounded"></div>
                <div className="h-20 bg-yellow-100 rounded"></div>
                <div className="h-20 bg-red-100 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "Video Ads",
    description: "Engage customers with immersive video content that tells your brand story and showcases products in action.",
    color: "red",
    detail: "Drive higher engagement with auto-playing or click-to-play video ads in feed, search results, and product pages.",
    content: (
      <div className="flex justify-center">
        <div className="relative w-full max-w-md">
          <div className="bg-gray-900 rounded-lg overflow-hidden aspect-video relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white ml-1"></div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <div className="text-white font-bold">Your Product Video</div>
              <div className="text-white text-sm">0:30</div>
            </div>
          </div>
          <div className="mt-4 bg-gray-100 p-3 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
              <button className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Watch
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
]

const colorClasses = {
  blue: {
    text: "text-blue-500",
    bg: "bg-blue-500",
    hover: "hover:bg-blue-600"
  },
  purple: {
    text: "text-purple-500",
    bg: "bg-purple-500",
    hover: "hover:bg-purple-600"
  },
  green: {
    text: "text-green-500",
    bg: "bg-green-500",
    hover: "hover:bg-green-600"
  },
  red: {
    text: "text-red-500",
    bg: "bg-red-500",
    hover: "hover:bg-red-600"
  }
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Telcokart - Advertising Solutions</title>
        <meta name="description" content="Maximize customer engagement with our advertising solutions including Sponsored Ads, Products, Display, and Video Ads." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-4 space-y-8">
          {adTypes.map((ad) => (
            <div key={ad.id} className="bg-white rounded-3xl shadow-lg p-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-8">
                <div>
                  <h1 className={`text-4xl font-bold ${colorClasses[ad.color].text} mb-6`}>
                    {ad.title}
                  </h1>
                  <p className="text-gray-800 text-lg mb-8 leading-relaxed">
                    {ad.description}
                  </p>
                  <div className="flex gap-4">
                    <button className="border-2 border-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-full hover:border-gray-400 transition-colors">
                      Learn more
                    </button>
                    <button className={`${colorClasses[ad.color].bg} ${colorClasses[ad.color].hover} text-white font-semibold py-3 px-6 rounded-full transition-colors`}>
                      Get Started
                    </button>
                  </div>
                </div>
                {ad.content}
              </div>
              <div className="border-t border-gray-100 pt-8">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {ad.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}