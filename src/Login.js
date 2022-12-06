import { Link } from 'react-router-dom';
import './css/Login.css'

/*eslint-disable*/
const Login = () => {
    const login = () => {

            var storedUser = localStorage.getItem('user');
            var storedPass = localStorage.getItem('pass');
        
        
            var userName = document.getElementById("user").value;
            var passWord = document.getElementById("pass").value;
        
            if(userName === storedUser && passWord === storedPass){
                alert('You have been logged in.');
                window.location = '/';
            } else {
                alert('Error: cannot login.');
            }
        };
    return <div>
        <div className="login-container">
            <div className="login-left">
                <div className="left-content">
                <img src={require('./foodflip.ico')} alt="" height="200px"></img>
                <h3>Welcome to Food<b>Flip</b></h3>
                <form>
                    <label>Username</label>
                    <input id="user" class="form-control" type="text" placeholder="enter username..." name="user" required/>

                    <label>Password</label>
                    <input id="pass" class="form-control" type="password" placeholder="enter password..." name="pass" required/>
                    <a class="login-button" onClick={login} role="button">Login</a>
                </form>
                Don't have an account? 
                <Link to="/registration"> Create Account</Link>
              </div>
            </div>
            <div className="login-right">
                <div className="right-content">
                    <b>your favorite recipes right at your fingertips...</b><br/>
                    <text>Where you can gather recipes from all over the web and your family cookbooks, into one place.</text>
                </div>
            </div>
        </div>
        
     </div>
}
 
export default Login;