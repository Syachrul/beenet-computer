import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './pages/Home'
import Layanan from './pages/Layanan'
import Portfolio from './pages/Portfolio'
import Tentang from './pages/Tentang'
import Kontak from './pages/Kontak'
import NotFound from './pages/NotFound'
import Header from './components/layout/common/Header'
import Footer from './components/layout/common/Footer'
import ScrollToTop from './utils/ScrollToTop'
import { useGoogleAnalytics } from './hooks'

console.log('🚀 App.jsx dimuat!')

// Komponen wrapper di dalam Router agar bisa pakai useLocation
function AppContent() {
  useGoogleAnalytics() // <-- Tracking GA4 di setiap perubahan route

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1 pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/layanan" element={<Layanan />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/tentang" element={<Tentang />} />
            <Route path="/kontak" element={<Kontak />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1E2A3A',
              color: '#fff',
            },
          }}
        />
      </div>
    </>
  )
}

function App() {
  console.log('📦 App component dirender')
  
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
