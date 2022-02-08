import emailjs from 'emailjs-com';

const Form = () =>{
    function sendEmail(e){
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_7ks4r29', e.target, 'user_7rXQWFBoq0gGaL0h11')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
    
        });
        e.target.reset()
    };
    return (
        <div class="container">
          <div class="screen">
            <div class="screen-header">
              <div class="screen-header-left">
                <div class="screen-header-button close"></div>
                <div class="screen-header-button maximize"></div>
                <div class="screen-header-button minimize"></div>
              </div>
              <div class="screen-header-right">
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
              </div>
            </div>
            <div class="screen-body">
              <div class="screen-body-item left">
                <div class="app-title">
                  <span>Have any</span>
                  <span>Questions?</span>
                </div>
                <div class="app-contact">CONTACT INFO : gangbusterfrenchies@gmail.com</div>
              </div>
              <div class="screen-body-item">
                <div class="app-form">
                <form onSubmit={sendEmail}>
                  <div class="app-form-group">
                    <input class="app-form-control" type="text" placeholder="NAME" name='name'/>
                  </div>
                  <div class="app-form-group">
                    <input class="app-form-control" type="email" placeholder="EMAIL" name='email'/>
                  </div>
                  <div class="app-form-group">
                    <input class="app-form-control" type="text" placeholder="CONTACT NO" name='number'/>
                  </div>
                  <div class="app-form-group message">
                    <input class="app-form-control" type="text" placeholder="MESSAGE" name='message'/>
                  </div>
                  <div class="app-form-group buttons">
                    <button onSubmit={sendEmail} class="app-form-button">SEND</button>
                  </div>
                  </form>
                </div>
                
              </div>
            </div>
    
          </div>
          <div class="credits">
          ○Answered within 24 hours○
          </div>
        </div>
      );
    };
    
    export default Form;