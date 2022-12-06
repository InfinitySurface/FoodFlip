import './css/Login.css'

const Registration= () => {
    return <div>
        <div class="text-center">
                <img src={require('./foodflip.ico')} alt="" height="200px"></img>
                    <h4 class="mt-1 mb-5 pb-1">Welcome to Food<b>Flip</b></h4>
                  </div>
  
                  <form id="form" action="/"></form>
                    <div class="row">
                        <div class="col-md-6 mb-4">
                          <div class="form-outline">
                            <label class="form-label" for="first">First name</label>
                            <input type="text" id="first" class="form-control" 
                            placeholder="example: Johnny" required/>
                          </div>
                        </div>
                        <div class="col-md-6 mb-4">
                          <div class="form-outline">
                            <label class="form-label" for="last">Last name</label>
                            <input type="text" id="last" class="form-control"
                            placeholder="example: Appleseed" required/>
                          </div>
                        </div>
                      </div>
          
  
                    <div class="form-outline mb-4">
					<label class="form-label" for="user">Username</label>
                      <input type="text" id="user" class="form-control"
                        placeholder="enter username.." required/>
                    </div>
                    
                    <div class="form-outline mb-4">
					<label class="form-label" for="pass">Password</label>
                      <input type="password" id="pass" class="form-control"
					  placeholder="enter password..." required/>
                    </div>


                    <div class="form-outline mb-4">
                        <label class="form-label" for="email">Email</label>
                          <input type="email" id="email" class="form-control"
                          placeholder="enter email..." required/>
                        </div>

                        <script src="function.js"></script>
                        <div class="text-center pt-1 mb-5 pb-1">
                      <button class="btn btn-primary btn-block fa-md mb-3" onclick="register()" role="button">Submit</button>
                    </div>

      
    </div>
        
}
 
export default Registration;