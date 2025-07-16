import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar, Users } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+91-11-25820000', '+91-11-25820001', '+91-98765-43210'],
      description: 'Available 9 AM - 8 PM (Mon-Sat)'
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: ['info@bestias.com', 'admissions@bestias.com', 'support@bestias.com'],
      description: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Head Office',
      details: ['123 Civil Services Avenue', 'Karol Bagh, New Delhi - 110005'],
      description: 'Near Metro Station'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Saturday: 9:00 AM - 8:00 PM', 'Sunday: 10:00 AM - 6:00 PM'],
      description: 'Extended hours during exam season'
    }
  ]

  const centers = [
    {
      city: 'New Delhi',
      address: '123 Civil Services Avenue, Karol Bagh',
      phone: '+91-11-25820000',
      email: 'delhi@bestias.com',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=200&fit=crop'
    },
    {
      city: 'Mumbai',
      address: '456 Education Hub, Andheri West',
      phone: '+91-22-26820000',
      email: 'mumbai@bestias.com',
      image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&h=200&fit=crop'
    },
    {
      city: 'Bangalore',
      address: '789 Knowledge Park, Koramangala',
      phone: '+91-80-26820000',
      email: 'bangalore@bestias.com',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop'
    },
    {
      city: 'Hyderabad',
      address: '321 Success Street, Banjara Hills',
      phone: '+91-40-26820000',
      email: 'hyderabad@bestias.com',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&h=200&fit=crop'
    },
    {
      city: 'Chennai',
      address: '654 Learning Lane, T. Nagar',
      phone: '+91-44-26820000',
      email: 'chennai@bestias.com',
      image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=200&fit=crop'
    },
    {
      city: 'Pune',
      address: '987 Academic Avenue, Shivaji Nagar',
      phone: '+91-20-26820000',
      email: 'pune@bestias.com',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=200&fit=crop'
    }
  ]

  const quickActions = [
    {
      icon: Calendar,
      title: 'Book Demo Class',
      description: 'Schedule a free demo class',
      action: 'Book Now'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our counselors',
      action: 'Start Chat'
    },
    {
      icon: Phone,
      title: 'Request Callback',
      description: 'We\'ll call you back',
      action: 'Request'
    },
    {
      icon: Users,
      title: 'Visit Center',
      description: 'Schedule a center visit',
      action: 'Schedule'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-primary/10 text-primary mb-4">
            Contact Us
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch with Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our courses or need guidance for your UPSC preparation? 
            We're here to help you every step of the way
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {quickActions.map((action, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-6">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <action.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{action.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{action.description}</p>
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  {action.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Center
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                        <option>Select a center</option>
                        <option>New Delhi</option>
                        <option>Mumbai</option>
                        <option>Bangalore</option>
                        <option>Hyderabad</option>
                        <option>Chennai</option>
                        <option>Pune</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Course Interest
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                      <option>Select a course</option>
                      <option>UPSC Prelims Foundation</option>
                      <option>UPSC Mains Intensive</option>
                      <option>Interview & Personality Test</option>
                      <option>Complete UPSC Package</option>
                      <option>Current Affairs Program</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Tell us about your requirements or questions..."
                    ></textarea>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="newsletter" className="rounded" />
                    <label htmlFor="newsletter" className="text-sm text-gray-600">
                      Subscribe to our newsletter for updates and study tips
                    </label>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                      <div className="space-y-1 mb-2">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-700 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                      <p className="text-gray-500 text-xs">{info.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Centers */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Centers</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit any of our centers across India for personalized guidance and support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {centers.map((center, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src={center.image}
                    alt={center.city}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{center.city}</h4>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start space-x-2">
                        <MapPin className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-600 text-sm">{center.address}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-gray-500 flex-shrink-0" />
                        <p className="text-gray-600 text-sm">{center.phone}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-gray-500 flex-shrink-0" />
                        <p className="text-gray-600 text-sm">{center.email}</p>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                        Visit Center
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-gray-600">
              Quick answers to common questions about our programs and services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">What are your course timings?</h4>
                <p className="text-gray-600 text-sm">We offer flexible timings including morning, evening, and weekend batches to accommodate working professionals and students.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Do you provide study materials?</h4>
                <p className="text-gray-600 text-sm">Yes, comprehensive study materials, current affairs updates, and practice papers are included with all our courses.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Is there any scholarship program?</h4>
                <p className="text-gray-600 text-sm">We offer merit-based scholarships and special discounts for economically disadvantaged students.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Can I switch between online and offline classes?</h4>
                <p className="text-gray-600 text-sm">Yes, our hybrid learning model allows you to switch between online and offline modes based on your convenience.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">What is your success rate?</h4>
                <p className="text-gray-600 text-sm">Our students have achieved a 68% success rate, significantly higher than the national average of 0.2%.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Do you provide individual mentorship?</h4>
                <p className="text-gray-600 text-sm">Yes, personalized mentorship and doubt-clearing sessions are part of our comprehensive support system.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact