import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Trophy, Star, Award, Users, TrendingUp, Calendar } from 'lucide-react'

const Results = () => {
  const toppers = [
    {
      name: 'Priya Sharma',
      rank: 1,
      year: 2023,
      service: 'IAS',
      cadre: 'Delhi',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      quote: 'Best IAS provided me with the perfect guidance and study material. The faculty support was exceptional.',
      course: 'Complete UPSC Package'
    },
    {
      name: 'Rajesh Kumar',
      rank: 3,
      year: 2023,
      service: 'IAS',
      cadre: 'Maharashtra',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      quote: 'The mock tests and current affairs coverage helped me stay ahead in the competition.',
      course: 'UPSC Mains Intensive'
    },
    {
      name: 'Anita Verma',
      rank: 7,
      year: 2023,
      service: 'IAS',
      cadre: 'Karnataka',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      quote: 'The interview guidance program was instrumental in building my confidence.',
      course: 'Interview & Personality Test'
    },
    {
      name: 'Vikram Singh',
      rank: 12,
      year: 2023,
      service: 'IPS',
      cadre: 'Uttar Pradesh',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      quote: 'Best IAS methodology and expert faculty made all the difference in my preparation.',
      course: 'Complete UPSC Package'
    },
    {
      name: 'Meera Patel',
      rank: 18,
      year: 2023,
      service: 'IFS',
      cadre: 'Foreign Service',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face',
      quote: 'The comprehensive study material and regular assessments kept me on track.',
      course: 'UPSC Prelims Foundation'
    },
    {
      name: 'Arjun Reddy',
      rank: 25,
      year: 2023,
      service: 'IAS',
      cadre: 'Telangana',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face',
      quote: 'The personalized mentorship program helped me overcome my weaknesses.',
      course: 'Complete UPSC Package'
    }
  ]

  const yearlyStats = [
    { year: 2023, selections: 485, topRanks: 25, successRate: '68%' },
    { year: 2022, selections: 420, topRanks: 22, successRate: '65%' },
    { year: 2021, selections: 380, topRanks: 18, successRate: '62%' },
    { year: 2020, selections: 350, topRanks: 15, successRate: '58%' }
  ]

  const serviceWiseResults = [
    { service: 'IAS', count: 180, percentage: '37%', color: 'bg-blue-500' },
    { service: 'IPS', count: 120, percentage: '25%', color: 'bg-green-500' },
    { service: 'IFS', count: 85, percentage: '17%', color: 'bg-purple-500' },
    { service: 'IRS', count: 100, percentage: '21%', color: 'bg-orange-500' }
  ]

  const achievements = [
    {
      title: 'All India Rank 1',
      count: '8 Times',
      description: 'Our students have secured AIR 1 multiple times',
      icon: Trophy
    },
    {
      title: 'Top 10 Ranks',
      count: '150+',
      description: 'Students in top 10 positions across years',
      icon: Star
    },
    {
      title: 'Total Selections',
      count: '2,500+',
      description: 'Successful candidates in civil services',
      icon: Award
    },
    {
      title: 'Success Rate',
      count: '68%',
      description: 'Higher than national average of 0.2%',
      icon: TrendingUp
    }
  ]

  return (
    <section id="results" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-primary/10 text-primary mb-4">
            Our Results
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Success Stories That Inspire
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our students' achievements speak for themselves. Join the ranks of successful civil servants 
            who trusted Best IAS for their UPSC journey
          </p>
        </div>

        {/* Key Achievements */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <achievement.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{achievement.count}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-sm text-gray-600">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Top Performers */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">2023 Top Performers</h3>
            <p className="text-gray-600">Meet our star students who achieved remarkable success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toppers.map((topper, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  {/* Header with Rank */}
                  <div className="bg-gradient-to-r from-primary to-accent p-4 text-white relative">
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-white/20 text-white">
                        AIR {topper.rank}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-4">
                      <img
                        src={topper.image}
                        alt={topper.name}
                        className="w-16 h-16 rounded-full border-2 border-white/20"
                      />
                      <div>
                        <h4 className="text-xl font-bold">{topper.name}</h4>
                        <p className="text-white/90">{topper.service} - {topper.cadre}</p>
                        <p className="text-white/80 text-sm">UPSC {topper.year}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <Badge variant="secondary" className="text-xs">
                        {topper.course}
                      </Badge>
                    </div>
                    
                    <blockquote className="text-gray-600 italic mb-4">
                      "{topper.quote}"
                    </blockquote>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                        ))}
                      </div>
                      <Button variant="ghost" size="sm" className="text-primary">
                        Read Story
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Yearly Performance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span>Year-wise Performance</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {yearlyStats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="text-lg font-bold text-gray-900">{stat.year}</div>
                      <div className="text-sm text-gray-600">UPSC Results</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{stat.selections}</div>
                      <div className="text-sm text-gray-600">Selections</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-accent">{stat.topRanks}</div>
                      <div className="text-sm text-gray-600">Top 100</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">{stat.successRate}</div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Service-wise Distribution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <span>Service-wise Results (2023)</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {serviceWiseResults.map((service, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">{service.service}</span>
                      <span className="text-sm text-gray-600">{service.count} selections</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className={`${service.color} h-2 rounded-full`}
                          style={{ width: service.percentage }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{service.percentage}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <Trophy className="h-16 w-16 text-primary mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Your Success Story Awaits
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of successful candidates who achieved their dreams with Best IAS. 
              Start your journey today and become the next success story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
                Start Your Preparation
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                Download Success Stories
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-8 mt-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">25+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50,000+</div>
                <div className="text-sm text-gray-600">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2,500+</div>
                <div className="text-sm text-gray-600">Successful Selections</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Results