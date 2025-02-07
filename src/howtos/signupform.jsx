import * as React from 'react';

import './signupform.css';
import Reference from '../comm/reference.jsx';


export default function SignupForm(){
  const [signupStatus, setSignupStatus] = React.useState('');
  const [userInfo, setUserInfo] = React.useState({
    email: '',
    psw: '',
    pswrepeat: '',
    remember: 'on',
  });
  const [isChecked, setIsChecked] = React.useState(true);

  const signupmodal = React.useRef(null);

  React.useEffect(() => {
    //
    // When the user clicks anywhere outside of the modal, close it
    const handleWinClick = (event) => {
      if (event.target == signupmodal.current) {
        signupmodal.current.style.display = "none";

        setSignupStatus('');
      }
    }

    window.addEventListener('click', handleWinClick);
    return () => {
      window.removeEventListener('click', handleWinClick);
    };
  }, []);

  //
  // this function serves processing the entered data
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userDetails = {
      ...Object.fromEntries(formData)
    };
    // console.log('user details: ', userDetails);

    postSubmit(userDetails);
  }
  //
  // memoize the post function which should be implemented in the parent element in a normal case.
  const postSubmit = React.useCallback((userDetails) => {
    setUserInfo(userDetails);

    const url = 'POST /signup/';
    const {email, psw, remember} = userDetails;

    // Imagine this sends a request...
    console.log(url);
    console.log('entry: ', userDetails);

    setSignupStatus(userDetails['email'] + ', ' + 'you are signed up.');
    signupmodal.current.style.display = 'none';

  }, [userInfo]);


  return(
    <div className='signup'>
      <h2>Modal Signup Form</h2>

      <button onClick={() => signupmodal.current.style.display='block'}
        style={{width:'auto'}}>Sign Up
      </button>

      <span> <br/> {signupStatus} </span>

      <div className="modal" ref={signupmodal}>
        <span onClick={() => signupmodal.current.style.display='none'}
          className="close" title="Close Modal">
          &times;
        </span>
        <form className="modal-content" onSubmit={handleSubmit}>
          <div className="container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr/>
            <label htmlFor="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required />

            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required />

            <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="pswrepeat" required />

            <label>
              <input type="checkbox" checked={isChecked} name="remember" style={{marginBottom:'15px'}}
                onChange={(e) => setIsChecked(!isChecked)} />
               Remember me
            </label>

            <p>By creating an account you agree to our <a href="#" style={{color:'dodgerblue'}}>Terms & Privacy</a>.</p>

            <div className="clearfix">
              <button type="button" onClick={() => signupmodal.current.style.display='none'}
                className="cancelbtn">
                Cancel
              </button>
              <button type="submit" className="signupbtn">
                Sign Up
              </button>
            </div>

          </div>
        </form>
      </div>
      <Reference
        title='Makeover in React'
        urlname='W3Schools How To: Signup Form'
        url='https://www.w3schools.com/howto/howto_css_signup_form.asp'
      />
    </div>
  );
}
