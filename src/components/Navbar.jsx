
import './navbar.css';
function Navbar ()  {
    return (
        <>
            <nav>
                <label htmlFor="toggle">&#9776;</label>
                <input type="checkbox"id="toggle"/>
                <ul className="menu">
                   <li><a href="/">Home</a></li>
                   <li> <a href="/porfolio">Porfolio</a></li>
                   <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;