import { Link } from 'react-router-dom';
import './css/Contact.css'

const Contact = () => {
    return <div>
      
      <div class="main-content">
    <div class="container">

            <section>


                <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>

                <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                    a matter of hours to help you.</p>

                <div class>


                    <div class="center">
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">


                            <div class="row">


                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="text" id="name" name="name" class="form-control"></input>
                                        <label for="name" class="">Your name</label>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="text" id="email" name="email" class="form-control"></input>
                                        <label for="email" class="">Your email</label>
                                    </div>
                                </div>

                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="md-form mb-0">
                                        <input type="text" id="subject" name="subject" class="form-control"></input>
                                        <label for="subject" class="">Subject</label>
                                    </div>
                                </div>
                            </div>

                            <div class="row">


                                <div class="col-md-12">

                                    <div class="md-form">
                                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                        <label for="message">Your message</label>
                                    </div>

                                </div>
                            </div>


                        </form>

                        <div class="text-center text-md-left">
                            <Link to='/'>Send</Link>
                        </div>
                        <div class="status"></div>
                    </div>


                </div>

            </section>
</div>
</div>
        
     </div>
}
 
export default Contact;