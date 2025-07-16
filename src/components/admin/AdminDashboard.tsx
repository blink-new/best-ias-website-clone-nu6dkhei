import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { 
  Users, 
  BookOpen, 
  GraduationCap, 
  FileText, 
  TrendingUp, 
  Settings,
  LogOut,
  Plus,
  Edit,
  Trash2,
  Eye,
  Download,
  Mail,
  Phone
} from 'lucide-react'
import CourseManagement from './CourseManagement'
import FacultyManagement from './FacultyManagement'
import StudentManagement from './StudentManagement'
import ContentManagement from './ContentManagement'

interface AdminDashboardProps {
  onLogout: () => void
}

const AdminDashboard = ({ onLogout }: AdminDashboardProps) => {
  const [activeTab, setActiveTab] = useState('overview')

  // Mock data for dashboard stats
  const stats = [
    {
      title: 'Total Students',
      value: '12,847',
      change: '+12%',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Active Courses',
      value: '24',
      change: '+3',
      icon: BookOpen,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Faculty Members',
      value: '48',
      change: '+5',
      icon: GraduationCap,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Monthly Revenue',
      value: '₹45.2L',
      change: '+18%',
      icon: TrendingUp,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ]

  const recentActivities = [
    { action: 'New student enrollment', details: 'Rahul Kumar enrolled in UPSC Foundation', time: '2 hours ago' },
    { action: 'Course updated', details: 'UPSC Mains Intensive syllabus updated', time: '4 hours ago' },
    { action: 'Faculty added', details: 'Dr. Priya Sharma joined as History faculty', time: '1 day ago' },
    { action: 'Payment received', details: '₹45,000 payment from Anjali Gupta', time: '1 day ago' },
    { action: 'Study material uploaded', details: 'Current Affairs January 2024 uploaded', time: '2 days ago' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="bg-primary text-primary-foreground rounded-lg p-2 mr-3">
                <span className="text-xl font-bold">BI</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Best IAS Admin</h1>
                <p className="text-sm text-gray-500">Management Dashboard</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" size="sm" onClick={onLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="faculty">Faculty</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        <p className="text-sm text-green-600 font-medium">{stat.change}</p>
                      </div>
                      <div className={`${stat.bgColor} p-3 rounded-full`}>
                        <stat.icon className={`h-6 w-6 ${stat.color}`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Recent Activities */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <FileText className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                          <p className="text-sm text-gray-600">{activity.details}</p>
                          <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <Button className="h-20 flex-col space-y-2" variant="outline">
                      <Plus className="h-6 w-6" />
                      <span>Add Course</span>
                    </Button>
                    <Button className="h-20 flex-col space-y-2" variant="outline">
                      <Users className="h-6 w-6" />
                      <span>Add Faculty</span>
                    </Button>
                    <Button className="h-20 flex-col space-y-2" variant="outline">
                      <FileText className="h-6 w-6" />
                      <span>Upload Material</span>
                    </Button>
                    <Button className="h-20 flex-col space-y-2" variant="outline">
                      <Mail className="h-6 w-6" />
                      <span>Send Notice</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Performance Metrics */}
            <Card>
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-2">89%</div>
                    <div className="text-sm text-gray-600">Course Completion Rate</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-2">4.8/5</div>
                    <div className="text-sm text-gray-600">Average Rating</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-2">156</div>
                    <div className="text-sm text-gray-600">Selections This Year</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses">
            <CourseManagement />
          </TabsContent>

          <TabsContent value="faculty">
            <FacultyManagement />
          </TabsContent>

          <TabsContent value="students">
            <StudentManagement />
          </TabsContent>

          <TabsContent value="content">
            <ContentManagement />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default AdminDashboard