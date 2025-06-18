import "./Home.css";
import Carousel1 from "../components/Carousel1";
import Navbar from "../components/Navbar_home";

function Home() {
    return (
        <>
            <div id='Header'>
                <img className="img-fluid" src="src\assets\LOGOMARCA.jpg" alt="Logo" />
            </div>
            <div>
                <Navbar />
            </div>
            <main>
                <Carousel1 />
            </main>
            <footer></footer>
        </>
    )
}

export default Home;