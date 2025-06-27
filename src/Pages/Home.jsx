import "./Home.css";
import Carousel1 from "../components/Carousel1";
import Navbar from "../components/Navbar_home";
import Product_Card1 from "../components/Product_Card1";
import Product_Card2 from "../components/Product_Card2";
import User_Form from "../components/User_Form";

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
                <Product_Card1 />
                <User_Form />
                <Product_Card2 />
            </main>
            <footer>@Samuel.Dev</footer>
        </>
    )
}

export default Home;