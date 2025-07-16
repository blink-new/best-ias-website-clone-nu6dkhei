import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Calendar, Clock, ExternalLink, TrendingUp, Globe, Users } from 'lucide-react'

const CurrentAffairs = () => {
  const newsCategories = [
    { name: 'National', count: 45, color: 'bg-blue-500' },
    { name: 'International', count: 32, color: 'bg-green-500' },
    { name: 'Economy', count: 28, color: 'bg-purple-500' },
    { name: 'Environment', count: 22, color: 'bg-emerald-500' },
    { name: 'Science & Tech', count: 35, color: 'bg-orange-500' },
    { name: 'Sports', count: 18, color: 'bg-red-500' }
  ]

  const recentNews = [
    {
      title: 'Union Budget 2024: Key Highlights for UPSC Aspirants',
      category: 'Economy',
      date: '2024-01-15',
      readTime: '5 min read',
      summary: 'Comprehensive analysis of Union Budget 2024 with focus on schemes, allocations, and policy changes relevant for UPSC preparation.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop',
      trending: true
    },
    {
      title: 'India-Middle East-Europe Economic Corridor: Strategic Implications',
      category: 'International',
      date: '2024-01-14',
      readTime: '7 min read',
      summary: 'Analysis of the IMEC corridor and its significance for India\'s foreign policy and economic development.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop',
      trending: false
    },
    {
      title: 'Climate Change and Sustainable Development Goals',
      category: 'Environment',
      date: '2024-01-13',
      readTime: '6 min read',
      summary: 'Latest developments in climate policy and India\'s progress towards achieving SDGs.',
      image: 'https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=400&h=200&fit=crop',
      trending: true
    },
    {
      title: 'Digital India Initiative: Progress and Challenges',
      category: 'Science & Tech',
      date: '2024-01-12',
      readTime: '4 min read',
      summary: 'Comprehensive review of Digital India achievements and remaining challenges in digital transformation.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=200&fit=crop',
      trending: false
    },
    {
      title: 'Constitutional Amendments and Judicial Review',
      category: 'National',
      date: '2024-01-11',
      readTime: '8 min read',
      summary: 'Recent constitutional developments and landmark Supreme Court judgments affecting governance.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=200&fit=crop',
      trending: true
    },
    {
      title: 'India\'s Space Missions: Achievements and Future Plans',
      category: 'Science & Tech',
      date: '2024-01-10',
      readTime: '5 min read',
      summary: 'Overview of ISRO\'s recent achievements and upcoming space missions including Gaganyaan.',
      image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=200&fit=crop',
      trending: false
    }
  ]

  const monthlyHighlights = [
    {
      title: 'January 2024 Monthly Compilation',
      description: 'Complete current affairs compilation with analysis',
      downloads: '15,000+',
      pages: '120 pages'
    },
    {
      title: 'December 2023 Monthly Compilation',
      description: 'Year-end special with annual review',
      downloads: '18,000+',
      pages: '150 pages'
    },
    {
      title: 'November 2023 Monthly Compilation',
      description: 'Focus on economic developments and policy changes',
      downloads: '12,000+',
      pages: '110 pages'
    }
  ]

  return (
    <section id="current-affairs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-primary/10 text-primary mb-4">
            Current Affairs
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Stay Updated with Latest Developments
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive current affairs coverage with expert analysis, daily updates, and monthly compilations 
            tailored for UPSC preparation
          </p>
        </div>

        {/* Categories Overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {newsCategories.map((category, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className={`w-12 h-12 ${category.color} rounded-full mx-auto mb-3 flex items-center justify-center`}>
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{category.name}</h3>
                <p className="text-xs text-gray-600">{category.count} articles</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent News Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Latest Updates</h3>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>

            <div className="space-y-6">
              {recentNews.map((news, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      {/* Image */}
                      <div className="md:w-1/3">
                        <img
                          src={news.image}
                          alt={news.title}
                          className="w-full h-48 md:h-full object-cover rounded-l-lg"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center space-x-2 mb-3">
                          <Badge variant="secondary" className="text-xs">
                            {news.category}
                          </Badge>
                          {news.trending && (
                            <Badge className="bg-red-500 text-white text-xs">
                              <TrendingUp className="h-3 w-3 mr-1" />
                              Trending
                            </Badge>
                          )}
                        </div>
                        
                        <h4 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                          {news.title}
                        </h4>
                        
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {news.summary}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-3 w-3" />
                              <span>{new Date(news.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-3 w-3" />
                              <span>{news.readTime}</span>
                            </div>
                          </div>
                          
                          <Button variant="ghost" size="sm" className="text-primary">
                            Read More
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Monthly Compilations */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Monthly Compilations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {monthlyHighlights.map((compilation, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
                    <h4 className="font-semibold text-gray-900 mb-1">{compilation.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{compilation.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{compilation.downloads}</span>
                      <span>{compilation.pages}</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-2">
                      Download PDF
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Daily Quiz */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="text-lg">Daily Current Affairs Quiz</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Test your knowledge with our daily quiz based on recent current affairs
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Today's Score:</span>
                    <span className="font-semibold">8/10</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>This Week:</span>
                    <span className="font-semibold">45/50</span>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Take Today's Quiz
                </Button>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Daily Newsletter</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Get daily current affairs summary delivered to your inbox
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Subscribe Now
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  ✓ 25,000+ subscribers ✓ No spam
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose Best IAS Current Affairs?
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Daily Updates</h4>
              <p className="text-gray-600">Fresh content updated every day with expert analysis and insights</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Expert Analysis</h4>
              <p className="text-gray-600">In-depth analysis by subject matter experts and successful candidates</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">UPSC Focused</h4>
              <p className="text-gray-600">Content specifically curated for UPSC syllabus and exam pattern</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CurrentAffairs