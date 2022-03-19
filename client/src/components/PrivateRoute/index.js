import { useEffect, useState } from 'react';
import { Navigate, Outlet } from "react-router-dom";

import Layout from 'components/Layout';
import { appKey } from './../../config/constants/appKey';

const PrivateRoute = () => {
  const [auth, setAuth] = useState( false );
  
    useEffect(() => {
    localStorage.getItem(appKey) ? setAuth(true) : setAuth(false);
    },[auth]);

  return (
    <Layout>
      {auth ? <Outlet /> : <Navigate to='/' />}
    </Layout>
  );
};

export default PrivateRoute;