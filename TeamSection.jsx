import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import teamIT from '../assets/team_it.png'
import teamCrypto from '../assets/team_crypto.png'
import teamMarketing from '../assets/team_marketing.png'

const TeamSection = () => {
  const teamMembers = [
    {
      image: teamIT,
      title: "IT Specialist",
      description: "Our IT Specialist ensures that all our technological operations run smoothly and efficiently. With a keen eye for detail and a deep understanding of complex systems, they are the backbone of our digital infrastructure, ensuring robust security and seamless functionality.",
      color: "border-red-200 bg-red-50"
    },
    {
      image: teamCrypto,
      title: "Crypto Advisor",
      description: "Our Crypto Advisor provides insights into the cryptocurrency landscape, helping us navigate the complexities of the blockchain world. Their expertise in crypto economics and market trends ensures that Dolphin remains a leader in the token economy.",
      color: "border-green-200 bg-green-50"
    },
    {
      image: teamMarketing,
      title: "Digital Marketing Specialist",
      description: "The Digital Marketing Specialist crafts and executes effective marketing strategies to enhance our online presence and engage with our audience. Their innovative approach and deep understanding of digital trends help us connect with the right audience and drive our growth.",
      color: "border-blue-200 bg-blue-50"
    }
  ]

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Meet our team
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            At Dolphin, we are proud to introduce a diverse team of professionals dedicated to driving 
            innovation and success in the blockchain and e-commerce spaces. Each team member brings 
            unique expertise and a passion for excellence, ensuring that Dolphin remains at the 
            forefront of industry advancements.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className={`${member.color} hover:shadow-lg transition-shadow`}>
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <img 
                    src={member.image} 
                    alt={member.title}
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl text-gray-800">
                  {member.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {member.description}
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className={`${
                    index === 0 ? 'border-red-300 text-red-600 hover:bg-red-100' :
                    index === 1 ? 'border-green-300 text-green-600 hover:bg-green-100' :
                    'border-blue-300 text-blue-600 hover:bg-blue-100'
                  }`}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection

