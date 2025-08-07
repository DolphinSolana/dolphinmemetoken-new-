import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import dolphinMain from '../assets/dolphin_main.png'

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-cyan-400 via-cyan-500 to-blue-600 pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Dolphin
              <br />
              <span className="text-white/90">Solana: More</span>
              <br />
              <span className="text-white/90">than just a</span>
              <br />
              <span className="text-yellow-300">"Meme Coin"</span>
              <br />
              <span className="text-white/90">for laughs...</span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-lg">
              It's a meme coin with purpose, a smile, and real utility 😊 ✨
            </p>
            
            <div className="space-y-4">
              <p className="text-lg text-white/80">
                Its idea is to empower token holders to:
              </p>
              <ul className="space-y-2 text-white/90">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-yellow-300 rounded-full"></span>
                  <span>Participate</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-yellow-300 rounded-full"></span>
                  <span>Enjoy</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-yellow-300 rounded-full"></span>
                  <span>And Benefit</span>
                </li>
              </ul>
            </div>
            
            <p className="text-lg text-white/80">
              from Web3, NFT, and DAO technologies, even if they're not experts.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="text-white/90">
                <span className="font-semibold">Follow Us:</span>
              </div>
              <div className="flex space-x-2">
                {/* Social Media Icons */}
                <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                  YT
                </Button>
                <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                  TG
                </Button>
                <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                  DC
                </Button>
                <Button size="sm" className="bg-pink-600 hover:bg-pink-700 text-white">
                  IG
                </Button>
                <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white">
                  TT
                </Button>
                <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white">
                  R
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content - Dolphin Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={dolphinMain} 
                alt="Dolphin Mascot" 
                className="w-96 h-96 object-contain animate-bounce-slow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

