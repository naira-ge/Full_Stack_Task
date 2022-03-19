import { useState } from 'react';

import Logo from 'components/Logo';
import Input from 'components/Input';

import loginFields from '../config/constants/loginFields';

import '../styles/Login.css';

const LogIn = () => {
  const [{username, password, remember}, setFields] = useState(() => loginFields);
  const [ loading, setLoading ] = useState( false );
  const [ errorMessage, setErrorMessage ] = useState('');
  
  const handleChange = ({ target: { name, value } }) =>
    setFields(prevFields => ({
      ...prevFields,
      [name]: {
        ...prevFields[name],
        value,
      },
    } ) );
    
  const handleCheckboxChange = ({ target: { name } }) =>
    setFields( prev => ( { ...prev,[ name ]: { ...prev[ name ],value: !prev[ name ].value } } ) );
  
  const handleLoginSubmit = async e => {
    e.preventDefault();
    if (username.value && password.value) {
      setLoading( prev => !prev );
      console.log(username, password, remember);

      // await get(`api/login?password=${password.value}&username=${username.value}`);

      // const { data, error } = await get('api/user');

      // if (!error) {
      //   // TODO: => remove Bearer from this request
      //   setLoading(prev => !prev);
      //   setCredentials({ ...data, accessToken: data.accessToken.split('Bearer').join('').trim() });
      //   await navigate('/home');
      // } else {
      //   setLoading(prev => !prev);
      // }
    }
  };
  
  return (
    <section className='container-login'>
      <div>
        <Logo />
        <div className='wrapper-intro'>
          <h4>Welcome to the Learning Management System</h4>
          <p>Please login to continue</p>
            <form action='submit' className='form-submit'>
              <Input
                icon='/user.svg'
                placeholder='Username'
                name='username'
                value={username.value}
                error={username.error}
                onChange={handleChange}
                autoFocus
              />
              <Input
                icon='/password.svg'
                placeholder='Password'
                name='password'
                type='password'
                value={password.value}
                error={password.error}
                onChange={handleChange}
              />
              <Input
                label='Remember Me'
                name='remember'
                type='checkbox'
                checked={remember.value}
                onChange={handleCheckboxChange}
              />
              <button className='submit-btn' onClick={handleLoginSubmit}>
                Log In {loading && '...'}
                <img alt='submit-icon' className='submit-img' src='/go.svg'/>
              </button>
              <p className='error-message'>{ errorMessage }</p>
            </form>
        </div>
      </div>
    </section>
  )
}

export default LogIn;
