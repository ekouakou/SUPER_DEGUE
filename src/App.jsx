import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import Benefits from './components/Benefits'
import Story from './components/Story'
import Testimonials from './components/Testimonials'
import Stockists from './components/Stockists'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <Benefits />
        <Story />
        <Testimonials />
        <Stockists />
      </main>
      <Newsletter />
      <Footer />
    </>
  )
}

export default App
