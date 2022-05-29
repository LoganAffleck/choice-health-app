import './style/App.css';
import Navbar from './components/Navbar';
import Hero from './components/home/Hero'
import Products from './components/home/Products';
import Blogs from './components/home/Blogs';
import Contact from './components/home/Contact';
import FacebookScript from './components/FacebookScript';
import Social from "./components/Social"
import Footer from './components/Footer';

function App() {


  return (
    <>
    <FacebookScript/>
    <Social/>
    <header>
      <Navbar/>
    </header>

    <main>
      <div className='content'>
        <Hero/>
        <Products/>
        <Blogs/>
        <Contact/>
      </div>
    </main>

    <Footer/>
    </>
  );
}

export default App;
