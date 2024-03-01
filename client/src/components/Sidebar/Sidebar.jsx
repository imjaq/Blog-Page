import React, { useEffect, useState } from "react";
import "./Sidebar.scss";
import Profile from "../../assets/images/profile.jpg";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import axios from "axios";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/api/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span>About Me</span>
        <img src={Profile} alt="profile" />
        <p>
          I am Faiz Iqbal. Currently doing B.Tech from Jamia Millia Islamia. I
          am a Fullstack Developer with wide skillset.
        </p>
        <div className="sidebarSocial">
          <AiFillInstagram />
          <AiFillLinkedin />
          <AiFillGithub />
        </div>
      </div>
      <div className="sidebarItem">
        <span>Categories</span>
        <div className="sidebarList">
          {cats.map((cat) => (
            <Link to={`/?cat=${cat.name}`} className="link" key={cat._id}>
              <li className="sidebarListItem" >
                {cat.name}
              </li>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
