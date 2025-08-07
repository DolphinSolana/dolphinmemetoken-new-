import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Wallet, Clock } from 'lucide-react'
import dolphinBusiness from '../assets/dolphin_business.png'

const HowToBuySection = () => {
  return (
    <section id="buy" className="py-20 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Dolphin Business Image */}
          <div className="flex justify-center lg:justify-start">
            <img 
              src={dolphinBusiness} 
              alt="Business Dolphin" 
              className="w-80 h-80 object-contain"
            />
          </div>

          {/* Right Side - Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">
                PRESALE & PUBLIC SALE
              </h2>
              <div className="flex items-center space-x-2">
                <Clock className="w-6 h-6 text-yellow-300" />
                <span className="text-2xl font-semibold text-yellow-300">COMING SOON.</span>
              </div>
              <h3 className="text-2xl font-bold">
                STAY TUNED FOR HOW TO BUY OUR TOKENS!
              </h3>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-white/90">
                For now ensure you - Set up a cryptocurrency wallet that supports Solana-based tokens, such as
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-lg font-semibold"
                >
                  <Wallet className="w-5 h-5 mr-2" />
                  WALLET
                </Button>
                <Button 
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-lg font-semibold"
                >
                  <Wallet className="w-5 h-5 mr-2" />
                  PHANTOM
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowToBuySection

