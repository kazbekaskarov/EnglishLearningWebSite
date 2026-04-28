import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Games from './pages/Games'
import GameDetail from './pages/GameDetail'
import Manager from './pages/Manager'
import About from './pages/About'
import { NoiseProvider } from './components/Noise'

export default function App() {
  return (
    <NoiseProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/:id" element={<GameDetail />} />
          <Route path="/manager" element={<Manager />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </NoiseProvider>
  )
}

