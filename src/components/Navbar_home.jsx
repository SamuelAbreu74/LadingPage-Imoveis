import { Link } from "react-router-dom";
function Navbar(){
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-secondary">
                <div className='container-fluid d-flex justify-content-center'>
                    <div id="navbar" className="navbar-collapse">
                        <ul className="nav-underline navbar-nav mt-0">
                            <li className="nav-item"> <Link className="nav-link" to="/Campanha1">Campanha 1</Link></li>
                            <li className="nav-item"> <Link className="nav-link" to="/Campanha2">Campanha 2</Link></li>
                            <li className="nav-item"> <Link className="nav-link" to="/Campanha3">Campanha 3</Link></li>
                            <li className="nav-item"> <Link className="nav-link" to="/Campanha4">Campanha 4</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;