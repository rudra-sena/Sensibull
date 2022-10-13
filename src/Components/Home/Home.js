import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return ( 
        <div className="Home">
            <h1>Home Page</h1>
            <Link to="/stocks"><div className="stocks-list">
                <h3>Stocks</h3>
                <p>View the list of stocks here.....</p>
            </div>
            </Link>
        </div>
     );
}
 
export default Home;