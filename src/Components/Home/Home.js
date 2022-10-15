import { Link } from 'react-router-dom';
import './Home.css'
import Lottie from 'react-lottie';
import stockAnimation from '../../lotties/stock-animation.json';

const Home = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: stockAnimation,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
        }
    };
    
    return ( 
        <div className="Home">
            <div className="home-header">Home</div>
            <Link className="stock-link" to="/stocks">
                <div class="card">
                    <div class="container">
                        <Lottie 
                            options={defaultOptions}
                            height={300}
                            width={300}
                        />
                        <h4><b>Stocks</b></h4> 
                        <p>Click here to view the list of stocks.....</p> 
                    </div>
                </div>
            </Link>
        </div>
     );
}
 
export default Home;