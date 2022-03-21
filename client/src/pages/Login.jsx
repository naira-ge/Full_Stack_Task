import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useFetchData from "hooks/useFetchData";

import Logo from "components/Logo";
import Input from "components/Input";

import { setToken, getToken } from "utils/token";
import loginFields from "config/constants/loginFields";
import { POST } from "config/constants/methods";
import { appUrl } from "config/constants/appUrl";

import "../styles/Login.css";

const LogIn = () => {
  const navigate = useNavigate();

  const [{username, password, remember}, setFields] = useState(() => loginFields);
  const [ errorMessage, setErrorMessage ] = useState("");
  const { isLoading, fetchData: fetchLogin, hasError } = useFetchData({});
  
  const handleChange = ({ target: { name,value }}) => {
    errorMessage && setErrorMessage("");
    setFields( prevFields => ( {
      ...prevFields,
      [name]: {
        ...prevFields[name],
        value,
      },
    }));
  };
    
  const handleCheckboxChange = ({ target: { name } }) =>
    setFields(prev => ({...prev,[ name ]: {...prev[ name ], value: !prev[ name ].value}}));
  
  const handleLoginSubmit = async e => {
    e.preventDefault();
    errorMessage && setErrorMessage("");
    
    if (username.value && password.value) {
      const response = await fetchLogin(`${appUrl}/auth/login`, POST, {password: `${password.value}`, username: `${username.value}`});
      
      if(response) {
        await setToken( response?.token, remember?.value );
        const token = await getToken();
        token &&  await navigate( "/students" );
      } else {
        setErrorMessage(hasError || "Something went wrong. Try again.");
      }
    } else {
      setErrorMessage("Please fill all fields");
    }
  };
  
  return (
    <section className="container-login">
      <div className="wrapper-form">
        <Logo />
        <div className="wrapper-intro">
          <h4>Welcome to the Learning Management System</h4>
          <p>Please login to continue</p>
            <form action="submit" className="form-submit">
              <Input
                icon="/user.svg"
                placeholder="Username"
                name="username"
                value={username.value}
                error={username.error}
                onChange={handleChange}
                autoFocus
              />
              <Input
                icon="/password.svg"
                placeholder="Password"
                name="password"
                type="password"
                value={password.value}
                error={password.error}
                onChange={handleChange}
              />
              <Input
                label="Remember Me"
                name="remember"
                type="checkbox"
                checked={remember.value}
                onChange={handleCheckboxChange}
              />
              <button
                className={isLoading ? "submit-btn-loading" : "submit-btn"}
                onClick={handleLoginSubmit}
              >
                Log In
                <img alt="submit-icon" className="submit-img" src="/arrow-right.svg"/>
              </button>
              <p className="error-message">{ errorMessage }</p>
            </form>
        </div>
      </div>
    </section>
  )
}

export default LogIn;
