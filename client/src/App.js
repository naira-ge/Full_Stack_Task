import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
  Outlet,
} from "react-router-dom";

import Layout from 'components/Layout';
import Login from 'pages/Login';
import Users from 'pages/Users';
import NotFound from 'pages/NotFound';

import './styles/App.css';

const PrivateRoute = ({ auth }) => {
  return auth ? <Outlet /> : <Navigate to="/" />;
};

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route element={<PrivateRoute auth={true} />}>
            <Route path="/users" element={<Users />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
