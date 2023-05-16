const Navbar = ()=>{
    return(
        <>
            <nav className="navbar fixed-top navbar-expand-sm bg-white navbar-light">
                <div className="container">
                <a href="#" className="navbar-brand">
                    TR
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link nav-about" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav-works" href="#works">Works</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav-projects" href="#projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav-contact"  href="#contact">Contact</a>
                    </li>    
                    <li className="nav-item">
                        <a className="nav-link"  href="/travel.html">Travel</a>
                    </li>    
                    </ul>
                </div>
                </div>
            </nav>
        </>
    );
    
}
export default Navbar;