import { Link } from 'react-router-dom';
import logo from '../sensibull-logo.png';
import './NavBar.css';

const NavBar = () => {
    return ( 
        <>
        <div className="header">
            <div className="sensibull">
                <Link to="/"><img src={logo} alt="logo" /></Link>
            </div>
            <div className="nav-container">
                <Link to="/"><div><button className="nav-btn" onClick>Home</button></div></Link>
                <Link to="/stocks"><div><button className="nav-btn" onClick>Stocks</button></div></Link>
            </div>
        </div>
        </>
     );
}
 
export default NavBar;