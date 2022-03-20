import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import useFetchData from 'hooks/useFetchData';

import Logo from 'components/Logo';
import Input from 'components/Input';

import { setToken } from 'utils/token';
import loginFields from 'config/constants/loginFields';
import { POST } from 'config/constants/methods';

import '../styles/Login.css';

const LogIn = () => {
  const navigate = useNavigate();

  const [{username, password, remember}, setFields] = useState(() => loginFields);
  const [ loading, setLoading ] = useState( false );
  const [ errorMessage, setErrorMessage ] = useState('');

  const { fetchData: fetchLogin, data, hasError } = useFetchData([]);
  
  const handleChange = ( { target: { name,value } } ) => {
    errorMessage && setErrorMessage('');
    setFields( prevFields => ( {
      ...prevFields,
      [name]: {
        ...prevFields[name],
        value,
      },
    }));
  };
    
  const handleCheckboxChange = ({ target: { name } }) =>
    setFields( prev => ( { ...prev,[ name ]: { ...prev[ name ],value: !prev[ name ].value } } ) );
  
  const handleLoginSubmit = async e => {
    e.preventDefault();
    if (username.value && password.value) {
      setLoading( prev => !prev );
      console.log( username,password,remember,loading );

      await fetchLogin(`https://oauth.greenwaveiot.com/api/login?password=${password.value}&username=${username.value}`, POST);

      if (!!hasError && data.length > 0) {
        if (remember?.value) {
          setToken('jwt');
        } 
        await navigate('/students');
      } else {
        setErrorMessage('Something went wrong. Try again.');
      }
      setLoading(prev => !prev);
    } else {
      setErrorMessage('Please fill all fields');
    }
  };
  
  return (
    <section className='container-login'>
      <div className='wrapper-form'>
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
              <button className={loading ? 'submit-btn-loading' : 'submit-btn'} onClick={handleLoginSubmit}>
                Log In
                <img alt='submit-icon' className='submit-img' src='/arrow-right.svg'/>
              </button>
              <p className='error-message'>{ errorMessage }</p>
            </form>
        </div>
      </div>
    </section>
  )
}

export default LogIn;
