import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import { Badge } from '../ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Plus, Edit, Trash2, Eye, Users, Clock, DollarSign } from 'lucide-react'

const CourseManagement = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'UPSC Prelims Foundation',
      duration: '12 Months',
      price: 45000,
      originalPrice: 60000,
      students: 5000,
      status: 'Active',
      category: 'Foundation',
      instructor: 'Dr. Rajesh Kumar',
      startDate: '2024-02-01',
      description: 'Comprehensive foundation course for UPSC Prelims preparation'
    },
    {
      id: 2,
      title: 'UPSC Mains Intensive',
      duration: '8 Months',
      price: 55000,
      originalPrice: 75000,
      students: 3500,
      status: 'Active',
      category: 'Mains',
      instructor: 'Prof. Meera Sharma',
      startDate: '2024-03-01',
      description: 'Intensive course focused on UPSC Mains examination'
    },
    {
      id: 3,
      title: 'Interview & Personality Test',
      duration: '3 Months',
      price: 25000,
      originalPrice: 35000,
      students: 2000,
      status: 'Active',
      category: 'Interview',
      instructor: 'Dr. Amit Verma',
      startDate: '2024-04-01',
      description: 'Comprehensive interview preparation and personality development'
    }
  ])

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [editingCourse, setEditingCourse] = useState<any>(null)
  const [newCourse, setNewCourse] = useState({
    title: '',
    duration: '',
    price: '',
    originalPrice: '',
    category: '',
    instructor: '',
    startDate: '',
    description: ''
  })

  const handleAddCourse = () => {
    const course = {
      id: courses.length + 1,
      ...newCourse,
      price: parseInt(newCourse.price),
      originalPrice: parseInt(newCourse.originalPrice),
      students: 0,
      status: 'Active'
    }
    setCourses([...courses, course])
    setNewCourse({
      title: '',
      duration: '',
      price: '',
      originalPrice: '',
      category: '',
      instructor: '',
      startDate: '',
      description: ''
    })
    setIsAddDialogOpen(false)
  }

  const handleEditCourse = (course: any) => {
    setEditingCourse(course)
    setNewCourse({
      title: course.title,
      duration: course.duration,
      price: course.price.toString(),
      originalPrice: course.originalPrice.toString(),
      category: course.category,
      instructor: course.instructor,
      startDate: course.startDate,
      description: course.description
    })
  }

  const handleUpdateCourse = () => {
    setCourses(courses.map(course => 
      course.id === editingCourse.id 
        ? {
            ...course,
            ...newCourse,
            price: parseInt(newCourse.price),
            originalPrice: parseInt(newCourse.originalPrice)
          }
        : course
    ))
    setEditingCourse(null)
    setNewCourse({
      title: '',
      duration: '',
      price: '',
      originalPrice: '',
      category: '',
      instructor: '',
      startDate: '',
      description: ''
    })
  }

  const handleDeleteCourse = (id: number) => {
    setCourses(courses.filter(course => course.id !== id))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800'
      case 'Inactive': return 'bg-red-100 text-red-800'
      case 'Draft': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Course Management</h2>
          <p className="text-gray-600">Manage all courses and their details</p>
        </div>
        
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="h-4 w-4 mr-2" />
              Add Course
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Course</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Course Title</Label>
                <Input
                  id="title"
                  value={newCourse.title}
                  onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
                  placeholder="Enter course title"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration">Duration</Label>
                <Input
                  id="duration"
                  value={newCourse.duration}
                  onChange={(e) => setNewCourse({ ...newCourse, duration: e.target.value })}
                  placeholder="e.g., 12 Months"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="price">Price (₹)</Label>
                <Input
                  id="price"
                  type="number"
                  value={newCourse.price}
                  onChange={(e) => setNewCourse({ ...newCourse, price: e.target.value })}
                  placeholder="45000"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="originalPrice">Original Price (₹)</Label>
                <Input
                  id="originalPrice"
                  type="number"
                  value={newCourse.originalPrice}
                  onChange={(e) => setNewCourse({ ...newCourse, originalPrice: e.target.value })}
                  placeholder="60000"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select value={newCourse.category} onValueChange={(value) => setNewCourse({ ...newCourse, category: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Foundation">Foundation</SelectItem>
                    <SelectItem value="Mains">Mains</SelectItem>
                    <SelectItem value="Interview">Interview</SelectItem>
                    <SelectItem value="Complete">Complete Package</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="instructor">Instructor</Label>
                <Input
                  id="instructor"
                  value={newCourse.instructor}
                  onChange={(e) => setNewCourse({ ...newCourse, instructor: e.target.value })}
                  placeholder="Dr. John Doe"
                />
              </div>
              <div className="space-y-2 col-span-2">
                <Label htmlFor="startDate">Start Date</Label>
                <Input
                  id="startDate"
                  type="date"
                  value={newCourse.startDate}
                  onChange={(e) => setNewCourse({ ...newCourse, startDate: e.target.value })}
                />
              </div>
              <div className="space-y-2 col-span-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={newCourse.description}
                  onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
                  placeholder="Course description..."
                  rows={3}
                />
              </div>
            </div>
            <div className="flex justify-end space-x-2 mt-4">
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddCourse}>
                Add Course
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Courses</p>
                <p className="text-2xl font-bold">{courses.length}</p>
              </div>
              <div className="bg-blue-100 p-2 rounded-full">
                <Eye className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Students</p>
                <p className="text-2xl font-bold">{courses.reduce((sum, course) => sum + course.students, 0).toLocaleString()}</p>
              </div>
              <div className="bg-green-100 p-2 rounded-full">
                <Users className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Courses</p>
                <p className="text-2xl font-bold">{courses.filter(c => c.status === 'Active').length}</p>
              </div>
              <div className="bg-purple-100 p-2 rounded-full">
                <Clock className="h-5 w-5 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold">₹{(courses.reduce((sum, course) => sum + (course.price * course.students), 0) / 100000).toFixed(1)}L</p>
              </div>
              <div className="bg-orange-100 p-2 rounded-full">
                <DollarSign className="h-5 w-5 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Courses Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Courses</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Course</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Students</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {courses.map((course) => (
                <TableRow key={course.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{course.title}</div>
                      <div className="text-sm text-gray-500">{course.instructor}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{course.category}</Badge>
                  </TableCell>
                  <TableCell>{course.duration}</TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">₹{course.price.toLocaleString()}</div>
                      <div className="text-sm text-gray-500 line-through">₹{course.originalPrice.toLocaleString()}</div>
                    </div>
                  </TableCell>
                  <TableCell>{course.students.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(course.status)}>
                      {course.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditCourse(course)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteCourse(course.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Edit Dialog */}
      {editingCourse && (
        <Dialog open={!!editingCourse} onOpenChange={() => setEditingCourse(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Edit Course</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="edit-title">Course Title</Label>
                <Input
                  id="edit-title"
                  value={newCourse.title}
                  onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-duration">Duration</Label>
                <Input
                  id="edit-duration"
                  value={newCourse.duration}
                  onChange={(e) => setNewCourse({ ...newCourse, duration: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-price">Price (₹)</Label>
                <Input
                  id="edit-price"
                  type="number"
                  value={newCourse.price}
                  onChange={(e) => setNewCourse({ ...newCourse, price: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-originalPrice">Original Price (₹)</Label>
                <Input
                  id="edit-originalPrice"
                  type="number"
                  value={newCourse.originalPrice}
                  onChange={(e) => setNewCourse({ ...newCourse, originalPrice: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-category">Category</Label>
                <Select value={newCourse.category} onValueChange={(value) => setNewCourse({ ...newCourse, category: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Foundation">Foundation</SelectItem>
                    <SelectItem value="Mains">Mains</SelectItem>
                    <SelectItem value="Interview">Interview</SelectItem>
                    <SelectItem value="Complete">Complete Package</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-instructor">Instructor</Label>
                <Input
                  id="edit-instructor"
                  value={newCourse.instructor}
                  onChange={(e) => setNewCourse({ ...newCourse, instructor: e.target.value })}
                />
              </div>
              <div className="space-y-2 col-span-2">
                <Label htmlFor="edit-description">Description</Label>
                <Textarea
                  id="edit-description"
                  value={newCourse.description}
                  onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
                  rows={3}
                />
              </div>
            </div>
            <div className="flex justify-end space-x-2 mt-4">
              <Button variant="outline" onClick={() => setEditingCourse(null)}>
                Cancel
              </Button>
              <Button onClick={handleUpdateCourse}>
                Update Course
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

export default CourseManagement