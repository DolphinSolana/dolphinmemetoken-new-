import { Button } from '@/components/ui/button'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="Dolphin Logo" className="w-10 h-10" />
              <span className="text-xl font-bold">Dolphin Meme Token</span>
            </div>
            <p className="text-gray-300 mb-4">
              The Future of Real World Utility Memes on Solana. More than just a meme coin - 
              a community-driven project with real utility and purpose.
            </p>
            <div className="flex space-x-2">
              <Button size="sm" className="bg-red-600 hover:bg-red-700">YT</Button>
              <Button size="sm" className="bg-green-600 hover:bg-green-700">TG</Button>
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700">DC</Button>
              <Button size="sm" className="bg-pink-600 hover:bg-pink-700">IG</Button>
              <Button size="sm" className="bg-red-500 hover:bg-red-600">TT</Button>
              <Button size="sm" className="bg-orange-600 hover:bg-orange-700">R</Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#tokenomics" className="text-gray-300 hover:text-white transition-colors">Tokenomics</a></li>
              <li><a href="#roadmap" className="text-gray-300 hover:text-white transition-colors">Roadmap</a></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li><a href="#web3" className="text-gray-300 hover:text-white transition-colors">Web3 & NFT</a></li>
              <li><a href="#dao" className="text-gray-300 hover:text-white transition-colors">DAO</a></li>
              <li><a href="#benefits" className="text-gray-300 hover:text-white transition-colors">Benefits</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-white transition-colors">Team</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Dolphin Meme Token. All rights reserved. Built with ❤️ for the community.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Made with Manus
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

