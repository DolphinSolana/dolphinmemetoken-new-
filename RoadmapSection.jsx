import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, CheckCircle } from 'lucide-react'

const RoadmapSection = () => {
  const roadmapData = [
    {
      quarter: "Q2 2024:",
      items: [
        "Launch of our website & socials",
        "Social Media Marketing Efforts for Awareness"
      ],
      color: "bg-blue-50 border-blue-200"
    },
    {
      quarter: "Q3 2024:",
      items: [
        "Build partnerships & collaborations",
        "PRESALE and MAIN sale of tokens on Solana",
        "AIRDROPS to early adopters and contest winners",
        "DEX Trading on popular Solana platforms"
      ],
      color: "bg-green-50 border-green-200"
    },
    {
      quarter: "Q4 2024:",
      items: [
        "Expand network of use cases for (DOL) tokens",
        "CEX listings for the token",
        "Continued marketing and collaborations with other projects",
        "2% of our Dolphin token sales will be allocated to support listing the Dolphin project on the Binance Exchange."
      ],
      color: "bg-purple-50 border-purple-200"
    },
    {
      quarter: "Q1 2025:",
      items: [
        "Future expansion plans for the DOLPHIN MEME TOKENS!"
      ],
      color: "bg-orange-50 border-orange-200"
    }
  ]

  return (
    <section id="roadmap" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Roadmap
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our roadmap outlines our strategic milestones and objectives for the Dolphin project. 
            Here's what you can expect in the coming months:
          </p>
        </div>

        {/* Roadmap Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {roadmapData.map((phase, index) => (
            <Card key={index} className={`${phase.color} hover:shadow-lg transition-shadow`}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-xl text-gray-800">
                  <Calendar className="w-6 h-6" />
                  <span>{phase.quarter}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Roadmap Image */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 p-8 rounded-2xl">
            <div className="text-6xl mb-4">🗺️</div>
            <h3 className="text-2xl font-bold text-white">Roadmap</h3>
            <p className="text-white/90 mt-2">Journey to Success</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoadmapSection

