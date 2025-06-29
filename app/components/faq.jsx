'use client'
import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState(0)

  const faqs = [
    {
      question: "What is increasing traffic?",
      answer: "Maximize customer engagement and product education by driving traffic to your Maximize customer engagement and product education by driving traffic to your Maximize customer engagement and product education by driving traffic to your Maximize customer engagement and product education by driving traffic to your"
    },
    {
      question: "What is increasing traffic?",
      answer: "Maximize customer engagement and product education by driving traffic to your Store on brand site with the help of unique Ads insights and ad formats."
    },
    {
      question: "What is increasing traffic?",
      answer: "Maximize customer engagement and product education by driving traffic to your Store on brand site with the help of unique Ads insights and ad formats."
    },
    {
      question: "What is increasing traffic?",
      answer: "Maximize customer engagement and product education by driving traffic to your Store on brand site with the help of unique Ads insights and ad formats."
    }
  ]

  return (
    <>
      <Head>
        <title>Telcokart - FAQs</title>
        <meta name="description" content="Frequently asked questions about Telcokart services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 py-16">
          
          {/* FAQs Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-white mb-8">FAQs</h1>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4 mb-16">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  className="w-full text-left p-6 focus:outline-none hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <div className={`transform transition-transform duration-200 ${
                      openFAQ === index ? 'rotate-45' : ''
                    }`}>
                      <div className="w-6 h-6 flex items-center justify-center">
                        <div className="w-4 h-0.5 bg-gray-600"></div>
                        <div className={`w-0.5 h-4 bg-gray-600 absolute transition-opacity ${
                          openFAQ === index ? 'opacity-0' : 'opacity-100'
                        }`}></div>
                      </div>
                    </div>
                  </div>
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          
         
       

        </div>
      </div>
    </>
  )
}