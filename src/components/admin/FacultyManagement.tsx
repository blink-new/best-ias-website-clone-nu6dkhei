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
import { Plus, Edit, Trash2, Mail, Phone, Star, Users, Award } from 'lucide-react'

const FacultyManagement = () => {
  const [faculty, setFaculty] = useState([
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      email: 'rajesh.kumar@bestias.com',
      phone: '+91-9876543210',
      designation: 'Director & Founder',
      specialization: 'Public Administration',
      experience: '25+ Years',
      qualifications: 'Ph.D. in Public Administration, Former IAS Officer',
      rating: 4.9,
      students: 15000,
      status: 'Active',
      joinDate: '2020-01-15',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Prof. Meera Sharma',
      email: 'meera.sharma@bestias.com',
      phone: '+91-9876543211',
      designation: 'Head of Faculty',
      specialization: 'History & Culture',
      experience: '20+ Years',
      qualifications: 'M.A. History (JNU), Former Professor DU',
      rating: 4.8,
      students: 12000,
      status: 'Active',
      joinDate: '2020-03-20',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Dr. Amit Verma',
      email: 'amit.verma@bestias.com',
      phone: '+91-9876543212',
      designation: 'Senior Faculty',
      specialization: 'Geography & Environment',
      experience: '18+ Years',
      qualifications: 'Ph.D. Geography, Environmental Scientist',
      rating: 4.9,
      students: 10000,
      status: 'Active',
      joinDate: '2020-06-10',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
    }
  ])

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [editingFaculty, setEditingFaculty] = useState<any>(null)
  const [newFaculty, setNewFaculty] = useState({
    name: '',
    email: '',
    phone: '',
    designation: '',
    specialization: '',
    experience: '',
    qualifications: '',
    joinDate: '',
    image: ''
  })

  const handleAddFaculty = () => {
    const facultyMember = {
      id: faculty.length + 1,
      ...newFaculty,
      rating: 0,
      students: 0,
      status: 'Active'
    }
    setFaculty([...faculty, facultyMember])
    setNewFaculty({
      name: '',
      email: '',
      phone: '',
      designation: '',
      specialization: '',
      experience: '',
      qualifications: '',
      joinDate: '',
      image: ''
    })
    setIsAddDialogOpen(false)
  }

  const handleEditFaculty = (facultyMember: any) => {
    setEditingFaculty(facultyMember)
    setNewFaculty({
      name: facultyMember.name,
      email: facultyMember.email,
      phone: facultyMember.phone,
      designation: facultyMember.designation,
      specialization: facultyMember.specialization,
      experience: facultyMember.experience,
      qualifications: facultyMember.qualifications,
      joinDate: facultyMember.joinDate,
      image: facultyMember.image
    })
  }

  const handleUpdateFaculty = () => {
    setFaculty(faculty.map(member => 
      member.id === editingFaculty.id 
        ? { ...member, ...newFaculty }
        : member
    ))
    setEditingFaculty(null)
    setNewFaculty({
      name: '',
      email: '',
      phone: '',
      designation: '',
      specialization: '',
      experience: '',
      qualifications: '',
      joinDate: '',
      image: ''
    })
  }

  const handleDeleteFaculty = (id: number) => {
    setFaculty(faculty.filter(member => member.id !== id))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800'
      case 'Inactive': return 'bg-red-100 text-red-800'
      case 'On Leave': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Faculty Management</h2>
          <p className="text-gray-600">Manage faculty members and their information</p>
        </div>
        
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="h-4 w-4 mr-2" />
              Add Faculty
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Faculty Member</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={newFaculty.name}
                  onChange={(e) => setNewFaculty({ ...newFaculty, name: e.target.value })}
                  placeholder="Dr. John Doe"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={newFaculty.email}
                  onChange={(e) => setNewFaculty({ ...newFaculty, email: e.target.value })}
                  placeholder="john.doe@bestias.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={newFaculty.phone}
                  onChange={(e) => setNewFaculty({ ...newFaculty, phone: e.target.value })}
                  placeholder="+91-9876543210"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="designation">Designation</Label>
                <Select value={newFaculty.designation} onValueChange={(value) => setNewFaculty({ ...newFaculty, designation: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select designation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Director">Director</SelectItem>
                    <SelectItem value="Head of Faculty">Head of Faculty</SelectItem>
                    <SelectItem value="Senior Faculty">Senior Faculty</SelectItem>
                    <SelectItem value="Faculty">Faculty</SelectItem>
                    <SelectItem value="Assistant Faculty">Assistant Faculty</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="specialization">Specialization</Label>
                <Input
                  id="specialization"
                  value={newFaculty.specialization}
                  onChange={(e) => setNewFaculty({ ...newFaculty, specialization: e.target.value })}
                  placeholder="Public Administration"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="experience">Experience</Label>
                <Input
                  id="experience"
                  value={newFaculty.experience}
                  onChange={(e) => setNewFaculty({ ...newFaculty, experience: e.target.value })}
                  placeholder="15+ Years"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="joinDate">Join Date</Label>
                <Input
                  id="joinDate"
                  type="date"
                  value={newFaculty.joinDate}
                  onChange={(e) => setNewFaculty({ ...newFaculty, joinDate: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="image">Profile Image URL</Label>
                <Input
                  id="image"
                  value={newFaculty.image}
                  onChange={(e) => setNewFaculty({ ...newFaculty, image: e.target.value })}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              <div className="space-y-2 col-span-2">
                <Label htmlFor="qualifications">Qualifications</Label>
                <Textarea
                  id="qualifications"
                  value={newFaculty.qualifications}
                  onChange={(e) => setNewFaculty({ ...newFaculty, qualifications: e.target.value })}
                  placeholder="Ph.D. in Subject, Previous Experience..."
                  rows={3}
                />
              </div>
            </div>
            <div className="flex justify-end space-x-2 mt-4">
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddFaculty}>
                Add Faculty
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
                <p className="text-sm text-gray-600">Total Faculty</p>
                <p className="text-2xl font-bold">{faculty.length}</p>
              </div>
              <div className="bg-blue-100 p-2 rounded-full">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Faculty</p>
                <p className="text-2xl font-bold">{faculty.filter(f => f.status === 'Active').length}</p>
              </div>
              <div className="bg-green-100 p-2 rounded-full">
                <Award className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg Rating</p>
                <p className="text-2xl font-bold">{(faculty.reduce((sum, f) => sum + f.rating, 0) / faculty.length).toFixed(1)}</p>
              </div>
              <div className="bg-yellow-100 p-2 rounded-full">
                <Star className="h-5 w-5 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Students</p>
                <p className="text-2xl font-bold">{faculty.reduce((sum, f) => sum + f.students, 0).toLocaleString()}</p>
              </div>
              <div className="bg-purple-100 p-2 rounded-full">
                <Users className="h-5 w-5 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Faculty Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {faculty.map((member) => (
          <Card key={member.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={getStatusColor(member.status)}>
                    {member.status}
                  </Badge>
                </div>
              </div>
              
              <div className="p-4">
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                  <p className="text-primary font-medium">{member.designation}</p>
                  <p className="text-sm text-gray-600">{member.specialization}</p>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="h-4 w-4 mr-2" />
                    {member.email}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="h-4 w-4 mr-2" />
                    {member.phone}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="font-medium">{member.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-gray-500 mr-1" />
                    <span>{member.students.toLocaleString()}</span>
                  </div>
                  <div className="text-gray-500">
                    {member.experience}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => handleEditFaculty(member)}
                  >
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDeleteFaculty(member.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Edit Dialog */}
      {editingFaculty && (
        <Dialog open={!!editingFaculty} onOpenChange={() => setEditingFaculty(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Edit Faculty Member</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="edit-name">Full Name</Label>
                <Input
                  id="edit-name"
                  value={newFaculty.name}
                  onChange={(e) => setNewFaculty({ ...newFaculty, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-email">Email</Label>
                <Input
                  id="edit-email"
                  type="email"
                  value={newFaculty.email}
                  onChange={(e) => setNewFaculty({ ...newFaculty, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-phone">Phone</Label>
                <Input
                  id="edit-phone"
                  value={newFaculty.phone}
                  onChange={(e) => setNewFaculty({ ...newFaculty, phone: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-designation">Designation</Label>
                <Select value={newFaculty.designation} onValueChange={(value) => setNewFaculty({ ...newFaculty, designation: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Director">Director</SelectItem>
                    <SelectItem value="Head of Faculty">Head of Faculty</SelectItem>
                    <SelectItem value="Senior Faculty">Senior Faculty</SelectItem>
                    <SelectItem value="Faculty">Faculty</SelectItem>
                    <SelectItem value="Assistant Faculty">Assistant Faculty</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-specialization">Specialization</Label>
                <Input
                  id="edit-specialization"
                  value={newFaculty.specialization}
                  onChange={(e) => setNewFaculty({ ...newFaculty, specialization: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-experience">Experience</Label>
                <Input
                  id="edit-experience"
                  value={newFaculty.experience}
                  onChange={(e) => setNewFaculty({ ...newFaculty, experience: e.target.value })}
                />
              </div>
              <div className="space-y-2 col-span-2">
                <Label htmlFor="edit-qualifications">Qualifications</Label>
                <Textarea
                  id="edit-qualifications"
                  value={newFaculty.qualifications}
                  onChange={(e) => setNewFaculty({ ...newFaculty, qualifications: e.target.value })}
                  rows={3}
                />
              </div>
            </div>
            <div className="flex justify-end space-x-2 mt-4">
              <Button variant="outline" onClick={() => setEditingFaculty(null)}>
                Cancel
              </Button>
              <Button onClick={handleUpdateFaculty}>
                Update Faculty
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

export default FacultyManagement