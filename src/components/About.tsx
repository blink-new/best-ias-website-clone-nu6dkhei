import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Award, Users, BookOpen, Target, Heart, Lightbulb, Shield, Globe } from 'lucide-react'

const About = () => {
  const milestones = [
    { year: '1999', event: 'Best IAS founded with a vision to democratize civil services education' },
    { year: '2005', event: 'Launched comprehensive UPSC preparation programs' },
    { year: '2010', event: 'Expanded to multiple cities across India' },
    { year: '2015', event: 'Introduced online learning platform and digital resources' },
    { year: '2020', event: 'Achieved milestone of 1000+ successful selections' },
    { year: '2023', event: 'Celebrated 25 years of excellence with 2500+ selections' }
  ]

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for the highest standards in education and student outcomes'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Honest guidance and transparent processes in all our interactions'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Continuously evolving our teaching methods and study materials'
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Building lasting relationships based on reliability and results'
    }
  ]

  const leadership = [
    {
      name: 'Dr. Rajesh Kumar',
      position: 'Founder & Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: 'Former IAS officer with 25+ years of experience in public administration and education. Visionary leader who founded Best IAS with the mission to make quality civil services education accessible to all.',
      achievements: ['IAS Topper 1995', 'Ph.D. Public Administration', 'Author of 5 books on UPSC preparation']
    },
    {
      name: 'Prof. Meera Sharma',
      position: 'Academic Director',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      bio: 'Renowned educator with expertise in curriculum development and academic excellence. She has been instrumental in designing our comprehensive study programs.',
      achievements: ['Former Professor at JNU', '20+ years teaching experience', 'Expert in History & Culture']
    },
    {
      name: 'Dr. Amit Verma',
      position: 'Research Head',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Leading researcher in educational methodologies and assessment techniques. Oversees our research initiatives and content development.',
      achievements: ['Ph.D. in Education', 'Published 50+ research papers', 'Educational Technology Expert']
    }
  ]

  const stats = [
    { icon: Users, value: '50,000+', label: 'Students Trained' },
    { icon: Award, value: '2,500+', label: 'Successful Selections' },
    { icon: BookOpen, value: '25+', label: 'Years of Excellence' },
    { icon: Globe, value: '50+', label: 'Cities Covered' }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-primary/10 text-primary mb-4">
            About Us
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            25 Years of Educational Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Best IAS has been at the forefront of civil services education, transforming aspirations into achievements 
            through innovative teaching methods and unwavering commitment to student success
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-primary/20 rounded-full p-3">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                To democratize access to quality civil services education and empower every aspirant with the knowledge, 
                skills, and confidence needed to serve the nation through the prestigious Indian Administrative Services 
                and allied services.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-accent/20 rounded-full p-3">
                  <Lightbulb className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                To be India's most trusted and innovative civil services coaching institute, recognized for producing 
                ethical, competent, and socially conscious civil servants who contribute meaningfully to nation-building 
                and public service.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Key Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <stat.icon className="h-10 w-10 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our approach to education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the visionary leaders who have shaped Best IAS into India's premier coaching institute
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <h4 className="text-xl font-bold text-white">{leader.name}</h4>
                      <p className="text-white/90">{leader.position}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {leader.bio}
                    </p>
                    
                    <div className="space-y-2">
                      <h5 className="font-semibold text-gray-900 text-sm">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {leader.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-xs text-gray-600 flex items-start">
                            <Award className="h-3 w-3 text-primary mt-0.5 mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Key milestones in our 25-year journey of educational excellence
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                        <p className="text-gray-700">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Join the Best IAS Family
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Become part of our legacy of excellence. Let us guide you on your journey to civil services success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
                Start Your Journey
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                Visit Our Centers
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About