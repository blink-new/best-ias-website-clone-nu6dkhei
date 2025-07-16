import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Courses from './components/Courses'
import Faculty from './components/Faculty'
import StudyMaterials from './components/StudyMaterials'
import CurrentAffairs from './components/CurrentAffairs'
import Results from './components/Results'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AdminPanel from './components/admin/AdminPanel'

function App() {
  const [currentView, setCurrentView] = useState('main')

  useEffect(() => {
    // Check URL path to determine if we should show admin panel
    const path = window.location.pathname
    if (path === '/admin' || path.startsWith('/admin/')) {
      setCurrentView('admin')
    }

    // Listen for popstate events (back/forward navigation)
    const handlePopState = () => {
      const path = window.location.pathname
      if (path === '/admin' || path.startsWith('/admin/')) {
        setCurrentView('admin')
      } else {
        setCurrentView('main')
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // Function to navigate to admin panel
  const navigateToAdmin = () => {
    window.history.pushState({}, '', '/admin')
    setCurrentView('admin')
  }

  // Function to navigate back to main site
  const navigateToMain = () => {
    window.history.pushState({}, '', '/')
    setCurrentView('main')
  }

  if (currentView === 'admin') {
    return <AdminPanel />
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onAdminClick={navigateToAdmin} />
      <main>
        <Hero />
        <Courses />
        <Faculty />
        <StudyMaterials />
        <CurrentAffairs />
        <Results />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App