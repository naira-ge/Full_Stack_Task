import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

import Layout from 'components/Layout';
import ProtectedRoute from 'components/ProtectedRoute';
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
            <Route element={<ProtectedRoute />}>
              <Route path="/students" element={<Students />} />
            </Route>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
