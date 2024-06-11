import React from 'react';
import {BiSearch,BiNotification,BiUserCircle} from 'react-icons/bi';
import '../styles/ContentHeader.css'
const ContentHeader = () => {
  return (
    <div className='content--header'>
        <h1 className='header--title'>Welcome!</h1>
        <div className="header--activity">
            <div className="search-box">
                <input type="text" placeholder = "search anything here..." />
                <BiSearch className="icon"/>
            </div>
            <div className="notify">
                <BiNotification className="icon"/>  
            </div>
            
        {/* Profile section */}
        {/* <div className="profile-section">
          <BiUserCircle size={40} />
          <span>Anirudha</span> Replace with user's name or username */}
          {/* Add more profile-related actions/buttons here */}
        {/* </div> */}
        </div>
      
    </div>
  )
}

export default ContentHeader;

 
