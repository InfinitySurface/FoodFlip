import { Link } from 'react-router-dom';
import './css/Login.css'

const Login = () => {
    return <div>
      
        <div className="login-container">
            <div className="login-left">
                <img src={require('./foodflip.ico')} alt="" height="200px"></img>
                <h3>Welcome to Food<b>Flip</b></h3>
                <form>
                    <label>Username</label>
                    <input type="text" placeholder='Username...'/>

                    <label>Password</label>
                    <input type="password" placeholder='Password...'/>

                    <input type="submit"></input>
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