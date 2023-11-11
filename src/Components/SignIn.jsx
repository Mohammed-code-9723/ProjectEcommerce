import React from 'react';
import '../Styles/SignIn.css';
export default function SignIn() {
  return (
    <div className='signInForm'>
        
      <form action="">
        <table cellSpacing={5} className="form-table">
          <tbody>
            <tr>
              <td colSpan={2} align='center'>
                <h1>Sign Up</h1>
                Please fill in this form to create an account.
              </td>
            </tr>
            <tr>
              <td>User name</td>
              <td>
                <input type="text" name="userName" id="userName" placeholder='Enter your User name' />
              </td>
            </tr>
            <tr>
              <td>Password</td>
              <td>
                <input type="password" name="userPass" id="userPass" placeholder='Enter your password' />
              </td>
            </tr>
            <tr>
              <td>Confirm Password</td>
              <td>
                <input type="password" name="userPassCon" id="userPassCon" placeholder='Confirm your password' />
              </td>
            </tr>
            <tr>
              <td colSpan={2} align='center'>
                <button className="submit-button">Sign Up</button>
                <button className="reset-button">Reset</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
