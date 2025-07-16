import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Download, FileText, Video, BookOpen, Clock, Users } from 'lucide-react'

const StudyMaterials = () => {
  const materials = [
    {
      title: 'NCERT Complete Series',
      type: 'PDF',
      icon: FileText,
      description: 'Comprehensive NCERT books from Class 6-12 with important highlights',
      subjects: ['History', 'Geography', 'Polity', 'Economics', 'Science'],
      downloads: '25,000+',
      size: '450 MB',
      updated: '2024',
      free: true
    },
    {
      title: 'Current Affairs Monthly',
      type: 'PDF + Video',
      icon: Video,
      description: 'Monthly compilation of current affairs with video analysis',
      subjects: ['National', 'International', 'Economy', 'Environment', 'Sports'],
      downloads: '18,000+',
      size: '120 MB',
      updated: 'January 2024',
      free: false
    },
    {
      title: 'Previous Year Papers',
      type: 'PDF',
      icon: FileText,
      description: 'Last 20 years UPSC question papers with detailed solutions',
      subjects: ['Prelims', 'Mains', 'Optional', 'Essay', 'Interview'],
      downloads: '30,000+',
      size: '200 MB',
      updated: '2023',
      free: true
    },
    {
      title: 'Video Lectures Series',
      type: 'Video',
      icon: Video,
      description: 'Complete video lectures by expert faculty members',
      subjects: ['All Subjects', 'Foundation', 'Advanced', 'Revision'],
      downloads: '12,000+',
      size: '15 GB',
      updated: '2024',
      free: false
    },
    {
      title: 'Mock Test Series',
      type: 'Online',
      icon: BookOpen,
      description: 'Comprehensive mock tests with detailed performance analysis',
      subjects: ['Prelims', 'Mains', 'Subject-wise', 'Full Length'],
      downloads: '22,000+',
      size: 'Online',
      updated: 'Weekly',
      free: false
    },
    {
      title: 'Quick Revision Notes',
      type: 'PDF',
      icon: FileText,
      description: 'Concise notes for last-minute revision and quick reference',
      subjects: ['All Subjects', 'Formula', 'Facts', 'Dates', 'Maps'],
      downloads: '35,000+',
      size: '80 MB',
      updated: '2024',
      free: true
    }
  ]

  const categories = [
    { name: 'Foundation', count: 45, icon: BookOpen },
    { name: 'Current Affairs', count: 120, icon: Clock },
    { name: 'Mock Tests', count: 200, icon: Users },
    { name: 'Video Lectures', count: 300, icon: Video }
  ]

  return (
    <section id="materials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-primary/10 text-primary mb-4">
            Study Materials
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Study Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our extensive library of study materials, updated regularly to match the latest UPSC syllabus and trends
          </p>
        </div>

        {/* Categories Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <category.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-2xl font-bold text-primary">{category.count}+</p>
                <p className="text-sm text-gray-600">Resources</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Materials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {materials.map((material, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 h-full">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <material.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <Badge variant={material.free ? "secondary" : "default"} className="text-xs">
                        {material.free ? 'Free' : 'Premium'}
                      </Badge>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {material.type}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  {material.title}
                </CardTitle>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {material.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Subjects */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Subjects Covered:</h4>
                  <div className="flex flex-wrap gap-1">
                    {material.subjects.slice(0, 3).map((subject, subIndex) => (
                      <Badge key={subIndex} variant="secondary" className="text-xs">
                        {subject}
                      </Badge>
                    ))}
                    {material.subjects.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{material.subjects.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div>
                    <div className="flex items-center space-x-1 text-gray-600">
                      <Download className="h-4 w-4" />
                      <span>{material.downloads}</span>
                    </div>
                    <p className="text-xs text-gray-500">Downloads</p>
                  </div>
                  <div>
                    <div className="text-gray-600">{material.size}</div>
                    <p className="text-xs text-gray-500">Size</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <Button 
                    className={`w-full ${material.free ? 'bg-green-600 hover:bg-green-700' : 'bg-primary hover:bg-primary/90'} text-white`}
                  >
                    {material.free ? 'Download Free' : 'Access Premium'}
                  </Button>
                  <Button variant="outline" className="w-full text-sm">
                    Preview Content
                  </Button>
                </div>

                {/* Last Updated */}
                <div className="mt-4 text-xs text-gray-500 text-center">
                  Last updated: {material.updated}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Choose Our Study Materials?
              </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Regular Updates</h4>
                <p className="text-gray-600">Content updated regularly to match latest UPSC patterns and current affairs</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Expert Curated</h4>
                <p className="text-gray-600">All materials reviewed and approved by our expert faculty and successful candidates</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Download className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Easy Access</h4>
                <p className="text-gray-600">Download materials anytime, anywhere with our user-friendly platform</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudyMaterials