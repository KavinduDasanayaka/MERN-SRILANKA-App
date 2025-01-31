import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import store from './redux/Store.js';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Restricted
import Home from './pages/Home.jsx';
import Login from './pages/Auth/Login.jsx';
import Register from './pages/Auth/Register.jsx';
import TimeLine from '../src/pages/Timeline.jsx'

import PrivateRoute from "./pages/Auth/PrivateRoute.jsx";
import AdminRoute from "./pages/Admin/AdminRoute.jsx";

import Profile from './pages/User/Profile.jsx';
import CreateLocation from "./pages/User/CreateLocation.jsx"
import LocationDetails from './pages/User/LocationDetails.jsx';
import DashboardFile from './pages/Admin/DashboardFile.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/timeline" element={<TimeLine />} />

          <Route path="" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/location/create" element={<CreateLocation/>}/>
            <Route path="/location/:id" element={<LocationDetails/>}/>
          </Route>
        </Route>
        



        <Route path="" element={<AdminRoute />}>
          <Route path="/admin/movies/dashboard" element={<DashboardFile/>}/>
        </Route>
      </Routes>
    </Router>
  </Provider>
);
