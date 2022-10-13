import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return ( 
        <>
        <div className="header">
            <Link to="/"><div><button className="nav-btn" onClick>Home</button></div></Link>
            <Link to="/stocks"><div><button className="nav-btn" onClick>Stocks</button></div></Link>
        </div>
        </>
     );
}
 
export default NavBar;