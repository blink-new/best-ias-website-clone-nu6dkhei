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
  const [currentView, setCurrentView] = useState('home')

  useEffect(() => {
    // Check URL path to determine current view
    const path = window.location.pathname
    if (path === '/admin' || path.startsWith('/admin/')) {
      setCurrentView('admin')
    } else if (path === '/courses') {
      setCurrentView('courses')
    } else if (path === '/faculty') {
      setCurrentView('faculty')
    } else if (path === '/study-materials') {
      setCurrentView('study-materials')
    } else if (path === '/current-affairs') {
      setCurrentView('current-affairs')
    } else if (path === '/results') {
      setCurrentView('results')
    } else if (path === '/about') {
      setCurrentView('about')
    } else if (path === '/contact') {
      setCurrentView('contact')
    } else {
      setCurrentView('home')
    }

    // Listen for popstate events (back/forward navigation)
    const handlePopState = () => {
      const path = window.location.pathname
      if (path === '/admin' || path.startsWith('/admin/')) {
        setCurrentView('admin')
      } else if (path === '/courses') {
        setCurrentView('courses')
      } else if (path === '/faculty') {
        setCurrentView('faculty')
      } else if (path === '/study-materials') {
        setCurrentView('study-materials')
      } else if (path === '/current-affairs') {
        setCurrentView('current-affairs')
      } else if (path === '/results') {
        setCurrentView('results')
      } else if (path === '/about') {
        setCurrentView('about')
      } else if (path === '/contact') {
        setCurrentView('contact')
      } else {
        setCurrentView('home')
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // Function to navigate to different pages
  const navigateTo = (page: string) => {
    const url = page === 'home' ? '/' : `/${page}`
    window.history.pushState({}, '', url)
    setCurrentView(page)
  }

  if (currentView === 'admin') {
    return <AdminPanel />
  }

  const renderContent = () => {
    switch (currentView) {
      case 'courses':
        return <Courses />
      case 'faculty':
        return <Faculty />
      case 'study-materials':
        return <StudyMaterials />
      case 'current-affairs':
        return <CurrentAffairs />
      case 'results':
        return <Results />
      case 'about':
        return <About />
      case 'contact':
        return <Contact />
      default:
        return (
          <>
            <Hero />
            <Courses />
            <Faculty />
            <StudyMaterials />
            <CurrentAffairs />
            <Results />
            <About />
            <Contact />
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onAdminClick={() => navigateTo('admin')} onNavigate={navigateTo} />
      <main>
        {renderContent()}
      </main>
      <Footer />
    </div>
  )
}

export default App