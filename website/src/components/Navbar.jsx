import './Navbar.css';

export default function Navbar(){
    return(
        <nav className="navbar">
            <a href="#home" className="navbar-brand">Jed Villapando</a>
            <div className="navbar-links">
                <a href="#projects" className="navbar-link">Projects</a>
                <a href="#contact" className="navbar-link">Contact</a>
            </div>
        </nav>
    );
}