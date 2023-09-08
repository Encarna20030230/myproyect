
import './Navbar.css';

function Navbar() {
  return (
<>
   <nav>
    <label htmlFor="toggle">&#9776;</label>
    <input type="checkbox" id="toggle"></input>
    <ul className='menu'>
      <li><a href="#">SobreMi</a></li>
      <li><a href="#">Porfolios</a></li>
      <li><a href="#">Contacto</a></li>
    </ul>
   </nav>


  </>  
  );
}

export default Navbar;