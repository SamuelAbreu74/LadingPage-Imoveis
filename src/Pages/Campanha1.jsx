import { Link } from "react-router-dom";
import "./Campanha1.css";
function Campanha1() {
    return (
        <>
            <h1>Campanha1</h1>
            <div className="container-fluid ">
                <nav id="navbar" className="navbar-collapse  ">
                    <ul className="nav-underline navbar-nav">
                        <li className="nav-item"><Link className="nav-link" to="/"> Home </Link></li>
                    </ul>
                </nav>
            </div>
        
        </>
    )
};

export default Campanha1;