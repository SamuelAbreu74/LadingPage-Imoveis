import { Link } from "react-router-dom";
import "./Home.css";
function Home(){
    return(
        <>
            <div id='Header'>
                <img className="img-fluid" src="src\assets\LOGOMARCA.jpg" alt="Logo" />
            </div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className='container-fluid'>
                        <div id="navbar"className="collapse navbar-collapse">
                            <ul className=" nav  nav-underline navbar-nav translate-middle mt-3 mb-2 mb-lg-0">
                                <li className="nav-item"> <Link className="nav-link" to="/JardinsPage.jsx">Jardins</Link></li>
                                <li className="nav-item"> <Link className="nav-link" to="/TerraBrasPage.jsx">Terra Brasilis</Link></li>
                                <li className="nav-item"> <Link className="nav-link" to="/"></Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
        </>
    )
}

export default Home;