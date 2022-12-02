
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Food<b>Flip</b></h1>
            <a>
                <Form.Control type="search" placeholder="Searc for a recipe..." aria-label="Search"/>
            </a>
            <Button variant="outline-success">Search</Button>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/">Contact</Link>
                <Link to="/">Login</Link>
                <Link to="/create">Add Recipe</Link>
            </div>
        </nav>

        
     );
}
 
export default Navbar;