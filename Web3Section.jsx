import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Target, Users, Vote } from 'lucide-react'

const Web3Section = () => {
  return (
    <section id="web3" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What is Web3, simply put?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Web3 is the new generation of the internet, where:
          </p>
        </div>

        {/* Web2 vs Web3 Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Web2 (Old) */}
          <Card className="bg-gray-100 border-gray-300">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-700">Web2 (Old)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-gray-500 rounded-full mt-2"></span>
                <span className="text-gray-600">You are just a user</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-gray-500 rounded-full mt-2"></span>
                <span className="text-gray-600">The company owns your data</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-gray-500 rounded-full mt-2"></span>
                <span className="text-gray-600">No income from your usage</span>
              </div>
            </CardContent>
          </Card>

          {/* Web3 (New) */}
          <Card className="bg-blue-50 border-blue-300">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">Web3 (New)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                <span className="text-blue-600">You are also an owner and contributor</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                <span className="text-blue-600">You own your data and wallet</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                <span className="text-blue-600">You can earn by participating and interacting</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Dolphin Benefits */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Target className="w-8 h-8 text-cyan-500" />
            <h3 className="text-3xl font-bold text-gray-800">
              In Dolphin Solana, token holders can use Web3 to get:
            </h3>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Exclusive Content */}
          <Card className="bg-blue-500 text-white hover:bg-blue-600 transition-colors">
            <CardContent className="p-8 text-center">
              <div className="text-4xl font-bold mb-2">1.</div>
              <h4 className="text-xl font-semibold">Exclusive Content</h4>
            </CardContent>
          </Card>

          {/* NFT Privileges */}
          <Card className="bg-blue-500 text-white hover:bg-blue-600 transition-colors">
            <CardContent className="p-8 text-center">
              <div className="text-4xl font-bold mb-2">2.</div>
              <h4 className="text-xl font-semibold">NFT Privileges</h4>
            </CardContent>
          </Card>

          {/* Voting Rights */}
          <Card className="bg-blue-500 text-white hover:bg-blue-600 transition-colors">
            <CardContent className="p-8 text-center">
              <div className="text-4xl font-bold mb-2">3.</div>
              <h4 className="text-xl font-semibold">Voting Rights (DAO)</h4>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Web3Section

