import { Link } from 'react-router-dom';
import logoCH from '../svg/logoCH.svg';

function Navbar() {


    return(
        <div className='navbar'>
            <Link to='/'>
                <img src={logoCH} alt="Choice Health Westfield logo" className='logo'/>
            </Link>
            
            <nav>
                <div className="navLinks">
                <Link to='/products' className='navLink'>Products</Link>
                <Link to='/blog' className='navLink'>Blog</Link>
                <Link to='/about' className='navLink'>About</Link>
                <Link to='/contact' className='navLink'>Contact</Link>
                </div>
            </nav>
        </div>
    )

}

export default Navbar;