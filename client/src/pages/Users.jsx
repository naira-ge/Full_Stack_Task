import { useNavigate } from "react-router-dom";

import Info from 'components/Info';

import { appKey } from '../config/constants/appKey';

import '../styles/Users.css';

const Users = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if( localStorage.getItem(appKey)) {
      localStorage.clear();
      navigate('/');
    }
  }

  return (
    <>
      <section className='container-users'>
        <h2 className='group-title'>User List</h2>
        <div className='wrapper-group'>
          <ul>
            <Info />
            <Info />
          </ul>
        </div>
      </section>
      <button className='btn-logout' onClick={handleLogout}>
        <img className='item-logout' src='/log-out.svg' alt='logout'/>
        Log Out
      </button>
    </>
  )
}

export default Users;
