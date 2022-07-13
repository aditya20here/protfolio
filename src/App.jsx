import { Helmet } from 'react-helmet';
import './App.css'
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero'
import Navigation from './components/Navigation/Navigation'
import Projects from './components/Projects/Projects';
import State from './context/State'
import './style/main.css'

function App() {
  return (
    <>

      <Helmet>
        <title>Aditya Basude</title>
      </Helmet>

      <State>

        <header>
          <Navigation />
        </header>
        <main>
          <Hero />
          <About />
          <Projects />
        </main>
        <footer>
          <Footer />
        </footer>
      </State>
    </>

  );
}

export default App;
