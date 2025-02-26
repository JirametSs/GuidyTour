import Navbar from './components/Navbar/navbar.tsx';
import HeroSection from './components/HeroSection/HeroSection.tsx';
import Footer from './components/Footer/Footer.tsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;
