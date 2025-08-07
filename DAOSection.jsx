import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Building2, Users, Vote, Target } from 'lucide-react'

const DAOSection = () => {
  return (
    <section id="dao" className="py-20 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Building2 className="w-8 h-8 text-white" />
            <h2 className="text-4xl font-bold text-white">
              What is DAO and why is it important?
            </h2>
          </div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            DAO = Self-governing Community.
          </p>
          <p className="text-lg text-white/80 mt-4">
            Instead of the "project team" deciding everything...
          </p>
        </div>

        {/* Community Voting */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-8">
            The community (token holders) votes on:
          </h3>
        </div>

        {/* Voting Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">✅</div>
              <p className="text-lg">Project Direction</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">✅</div>
              <p className="text-lg">Feature Development</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">✅</div>
              <p className="text-lg">Community Initiatives</p>
            </CardContent>
          </Card>
        </div>

        {/* Key Message */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Target className="w-8 h-8 text-yellow-300" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">
            This means you are not just an "investor", you are a partner and decision-maker.
          </h3>
        </div>
      </div>
    </section>
  )
}

export default DAOSection

