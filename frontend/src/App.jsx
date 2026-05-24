import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import PgPage from "./Pages/PgPage";
import ServicesPage from "./Pages/ServicesPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import SignUpPage from "./Pages/User/SignUpPage";
import LoginPage from "./Pages/User/LoginPage";
import PgDetails from "./Components/PgDetails/PgDetails";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import UserDashboard from "./Pages/User/UserDashboard/UserDashboard";
import SeeUsers from "./Pages/Admin/SeeUsers";
import SeePg from "./Pages/Admin/SeePg";
import AddPg from "./Pages/Admin/AddPg";
import HelpAndSupport from "./Pages/Admin/HelpAndSupport";
import AdminProfile from "./Pages/Admin/AdminProfile";
import UpdateAdminProfile from "./Pages/Admin/UpdateAdminProfile";
import UpdatePg from "./Pages/Admin/UpdatePg";
import AdminLogin from "./Pages/Admin/AdminLogin";
import AdminSignUp from "./Pages/Admin/AdminSignUp";
import OwnerLogin from "./Pages/Owner/OwnerLogin";
import OwnerSignUp from "./Pages/Owner/OwnerSignUp";
import OwnerDashboard from "./Pages/Owner/OwnerDashboard";
import UpdateOwnerProfile from "./Pages/Owner/UpdateOwnerProfile";
import OwnerAddPg from "./Pages/Owner/OwnerAddPg";
import UserUpdateProfile from "./Pages/User/UserDashboard/UserUpdateProfile";
import OwnerProfile from "./Pages/Owner/OwnerProfile";
import OwnerSeePg from "./Pages/Owner/OwnerSeePg";
import SeeOwners from "./Pages/Admin/SeeOwners";
import ScrollToTop from "./ScrollToTop";

// Layout Wrapper to Include ScrollToTop
const Layout = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      {children}
    </>
  );
};
 
// Router Configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><HomePage /></Layout>
  },
  { 
    path: "/pg",
    element: <Layout><PgPage /></Layout>
  },
  {
    path: "/services",
    element: <Layout><ServicesPage /></Layout>
  },
  {
    path: "/about",
    element: <Layout><AboutPage /></Layout>
  },  
  {
    path: "/contact",
    element: <Layout><ContactPage /></Layout>
  },
  {
    path: "/pgdetails/:pgId",
    element: <Layout><PgDetails /></Layout> ,
  },
  
  // User Routes  
  {
    path: "/user-login",  
    element: <Layout><LoginPage /></Layout>
  },
  {
    path: "/user-signup",
    element: <Layout><SignUpPage /></Layout>
  },

  {
    path: "/user-panel/:id",
    element: <Layout><UserDashboard /></Layout>
  } ,  
  
  {
    path: "/user/update-profile/:id",
    element: <Layout><UserUpdateProfile /></Layout>
  },

  // Admin Routes   
  {
    path: "/admin-login",
    element: <Layout><AdminLogin /></Layout>
  },
  {  
    path: "/admin-signup",
    element: <Layout><AdminSignUp /></Layout> 
  },
  {
    path: "/admin-panel/:id", 
    element: <Layout><AdminDashboard /></Layout>
  },
  { 
    path: "/users", 
    element: <Layout><SeeUsers /></Layout>
  },
  {
    path: "/see-pg",
    element: <Layout><SeePg /></Layout>
  },
  {
    path: "/see-owners",
    element: <Layout><SeeOwners /></Layout>
  },
  {
    path: "/add-pg",
    element: <Layout><AddPg /></Layout>  
  },
  {
    path: "/profile-settings",
    element: <Layout><AdminProfile /></Layout>
  },
  {  
    path: "/update/admin-profile/:id", 
    element: <Layout><UpdateAdminProfile /></Layout>
  },
  {
    path: "/see-contacts",
    element: <Layout><HelpAndSupport /></Layout>
  },
  {  
    path: "/update-pg/:id",
    element: <Layout><UpdatePg /></Layout>
  },
  
  
  // owner routes 
  {
    path: "/owner-login",
    element: <Layout><OwnerLogin /></Layout>
  },

  {
    path: "/owner-signup",
    element: <Layout><OwnerSignUp /></Layout>
  },

  {
    path: "/owner-panel/:id",
    element: <Layout><OwnerDashboard /></Layout> 
  }, 

  {  
    path: "/owner/update-profile/:id",
    element: <Layout><UpdateOwnerProfile /></Layout>
  },

  {
    path: '/owner/profile-setting',
    element: <Layout><OwnerProfile /></Layout>
  },

  {
    path: "/owner/add-pg",
    element: <Layout><OwnerAddPg /></Layout>
  },

  {
    path: "/owner/see-pg",
    element: <Layout><OwnerSeePg /></Layout>
  }, 
 
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
 