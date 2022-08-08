import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import './sidebar.css';

const Sidebar = () => {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const fetchCat = async () => {
      const res = await axios.get("http://localhost:5000/api/cat");
      setCats(res.data)
    }

    fetchCat();
  }, [])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">
           ABOUT ME
        </span>
        <img
            src="https://images.unsplash.com/photo-1656597453671-9a89de3fadc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            alt="" />
            <p>Lorem ipsum dolor sit amet 
              consectetur adipisicing elit. A ipsum
            </p>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">
           CATEGORIES
        </span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`}>
               <li className="sidebarListItem">
                  {c.name}
                </li>
            </Link>
         
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW </span>
        <div className="sidebarSocial">
           <i className="sidebarIcon fa-brands fa-facebook-square"></i>
          <i className="sidebarIcon fa-brands fa-twitter-square"></i>
          <i className="sidebarIcon fa-brands fa-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-instagram-square"></i> 
        </div>
      </div>
    </div>
  )
}

export default Sidebar
