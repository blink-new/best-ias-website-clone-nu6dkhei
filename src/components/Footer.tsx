import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Linkedin,
  BookOpen,
  Users,
  Award,
  Clock
} from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Faculty', href: '#faculty' },
    { name: 'Success Stories', href: '#results' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' }
  ]

  const courses = [
    { name: 'UPSC Prelims Foundation', href: '#courses' },
    { name: 'UPSC Mains Intensive', href: '#courses' },
    { name: 'Interview Guidance', href: '#courses' },
    { name: 'Current Affairs', href: '#current-affairs' },
    { name: 'Mock Test Series', href: '#' },
    { name: 'Study Materials', href: '#materials' }
  ]

  const resources = [
    { name: 'Free Study Materials', href: '#materials' },
    { name: 'Previous Year Papers', href: '#' },
    { name: 'Current Affairs PDF', href: '#current-affairs' },
    { name: 'Daily Quiz', href: '#' },
    { name: 'Video Lectures', href: '#' },
    { name: 'Blog & Articles', href: '#' }
  ]

  const centers = [
    { city: 'New Delhi', address: 'Karol Bagh', phone: '+91-11-25820000' },
    { city: 'Mumbai', address: 'Andheri West', phone: '+91-22-26820000' },
    { city: 'Bangalore', address: 'Koramangala', phone: '+91-80-26820000' },
    { city: 'Hyderabad', address: 'Banjara Hills', phone: '+91-40-26820000' }
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Youtube, href: '#', name: 'YouTube' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' }
  ]

  const achievements = [
    { icon: Users, value: '50,000+', label: 'Students Trained' },
    { icon: Award, value: '2,500+', label: 'Selections' },
    { icon: BookOpen, value: '25+', label: 'Years Experience' },
    { icon: Clock, value: '24/7', label: 'Support' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="bg-primary text-primary-foreground rounded-lg p-2 mr-3">
                <span className="text-xl font-bold">BI</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Best IAS</h3>
                <p className="text-gray-400 text-sm">Excellence in Civil Services</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              India's premier IAS coaching institute with 25+ years of excellence in civil services education. 
              Transforming aspirations into achievements.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-gray-300 text-sm">+91-11-25820000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@bestias.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">123 Civil Services Avenue<br />Karol Bagh, New Delhi - 110005</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 hover:bg-primary p-2 rounded-lg transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Our Courses</h4>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index}>
                  <a
                    href={course.href}
                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                  >
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Centers Section */}
        <div className="border-t border-gray-800 mt-12 pt-12">
          <h4 className="text-lg font-semibold text-white mb-6 text-center">Our Centers</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {centers.map((center, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4 text-center">
                <h5 className="font-semibold text-white mb-2">{center.city}</h5>
                <p className="text-gray-400 text-sm mb-2">{center.address}</p>
                <p className="text-primary text-sm">{center.phone}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="border-t border-gray-800 mt-12 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <achievement.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{achievement.value}</div>
                <div className="text-gray-400 text-sm">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-12">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest updates, study tips, and current affairs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3">
                Subscribe
              </Button>
            </div>
            <p className="text-gray-500 text-xs mt-3">
              ✓ No spam, only valuable content ✓ Unsubscribe anytime
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Best IAS. All rights reserved. | Designed with excellence for civil services aspirants.
            </div>
            <div className="flex items-center space-x-6">
              <Badge variant="secondary" className="bg-green-600/20 text-green-400 border-green-600/30">
                ✓ Trusted by 50,000+ Students
              </Badge>
              <Badge variant="secondary" className="bg-blue-600/20 text-blue-400 border-blue-600/30">
                ✓ 68% Success Rate
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer