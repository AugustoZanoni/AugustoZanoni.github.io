import { useState } from 'react'
import Hero from './components/Hero'
import Technologies from './components/Technologies'

function App() {
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = 2

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className="app">
      <div className="parallax-background">
        <div className="parallax-layer layer-1"></div>
        <div className="parallax-layer layer-2"></div>
        <div className="parallax-layer layer-3"></div>
      </div>
      
      <div className="book-container">
        <div 
          className="pages-wrapper" 
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          <div className="page">
            <Hero />
          </div>
          <div className="page">
            <Technologies />
          </div>
        </div>

        {currentPage > 0 && (
          <button className="nav-button nav-left" onClick={prevPage}>
            ‹
          </button>
        )}
        {currentPage < totalPages - 1 && (
          <button className="nav-button nav-right" onClick={nextPage}>
            ›
          </button>
        )}

        <div className="page-indicator">
          {Array.from({ length: totalPages }).map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentPage ? 'active' : ''}`}
              onClick={() => setCurrentPage(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
