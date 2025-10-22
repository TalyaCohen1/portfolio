import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Navbar />
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
    </>
  );
}

export default App;
