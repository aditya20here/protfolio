import './App.css'
import AboutAndSkills from './components/About/AboutAndSkills';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero'
import Navigation from './components/Navigation/Navigation'
import './style/main.css'

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Hero />
        <AboutAndSkills />
      </main>
      <footer>
        <Footer />
      </footer>
    </>

  );
}

export default App;
