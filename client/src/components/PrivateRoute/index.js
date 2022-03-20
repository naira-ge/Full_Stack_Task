import { useEffect, useState } from 'react';
import { Navigate, Outlet } from "react-router-dom";

import Layout from 'components/Layout';

import { getToken } from 'utils/token';

const PrivateRoute = () => {
  const [auth, setAuth] = useState( false );
  
  useEffect( () => {
    const token = getToken();
    token ? setAuth(true) : setAuth(false);
    },[auth]);

  return (
    <Layout>
      {auth ? <Outlet /> : <Navigate to='/' />}
    </Layout>
  );
};

export default PrivateRoute;