import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import Portfolio from './pages/Portfolio'
import ProjectDetail from './pages/ProjectDetail'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Routes>
        {/* Landing 页不显示 Navbar */}
        <Route path="/" element={<Landing />} />

        {/* 其余页面带 Navbar + Footer */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <main className="flex-1">
                <Routes>
                  <Route path="/portfolio"       element={<Portfolio />} />
                  <Route path="/projects/:id"    element={<ProjectDetail />} />
                  <Route path="/contact"         element={<Contact />} />
                </Routes>
              </main>
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  )
}
