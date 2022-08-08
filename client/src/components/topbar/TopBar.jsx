import { useContext } from 'react';
import {Context} from '../../context/Context'; 
import './topbar.css';
import {Link} from 'react-router-dom';
const TopBar = () => {
  const { user, dispatch } = useContext(Context);

  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  }
  return <>
  <div className="top">
    <div className="topLeft">
    <i className="topIcon fa-brands fa-facebook-square"></i>
    <i className="topIcon fa-brands fa-twitter-square"></i>
    <i className="topIcon fa-brands fa-pinterest"></i>
    <i className="topIcon fa-brands fa-instagram-square"></i> 
    </div>
    <div className="topCenter">
        <ul className="topList">
            <li className="topListItem">
              <Link to='/'>Home</Link>
            </li>
            <li className="topListItem">
              <Link to='/about'>About</Link>
            </li>
            <li className="topListItem">
              <Link to='/contact'>Contact</Link>
            </li>
            <li className="topListItem">
              <Link to='/write'>Write</Link>
            </li>
            <li className="topListItem" onClick={handleLogout}>
              {user && "Log Out"}
            </li>
        </ul>
    </div>
    <div className="topRight">
     
     
      {user ? (
         <Link to="/settings">
            <img 
              className="topImg"
              src={ PF + user.profilePic}
              alt=""
            />
         </Link>
      ) : (
        <ul className='topList'>
          <li className='topListItem'>
            <Link to='/login'>Login</Link>
          </li>
          <li className='topListItem'>
          <Link to='/register'>Register</Link>
          </li>
        </ul>
      )}
        
         <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
    </div>
  </div>
  </>
}

export default TopBar;