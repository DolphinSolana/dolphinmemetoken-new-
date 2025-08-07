import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'

const TokenomicsSection = () => {
  const tokenData = [
    { name: 'Pre-sales on Smith Tool', value: 30, color: '#FF6B6B' },
    { name: 'Liquidity pool DEX', value: 20, color: '#4ECDC4' },
    { name: 'Team & Development', value: 15, color: '#45B7D1' },
    { name: 'Marketing', value: 13, color: '#96CEB4' },
    { name: 'Airdrop', value: 10, color: '#FFEAA7' },
    { name: 'Burned on old smart contract', value: 12, color: '#DDA0DD' }
  ]

  const tokenDetails = [
    { label: 'Name', value: 'Dolphin' },
    { label: 'Symbol', value: 'DOL' },
    { label: 'Network', value: 'Solana' },
    { label: 'Total Supply', value: '77,777,777.7' },
    { label: 'Contract Address', value: 'GPfzbTska6x6KyZH8FVimjcH3YxgN5kVvWDc8f8dsaZN' }
  ]

  return (
    <section id="tokenomics" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Tokenomics
          </h2>
          <p className="text-xl text-gray-600">
            Dolphin (DOL) token distribution is as follows:
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Pie Chart */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-xl">
                  Dolphin Tokenomics Distribution
                </CardTitle>
                <p className="text-center text-sm text-gray-500">
                  Burned on old smart contract
                </p>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={tokenData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={120}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {tokenData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Distribution List & Token Details */}
          <div className="space-y-8">
            {/* Distribution List */}
            <div className="space-y-4">
              {tokenData.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="text-2xl">⭐</span>
                  <span className="text-lg text-gray-700">
                    <strong>{item.value}%</strong> {item.name}:
                  </span>
                </div>
              ))}
            </div>

            {/* Token Details */}
            <Card className="bg-gray-50">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">
                  Token Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {tokenDetails.map((detail, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <span className="font-semibold text-gray-700 min-w-fit">
                      {detail.label}:
                    </span>
                    <span className="text-gray-600 text-right ml-4 break-all">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TokenomicsSection

