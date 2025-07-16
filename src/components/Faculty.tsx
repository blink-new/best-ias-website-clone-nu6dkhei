import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Star, Award, BookOpen, Users } from 'lucide-react'

const Faculty = () => {
  const facultyMembers = [
    {
      name: 'Dr. Rajesh Kumar',
      designation: 'Director & Founder',
      specialization: 'Public Administration',
      experience: '25+ Years',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      qualifications: ['Ph.D. in Public Administration', 'Former IAS Officer', 'UPSC Topper 1995'],
      rating: 4.9,
      students: '15,000+'
    },
    {
      name: 'Prof. Meera Sharma',
      designation: 'Head of Faculty',
      specialization: 'History & Culture',
      experience: '20+ Years',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      qualifications: ['M.A. History (JNU)', 'Former Professor DU', 'UPSC Subject Expert'],
      rating: 4.8,
      students: '12,000+'
    },
    {
      name: 'Dr. Amit Verma',
      designation: 'Senior Faculty',
      specialization: 'Geography & Environment',
      experience: '18+ Years',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      qualifications: ['Ph.D. Geography', 'Environmental Scientist', 'UPSC Mains Expert'],
      rating: 4.9,
      students: '10,000+'
    },
    {
      name: 'Ms. Priya Gupta',
      designation: 'Faculty',
      specialization: 'Economics & Current Affairs',
      experience: '15+ Years',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      qualifications: ['M.A. Economics (LSE)', 'Economic Analyst', 'Current Affairs Expert'],
      rating: 4.7,
      students: '8,000+'
    },
    {
      name: 'Dr. Suresh Patel',
      designation: 'Faculty',
      specialization: 'Political Science & IR',
      experience: '22+ Years',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
      qualifications: ['Ph.D. Political Science', 'International Relations Expert', 'Former Diplomat'],
      rating: 4.8,
      students: '11,000+'
    },
    {
      name: 'Prof. Kavita Singh',
      designation: 'Faculty',
      specialization: 'Science & Technology',
      experience: '16+ Years',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
      qualifications: ['M.Tech IIT Delhi', 'Science Communicator', 'Technology Expert'],
      rating: 4.6,
      students: '9,000+'
    }
  ]

  return (
    <section id="faculty" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-primary/10 text-primary mb-4">
            Our Faculty
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Learn from the Best Minds
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our distinguished faculty comprises former civil servants, subject matter experts, and experienced educators 
            committed to your success
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((faculty, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-gray-900">
                      {faculty.experience}
                    </Badge>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {faculty.name}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {faculty.designation}
                    </p>
                    <p className="text-gray-600 text-sm">
                      Specialization: {faculty.specialization}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="font-medium">{faculty.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">{faculty.students}</span>
                    </div>
                  </div>

                  {/* Qualifications */}
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900 text-sm">Qualifications:</h4>
                    <ul className="space-y-1">
                      {faculty.qualifications.map((qual, qualIndex) => (
                        <li key={qualIndex} className="text-sm text-gray-600 flex items-start">
                          <Award className="h-3 w-3 text-primary mt-1 mr-2 flex-shrink-0" />
                          {qual}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Faculty Stats */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600">Expert Faculty</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-gray-600">Years Combined Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-gray-600">Former Civil Servants</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">4.8/5</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <BookOpen className="h-16 w-16 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Meet Our Faculty in Person
            </h3>
            <p className="text-gray-600 mb-6">
              Attend our free demo classes and interact with our expert faculty members
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Book Demo Class
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                View All Faculty
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faculty