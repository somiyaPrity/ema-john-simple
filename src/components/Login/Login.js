import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const { signInWithGoogle } = useAuth();
  return (
    <div>
      <h3>Please Login</h3>
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
          New user? <Link to='/register'>Create Account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
