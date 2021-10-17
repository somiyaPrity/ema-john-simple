import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
  const { signInWithGoogle } = useAuth();
  return (
    <div>
      <h3>Please Create Account</h3>
      <input type='email' placeholder='Enter your Email' />
      <br /> <br />
      <input type='password' placeholder='Enter your password' />
      <br /> <br />
      <button className='btn-regular'>submit</button>
      <div>
        ------------or------------
        <br />
        <button onClick={signInWithGoogle} className='btn-regular'>
          Google Signin
        </button>
      </div>
      <div>
        <p>
          Already Have an account? <Link to='/login'>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
