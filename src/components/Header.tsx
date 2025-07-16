import { useState } from 'react'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Menu, Phone, Mail, MapPin, Shield } from 'lucide-react'

interface HeaderProps {
  onAdminClick?: () => void
}

const Header = ({ onAdminClick }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Courses', href: '#courses' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Study Materials', href: '#materials' },
    { name: 'Current Affairs', href: '#current-affairs' },
    { name: 'Results', href: '#results' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4 mb-2 sm:mb-0">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>+91-11-25820000</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>info@bestias.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span>New Delhi | Mumbai | Bangalore</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-primary text-primary-foreground rounded-lg p-2 mr-3">
                <span className="text-xl font-bold">BI</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">Best IAS</h1>
                <p className="text-sm text-muted-foreground">Excellence in Civil Services</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" size="sm">
                Login
              </Button>
              <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Enroll Now
              </Button>
              {onAdminClick && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={onAdminClick}
                  className="text-gray-600 hover:text-primary"
                >
                  <Shield className="h-4 w-4 mr-1" />
                  Admin
                </Button>
              )}
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="sm">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-gray-700 hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <div className="flex flex-col space-y-2 pt-4 border-t">
                    <Button variant="outline" size="sm">
                      Login
                    </Button>
                    <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      Enroll Now
                    </Button>
                    {onAdminClick && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => {
                          onAdminClick()
                          setIsOpen(false)
                        }}
                        className="text-gray-600 hover:text-primary"
                      >
                        <Shield className="h-4 w-4 mr-1" />
                        Admin Panel
                      </Button>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header