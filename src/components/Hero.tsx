import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Star, Users, Award, BookOpen } from 'lucide-react'

const Hero = () => {
  const stats = [
    { icon: Users, value: '50,000+', label: 'Students Trained' },
    { icon: Award, value: '2,500+', label: 'Selections' },
    { icon: BookOpen, value: '25+', label: 'Years Experience' },
    { icon: Star, value: '4.9/5', label: 'Student Rating' }
  ]

  return (
    <section id="home" className="relative bg-gradient-to-br from-primary/5 via-white to-accent/5 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-accent/10 text-accent-foreground">
                India's Premier IAS Coaching Institute
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Dream of
                <span className="text-primary block">Civil Services</span>
                Starts Here
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join Best IAS and transform your aspirations into achievements. With our proven methodology, 
                expert faculty, and comprehensive study materials, success is within your reach.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
                Start Your Journey
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                Download Brochure
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="relative z-10">
              <Card className="bg-white/80 backdrop-blur-sm shadow-2xl">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Free Demo Class
                      </h3>
                      <p className="text-gray-600">
                        Experience our teaching methodology
                      </p>
                    </div>

                    <form className="space-y-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Full Name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Email Address"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                          <option>Select Course</option>
                          <option>UPSC Prelims</option>
                          <option>UPSC Mains</option>
                          <option>Interview Guidance</option>
                          <option>Foundation Course</option>
                        </select>
                      </div>
                      <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3">
                        Book Free Demo
                      </Button>
                    </form>

                    <div className="text-center text-sm text-gray-500">
                      <p>✓ No spam, only valuable content</p>
                      <p>✓ Expert guidance guaranteed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Background Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero