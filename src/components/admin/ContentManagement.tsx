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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { 
  Plus, 
  Edit, 
  Trash2, 
  Download, 
  Upload, 
  FileText, 
  Video, 
  Image, 
  BookOpen,
  Calendar,
  Eye,
  Search
} from 'lucide-react'

const ContentManagement = () => {
  const [studyMaterials, setStudyMaterials] = useState([
    {
      id: 1,
      title: 'NCERT History Class 12',
      type: 'PDF',
      category: 'History',
      course: 'UPSC Prelims Foundation',
      uploadDate: '2024-01-15',
      size: '15.2 MB',
      downloads: 1250,
      status: 'Published'
    },
    {
      id: 2,
      title: 'Geography Notes - Physical',
      type: 'PDF',
      category: 'Geography',
      course: 'UPSC Prelims Foundation',
      uploadDate: '2024-01-12',
      size: '8.7 MB',
      downloads: 980,
      status: 'Published'
    },
    {
      id: 3,
      title: 'Current Affairs January 2024',
      type: 'PDF',
      category: 'Current Affairs',
      course: 'All Courses',
      uploadDate: '2024-01-10',
      size: '12.4 MB',
      downloads: 2100,
      status: 'Published'
    }
  ])

  const [currentAffairs, setCurrentAffairs] = useState([
    {
      id: 1,
      title: 'Union Budget 2024 Analysis',
      category: 'Economy',
      publishDate: '2024-01-20',
      author: 'Dr. Rajesh Kumar',
      status: 'Published',
      views: 1500
    },
    {
      id: 2,
      title: 'India-UAE Relations Update',
      category: 'International Relations',
      publishDate: '2024-01-18',
      author: 'Prof. Meera Sharma',
      status: 'Published',
      views: 890
    },
    {
      id: 3,
      title: 'Climate Change Summit Outcomes',
      category: 'Environment',
      publishDate: '2024-01-15',
      author: 'Dr. Amit Verma',
      status: 'Draft',
      views: 0
    }
  ])

  const [isAddMaterialOpen, setIsAddMaterialOpen] = useState(false)
  const [isAddArticleOpen, setIsAddArticleOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [newMaterial, setNewMaterial] = useState({
    title: '',
    type: '',
    category: '',
    course: '',
    file: null as File | null
  })
  const [newArticle, setNewArticle] = useState({
    title: '',
    category: '',
    content: '',
    author: ''
  })

  const handleAddMaterial = () => {
    const material = {
      id: studyMaterials.length + 1,
      ...newMaterial,
      uploadDate: new Date().toISOString().split('T')[0],
      size: newMaterial.file ? `${(newMaterial.file.size / (1024 * 1024)).toFixed(1)} MB` : '0 MB',
      downloads: 0,
      status: 'Published'
    }
    setStudyMaterials([...studyMaterials, material])
    setNewMaterial({ title: '', type: '', category: '', course: '', file: null })
    setIsAddMaterialOpen(false)
  }

  const handleAddArticle = () => {
    const article = {
      id: currentAffairs.length + 1,
      ...newArticle,
      publishDate: new Date().toISOString().split('T')[0],
      status: 'Published',
      views: 0
    }
    setCurrentAffairs([...currentAffairs, article])
    setNewArticle({ title: '', category: '', content: '', author: '' })
    setIsAddArticleOpen(false)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published': return 'bg-green-100 text-green-800'
      case 'Draft': return 'bg-yellow-100 text-yellow-800'
      case 'Archived': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'PDF': return <FileText className="h-4 w-4 text-red-500" />
      case 'Video': return <Video className="h-4 w-4 text-blue-500" />
      case 'Image': return <Image className="h-4 w-4 text-green-500" />
      default: return <FileText className="h-4 w-4 text-gray-500" />
    }
  }

  const filteredMaterials = studyMaterials.filter(material =>
    material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    material.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const filteredArticles = currentAffairs.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Content Management</h2>
          <p className="text-gray-600">Manage study materials and current affairs content</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Study Materials</p>
                <p className="text-2xl font-bold">{studyMaterials.length}</p>
              </div>
              <div className="bg-blue-100 p-2 rounded-full">
                <BookOpen className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Current Affairs</p>
                <p className="text-2xl font-bold">{currentAffairs.length}</p>
              </div>
              <div className="bg-green-100 p-2 rounded-full">
                <Calendar className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Downloads</p>
                <p className="text-2xl font-bold">{studyMaterials.reduce((sum, m) => sum + m.downloads, 0).toLocaleString()}</p>
              </div>
              <div className="bg-purple-100 p-2 rounded-full">
                <Download className="h-5 w-5 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Views</p>
                <p className="text-2xl font-bold">{currentAffairs.reduce((sum, a) => sum + a.views, 0).toLocaleString()}</p>
              </div>
              <div className="bg-orange-100 p-2 rounded-full">
                <Eye className="h-5 w-5 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Content Tabs */}
      <Tabs defaultValue="materials" className="space-y-4">
        <TabsList>
          <TabsTrigger value="materials">Study Materials</TabsTrigger>
          <TabsTrigger value="current-affairs">Current Affairs</TabsTrigger>
        </TabsList>

        <TabsContent value="materials" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Study Materials</h3>
            <Dialog open={isAddMaterialOpen} onOpenChange={setIsAddMaterialOpen}>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Material
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Study Material</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="material-title">Title</Label>
                    <Input
                      id="material-title"
                      value={newMaterial.title}
                      onChange={(e) => setNewMaterial({ ...newMaterial, title: e.target.value })}
                      placeholder="Enter material title"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="material-type">Type</Label>
                      <Select value={newMaterial.type} onValueChange={(value) => setNewMaterial({ ...newMaterial, type: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="PDF">PDF</SelectItem>
                          <SelectItem value="Video">Video</SelectItem>
                          <SelectItem value="Image">Image</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="material-category">Category</Label>
                      <Select value={newMaterial.category} onValueChange={(value) => setNewMaterial({ ...newMaterial, category: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="History">History</SelectItem>
                          <SelectItem value="Geography">Geography</SelectItem>
                          <SelectItem value="Polity">Polity</SelectItem>
                          <SelectItem value="Economy">Economy</SelectItem>
                          <SelectItem value="Current Affairs">Current Affairs</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="material-course">Course</Label>
                    <Select value={newMaterial.course} onValueChange={(value) => setNewMaterial({ ...newMaterial, course: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All Courses">All Courses</SelectItem>
                        <SelectItem value="UPSC Prelims Foundation">UPSC Prelims Foundation</SelectItem>
                        <SelectItem value="UPSC Mains Intensive">UPSC Mains Intensive</SelectItem>
                        <SelectItem value="Interview & Personality Test">Interview & Personality Test</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="material-file">File</Label>
                    <Input
                      id="material-file"
                      type="file"
                      onChange={(e) => setNewMaterial({ ...newMaterial, file: e.target.files?.[0] || null })}
                    />
                  </div>
                </div>
                <div className="flex justify-end space-x-2 mt-4">
                  <Button variant="outline" onClick={() => setIsAddMaterialOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleAddMaterial}>
                    Add Material
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <Card>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Material</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Course</TableHead>
                    <TableHead>Upload Date</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Downloads</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredMaterials.map((material) => (
                    <TableRow key={material.id}>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          {getTypeIcon(material.type)}
                          <div>
                            <div className="font-medium">{material.title}</div>
                            <div className="text-sm text-gray-500">{material.type}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{material.category}</Badge>
                      </TableCell>
                      <TableCell>{material.course}</TableCell>
                      <TableCell>{new Date(material.uploadDate).toLocaleDateString()}</TableCell>
                      <TableCell>{material.size}</TableCell>
                      <TableCell>{material.downloads.toLocaleString()}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(material.status)}>
                          {material.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
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
        </TabsContent>

        <TabsContent value="current-affairs" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Current Affairs</h3>
            <Dialog open={isAddArticleOpen} onOpenChange={setIsAddArticleOpen}>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Article
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Add Current Affairs Article</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="article-title">Title</Label>
                    <Input
                      id="article-title"
                      value={newArticle.title}
                      onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
                      placeholder="Enter article title"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="article-category">Category</Label>
                      <Select value={newArticle.category} onValueChange={(value) => setNewArticle({ ...newArticle, category: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Economy">Economy</SelectItem>
                          <SelectItem value="International Relations">International Relations</SelectItem>
                          <SelectItem value="Environment">Environment</SelectItem>
                          <SelectItem value="Science & Technology">Science & Technology</SelectItem>
                          <SelectItem value="Government Schemes">Government Schemes</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="article-author">Author</Label>
                      <Input
                        id="article-author"
                        value={newArticle.author}
                        onChange={(e) => setNewArticle({ ...newArticle, author: e.target.value })}
                        placeholder="Author name"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="article-content">Content</Label>
                    <Textarea
                      id="article-content"
                      value={newArticle.content}
                      onChange={(e) => setNewArticle({ ...newArticle, content: e.target.value })}
                      placeholder="Article content..."
                      rows={8}
                    />
                  </div>
                </div>
                <div className="flex justify-end space-x-2 mt-4">
                  <Button variant="outline" onClick={() => setIsAddArticleOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleAddArticle}>
                    Add Article
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <Card>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Article</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Publish Date</TableHead>
                    <TableHead>Views</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredArticles.map((article) => (
                    <TableRow key={article.id}>
                      <TableCell>
                        <div className="font-medium">{article.title}</div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{article.category}</Badge>
                      </TableCell>
                      <TableCell>{article.author}</TableCell>
                      <TableCell>{new Date(article.publishDate).toLocaleDateString()}</TableCell>
                      <TableCell>{article.views.toLocaleString()}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(article.status)}>
                          {article.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
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
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ContentManagement