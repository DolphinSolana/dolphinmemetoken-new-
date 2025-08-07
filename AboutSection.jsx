import dolphinMain from '../assets/dolphin_main.png'

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Dolphin Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img 
                src={dolphinMain} 
                alt="Dolphin Character" 
                className="w-96 h-96 object-contain"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">
              About Dolphin Solana
            </h2>
            
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                At Dolphin Solana, we believe that cryptocurrencies can be more than just an investment; 
                they can be a fun and rewarding experience. Inspired by the playful and intelligent spirit 
                of the dolphin, we strive to build a community where everyone can participate, enjoy, and 
                benefit from the exciting world of Web3.
              </p>
              
              <p>
                We combine the appeal of a meme coin with real utility, offering DOL token holders a unique 
                opportunity for digital ownership, participation in decision-making, and access to exclusive 
                content and valuable rewards. Join us on this journey to redefine what a meme coin can be.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

