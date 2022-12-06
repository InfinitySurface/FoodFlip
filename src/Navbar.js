
import { Link } from 'react-router-dom';
import './css/Navbar.css'

const Navbar = () => {
    return <div>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <link rel="icon" href="foodflip.ico" />
        <title>FoodFlip</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,600"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
        <body>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" class="navbar-brand">Food<b>Flip</b></Link>  
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
	        <div id="navbarCollapse" class="collapse navbar-collapse justify-content-start">
                <div class="navbar-nav">
                    <Link to="/" class="nav-item nav-link">Home</Link> 
                    <Link to="/about" class="nav-item nav-link">About</Link> 
                    <Link to="/contact" class="nav-item nav-link">Contact</Link> 
                </div>
                <form class="navbar-form form-inline search-form">
                    <div class="input-group">
                        <input type="search" class="form-control" id="q" name="qq" placeholder="Search for a recipe..."/>
                        <span class="input-group-btn">
                            <button type="button" class="btn btn-default"><i class="fa fa-search"></i></button>
                        </span>
                    </div>
                </form>
                
                <div class="navbar-nav">
                    <Link to="/create" class="nav-item nav-link">Add Recipe</Link>
                </div>
                <div class="navbar-nav ml-auto">
                    <div class="btn btn-default">
                        <Link to="/login" class="nav-item nav-link">Login</Link>
                    </div>			
                </div>
	        </div>
            </nav>
        </body>
</div>

}
 
export default Navbar;