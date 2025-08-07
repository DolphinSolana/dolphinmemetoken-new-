import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Web3 & NFT', href: '#web3' },
    { name: 'DAO', href: '#dao' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'About Us', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'How To Buy', href: '#buy' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Whitepaper', href: '#whitepaper' }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cyan-400/95 backdrop-blur-sm border-b border-cyan-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Dolphin Logo" className="w-10 h-10" />
            <span className="text-xl font-bold text-white">Dolphin</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="text-white hover:bg-cyan-500/50 hover:text-white px-3 py-2 text-sm"
                asChild
              >
                <a href={item.href}>{item.name}</a>
              </Button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:bg-cyan-500/50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-cyan-300">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className="text-white hover:bg-cyan-500/50 hover:text-white justify-start px-3 py-2"
                  asChild
                  onClick={() => setIsMenuOpen(false)}
                >
                  <a href={item.href}>{item.name}</a>
                </Button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

