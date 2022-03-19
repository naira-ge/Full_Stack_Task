import { useNavigate } from "react-router-dom";

import Info from 'components/Info';
import Pagination from 'components/Pagination';

import usePagination from 'hooks/usePagination';

import { appKey } from '../config/constants/appKey';

import '../styles/Users.css';

const contentByPage = 5;

const Users = () => {
  const navigate = useNavigate();

  const { firstContentIndex, lastContentIndex, nextPage, prevPage, page, setPage, totalPages } =
    usePagination({
      contentPerPage: contentByPage,
      count: 15,
      // count: data?.length,
    });

  const handleLogout = () => {
    if( localStorage.getItem(appKey)) {
      localStorage.clear();
      navigate('/');
    }
  }

  const handleGetPage = () => {

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
        <Pagination
            contentPerPage={contentByPage}
            nextPage={nextPage}
            prevPage={prevPage}
            page={page}
            setPage={setPage}
            totalPages={totalPages}
            getNextPage={handleGetPage}/>
      </section>
      <button className='btn-logout' onClick={handleLogout}>
        <img className='item-logout' src='/log-out.svg' alt='logout'/>
        Log Out
      </button>
    </>
  )
}

export default Users;
