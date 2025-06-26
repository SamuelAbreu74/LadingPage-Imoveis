import "./Home.css";
import Carousel1 from "../components/Carousel1";
import Navbar from "../components/Navbar_home";
import Product_Card from "../components/Product_Card";

function Home() {
    return (
        <>
            <div id='Header'>
                <img className="img-fluid h-25 d-inline-block w-100" src="src\assets\LOGOMARCA.jpg" alt="Logo" />
            </div>
            <div>
                <Navbar />
            </div>
            <main>
                <Carousel1 />
                <Product_Card />
            </main>
            <footer>@Samuel.Dev</footer>
        </>
    )
}

export default Home;