import './index.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Work from './components/Work'

function App() {
  return (
    <div className="App">
      <div id='home'>
        <Home />
      </div>
      <div id='about'>
        <About />
      </div>
      <div id='work'>
        <Work />
      </div>
      <div id='contact'>
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App
