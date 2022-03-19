import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

import Layout from 'components/Layout';
import PrivateRoute from 'components/PrivateRoute';
import LogIn from 'pages/Login';
import Students from 'pages/Students';
import NotFound from 'pages/NotFound';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LogIn />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/students" element={<Students />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
