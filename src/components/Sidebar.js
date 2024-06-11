// import React from 'react';
// import {
//   BiHome,
//   BiBookAlt,
//   BiMessage,
//   BiSolidReport,
//   BiStats,
//   BiTask,
//   BiHelpCircle,
// } from 'react-icons/bi';
// import { Link } from 'react-router-dom';
// import '../styles/sidebar.css';
 

// const Sidebar = () => {
   

//   return (
//     <div className="menu">
//       <div className="logo">
//         <BiBookAlt className="logo-icon" />
//         <h2>Anirudha</h2>
//       </div>
//       <div className="menu--list">
//         <Link to="/dashboard" className="item">
//           <BiHome className="icon" />
//           Dashboard
//         </Link>
//         <Link to="/courses" className="item">
//           <BiSolidReport className="icon" />
//           Courses
//         </Link>
//         <Link to="/assignments" className="item">
//           <BiTask className="icon" />
//            Resources
//         </Link>
        
//         <Link to="/stats" className="item">
//           <BiStats className="icon" />
//           Stats
//         </Link>
//         {/* <Link to="/message" className="item">
//           <BiMessage className="icon" />
//           Message
//         </Link> */}
//         <Link to="/help" className="item">
//           <BiHelpCircle className="icon" />
//           Help
//         </Link>
        
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import React from 'react';
import {
  BiHome,
  BiBookAlt,
  BiSolidReport,
  BiStats,
  BiTask,
  BiHelpCircle,
  BiLogOut,
} from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import '../styles/sidebar.css';

import profilePic from '../styles/profile_pic.jpg';
// import logoImg from '../styles/logo.png'

const Sidebar = () => {
  return (
    <div className="menu">
      <div className="logo">
      {/* <img src={logoImg} alt="Logo" className="logo-image" style={{ width: '100px', height: 'auto' }} /> */}
        <BiBookAlt className="logo-icon" />
        <h2>Learn It All</h2>
      </div>
      <div className="profile-info">
        <img src= {profilePic} alt="Profile" className="profile-pic" />
        <span className="user-name">Anirudha Kesarkar</span>
      </div>
      <div className="menu--list">
        <NavLink to="/dashboard" className="item" activeClassName="active">
          <BiHome className="icon" />
          Dashboard
        </NavLink>
        <NavLink to="/courses" className="item" activeClassName="active">
          <BiSolidReport className="icon" />
          Courses
        </NavLink>
        <NavLink to="/resources" className="item" activeClassName="active">
          <BiTask className="icon" />
          Resources
        </NavLink>
        <NavLink to="/stats" className="item" activeClassName="active">
          <BiStats className="icon" />
          Stats
        </NavLink>
        <NavLink to="/help" className="item" activeClassName="active">
          <BiHelpCircle className="icon" />
          Help
        </NavLink>
      </div>
      <div className="logout">
        <NavLink to="/logout" className="item">
          <BiLogOut className="icon" />
          Logout
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;

