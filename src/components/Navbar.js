import { Link } from 'react-router-dom';
import logoCH from '../svg/logoCH.svg';
import Social from './Social';

function Navbar() {


    return(
        <div className='navbar'>
            <Link to='/'>
                <img src={logoCH} alt="Choice Health Westfield logo" className='logo'/>
            </Link>
            
            <nav>
                <div className="links">
                <Link to='/products'>Products</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                </div>
                <Social/>
            </nav>
        </div>
    )

}

export default Navbar;