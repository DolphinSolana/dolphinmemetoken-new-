import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Target, Coins, Vote, Gift, GraduationCap, TrendingUp } from 'lucide-react'

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Coins className="w-6 h-6" />,
      feature: "🪙 Owning the token",
      benefit: "You get special NFTs or access to Web3 features."
    },
    {
      icon: <Vote className="w-6 h-6" />,
      feature: "🗳️ Participating in DAO",
      benefit: "You vote on project decisions."
    },
    {
      icon: <Gift className="w-6 h-6" />,
      feature: "🎁 Airdrops and Giveaways",
      benefit: "You get rewards for participation and activity."
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      feature: "🎓 Educational and Entertainment Content",
      benefit: "Through the NFT or the project's dedicated Web3 platform."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      feature: "📈 Project Future",
      benefit: "If Dolphin succeeds and expands, the token's value will rise significantly."
    }
  ]

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Target className="w-8 h-8 text-cyan-500" />
            <h2 className="text-4xl font-bold text-gray-800">
              How does the token holder actually benefit?
            </h2>
          </div>
        </div>

        {/* Benefits Table */}
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden">
            <CardHeader className="bg-blue-500 text-white">
              <div className="grid grid-cols-2 gap-4">
                <CardTitle className="text-xl">Feature</CardTitle>
                <CardTitle className="text-xl">What do you get?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {benefits.map((item, index) => (
                <div 
                  key={index}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-4 p-6 border-b border-gray-200 last:border-b-0 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  } hover:bg-blue-50 transition-colors`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-blue-500">
                      {item.icon}
                    </div>
                    <span className="font-medium text-gray-800">{item.feature}</span>
                  </div>
                  <div className="text-gray-600 md:pl-4">
                    {item.benefit}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection

