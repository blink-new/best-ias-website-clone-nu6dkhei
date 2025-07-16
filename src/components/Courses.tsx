import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Clock, Users, BookOpen, CheckCircle } from 'lucide-react'

const Courses = () => {
  const courses = [
    {
      title: 'UPSC Prelims Foundation',
      duration: '12 Months',
      students: '5,000+',
      price: '₹45,000',
      originalPrice: '₹60,000',
      features: [
        'Comprehensive NCERT Coverage',
        'Current Affairs Daily Updates',
        'Mock Tests & Practice Papers',
        'Doubt Clearing Sessions',
        'Study Material Included'
      ],
      popular: true
    },
    {
      title: 'UPSC Mains Intensive',
      duration: '8 Months',
      students: '3,500+',
      price: '₹55,000',
      originalPrice: '₹75,000',
      features: [
        'Answer Writing Practice',
        'Essay Writing Guidance',
        'Optional Subject Support',
        'Personal Mentorship',
        'Previous Year Analysis'
      ],
      popular: false
    },
    {
      title: 'Interview & Personality Test',
      duration: '3 Months',
      students: '2,000+',
      price: '₹25,000',
      originalPrice: '₹35,000',
      features: [
        'Mock Interview Sessions',
        'Personality Development',
        'Current Affairs Discussion',
        'Body Language Training',
        'Confidence Building'
      ],
      popular: false
    },
    {
      title: 'Complete UPSC Package',
      duration: '18 Months',
      students: '8,000+',
      price: '₹99,000',
      originalPrice: '₹1,50,000',
      features: [
        'Prelims + Mains + Interview',
        'All Study Materials',
        'Unlimited Mock Tests',
        '24/7 Doubt Support',
        'Guaranteed Result Support'
      ],
      popular: true
    }
  ]

  return (
    <section id="courses" className="py-20 bg-gradient-to-br from-accent/5 via-gray-50 to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-primary/10 text-primary mb-4">
            Our Courses
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Path to Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive courses designed by experts to guide you through every stage of your UPSC journey
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className={`relative h-full transition-all duration-300 hover:shadow-xl ${course.popular ? 'ring-2 ring-primary' : ''}`}>
              {course.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-accent text-accent-foreground">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  {course.title}
                </CardTitle>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {course.students}
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-3xl font-bold text-primary">{course.price}</span>
                    <span className="text-lg text-gray-500 line-through">{course.originalPrice}</span>
                  </div>
                  <p className="text-sm text-green-600 font-medium">
                    Save {Math.round((1 - parseInt(course.price.replace(/[₹,]/g, '')) / parseInt(course.originalPrice.replace(/[₹,]/g, ''))) * 100)}%
                  </p>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  {course.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Enroll Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Study Material</h3>
                <p className="text-gray-600">Updated content aligned with latest UPSC syllabus</p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Faculty</h3>
                <p className="text-gray-600">Learn from experienced educators and former civil servants</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">Track record of consistent selections year after year</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Courses