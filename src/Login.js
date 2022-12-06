import { Link } from 'react-router-dom';
import './css/Login.css'

const Login = () => {
    const login = () => {

            var storedUser = localStorage.getItem('user');
            var storedPass = localStorage.getItem('pass');
        
        
            var userName = document.getElementById("user").value;
            var passWord = document.getElementById("pass").value;
        
            if(userName == storedUser && passWord == storedPass){
                alert('You have been logged in.');
                window.location = '/';
            } else {
                alert('Error: cannot login.');
            }
        };
    return <div>
        <div className="login-container">
            <div className="login-left">
                <img src={require('./foodflip.ico')} alt="" height="200px"></img>
                <h3>Welcome to Food<b>Flip</b></h3>
                <form>
                    <label>Username</label>
                    <input id="user" class="form-control" type="text" placeholder="enter username..." name="user" required/>

                    <label>Password</label>
                    <input id="pass" class="form-control" type="password" placeholder="enter password..." name="pass" required/>
                    <a class="btn btn-primary btn-block fa-md mb-3" onClick={login} role="button">Login</a>
                </form>
                Don't have an account? 
                <Link to="/registration"> Create Account</Link>
              
            </div>
            <div className="login-right">
                <h4><b>your favorite recipes right at your fingertips...</b></h4>
                Where you can gather recipes from all over the web and your family cookbooks, into one place.
            </div>
        </div>
        
     </div>
}
 
export default Login;