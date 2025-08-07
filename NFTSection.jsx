import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Image, Trophy, MessageCircle, Gift, TrendingUp, Gamepad2 } from 'lucide-react'

const NFTSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Image className="w-8 h-8 text-cyan-500" />
            <h2 className="text-4xl font-bold text-gray-800">
              What are NFTs and why does Dolphin use them?
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            NFT = Unique Digital Ownership.
          </p>
          <p className="text-lg text-gray-600 mt-4">
            In Dolphin Solana, NFTs will be:
          </p>
        </div>

        {/* NFT Benefits Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - VIP Access Card */}
          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-2xl text-green-700 text-center">
                As VIP Access Cards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6">
                <p className="text-green-600 font-semibold">Granting you access to:</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Trophy className="w-5 h-5 text-green-500" />
                  <span className="text-green-700">Exclusive Competitions 🎯</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-green-500" />
                  <span className="text-green-700">Private Chats 🖊️</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Gift className="w-5 h-5 text-green-500" />
                  <span className="text-green-700">Tokens and Rewards 🎁</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  <span className="text-green-700">Market Analysis Tools 📊</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Gamepad2 className="w-5 h-5 text-green-500" />
                  <span className="text-green-700">Satirical Entertainment Content 📺</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right Side - Easy Access */}
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-yellow-700 mb-4">
                Token holders can easily buy or earn these NFTs.
              </h3>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default NFTSection

