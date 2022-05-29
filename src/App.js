import './style/App.css';
import Navbar from './components/Navbar';
import Hero from './components/hero'

function App() {

  console.log(window.outerWidth)

  return (
    <>
    <header>
      <Navbar/>
    </header>

    <main>
      <Hero/>
    </main>
    </>
  );
}

export default App;
