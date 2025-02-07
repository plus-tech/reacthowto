// multiple step form
//------------------------------------------
import * as React from 'react';

import './multistepform.css';
import Reference from '../comm/reference.jsx';

const userInfoInitial =
{
  fname: '',
  lname: '',
  email: '',
  phone: '',
  dd: '',
  nn: '',
  yyyy: '',
  uname: '',
  pword:'',
}

export default function MultiStepForm(){
  // Current tab is set to be the first tab (0)
  const [currentTab, setCurrentTab] = React.useState(0);

  const [isValid, setIsValid] = React.useState(true);

  const [userInfo, setUserInfo] = React.useState(userInfoInitial);

  const showStepIndicator = (whichone) => {
    if (currentTab == whichone) return <span className="step active" />;
    if (currentTab > whichone) return <span className="step finish" />;
    return <span className="step" />;
  };

  function nextPrev(n) {
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm(n)) return false;

    // Increase or decrease the current tab by 1:
    setCurrentTab(currentTab + n);

    console.log('user info: ', userInfo);
  }

  function validateForm(n) {
    // This function deals with validation of the form fields
    var y, i, valid = true;

    y = document.getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
      // If a field is empty...
      if (y[i].value == "") {
        // add an "invalid" class to the field:
        y[i].className += " invalid";
        // and set the current valid status to false
        valid = false;
      }
    }

    return valid; // return the valid status
  }

  //
  // this function validates the entered data and send it to the back end
  function handleSubmit(e) {
    e.preventDefault();

    if (!validateForm()) return false;
    /* more data validation can be done here
      data relationship, business logic, etc.
    */

    console.log('user details: ', userInfo);
    setCurrentTab(currentTab+1);

    // function submit isn't fit for this case
    // because the form only holds a portion of the data at the last step
    /* To Do
      post userInfo to the back end
    */

    // reset the form
    setTimeout( () => {setCurrentTab(0); setUserInfo(userInfoInitial)}, 10000);
  }


  return (
    <div className='multistepform'>
      <form id="regForm" action='/register.php' onSubmit={handleSubmit}>
        <h1>Register:</h1>
        {/*One "tab" for each step in the form:*/}
        { currentTab == 0 &&
        <div className="tab">Name:
          <p><input placeholder="First name..." name="fname" value={userInfo.fname}
            onChange={(e) => setUserInfo({...userInfo, fname: e.target.value})} />
          </p>
          <p><input placeholder="Last name..." name="lname" value={userInfo.lname}
            onChange={(e) => setUserInfo({...userInfo, lname: e.target.value})} />
          </p>
        </div>
        }

        { currentTab == 1 &&
        <div className="tab">Contact Info:
          <p><input placeholder="E-mail..." name="email" value={userInfo.email}
            onChange={(e) => setUserInfo({...userInfo, email: e.target.value})} />
          </p>
          <p><input placeholder="Phone..." name="phone" value={userInfo.phone}
            onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})} />
          </p>
        </div>
        }

        { currentTab == 2 &&
        <div className="tab">Birthday:
          <p><input placeholder="dd" name="dd" value={userInfo.dd}
            onChange={(e) => setUserInfo({...userInfo, dd: e.target.value})} />
          </p>
          <p><input placeholder="mm" name="nn" value={userInfo.nn}
            onChange={(e) => setUserInfo({...userInfo, nn: e.target.value})} />
          </p>
          <p><input placeholder="yyyy" name="yyyy" value={userInfo.yyyy}
            onChange={(e) => setUserInfo({...userInfo, yyyy: e.target.value})} />
          </p>
        </div>
        }

        { currentTab >= 3 &&
        <div className="tab">Login Info:
          <p><input placeholder="Username..." name="uname" value={userInfo.uname}
            onChange={(e) => setUserInfo({...userInfo, uname: e.target.value})} />
          </p>
          <p><input placeholder="Password..." name="pword" type="password" value={userInfo.pword}
            onChange={(e) => setUserInfo({...userInfo, pword: e.target.value})} />
          </p>
        </div>
        }

        <div style={{overflow:'auto'}}>
          <div style={{display:'flex', float:'right'}}>
            { currentTab > 0 &&
              <button type="button" id="prevBtn" onClick={() => nextPrev(-1)}>Previous</button>
            }
            { currentTab < 3 &&
              <button type="button" id="nextBtn" onClick={() => nextPrev(1)}>Next</button>
            }
            { currentTab >= 3 &&
              <button type="submit" id="submitBtn">Submit</button>
            }
          </div>
        </div>

        {/* Circles which indicates the steps of the form: */}
        <div style={{textAlign:'center', marginTop:'40px'}}>
          {showStepIndicator(0)}
          {showStepIndicator(1)}
          {showStepIndicator(2)}
          {showStepIndicator(3)}
        </div>

      </form>

      <Reference
        title='Makeover in React'
        urlname='W3Schools How To: Multiple Step Form'
        url='https://www.w3schools.com/howto/howto_js_form_steps.asp'
      />
    </div>
  )
}
