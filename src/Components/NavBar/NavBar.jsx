import { faAngleDown, faUser } from "@fortawesome/free-solid-svg-icons";
import olxlogo from "../../assets/olxlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import sell from "../../assets/sell.png";
import {auth,provider} from "../../Components/Config/Firebase"
import './NavBar.css'
import { signInWithPopup } from "firebase/auth";
import Title from "../Title/Title";

import { useState } from "react";

const NavBar = () => {
  const [user, setUser] = useState(false);
  const [username, setUsername] = useState("");
  // const navigate = useNavigate();
  const handlelogin = async ()=>
  {
     try {
      const result = await signInWithPopup(auth,provider);

      //  navigate("/home");
      setUser((prevstate) => !prevstate);
      setUsername(result.user.displayName);

     } catch (error) {
      console.log(error);
     }
  }
  const handlelogout = ()=>
  {
    setUser((prevstate) => !prevstate);
  }
  return (
    <div className="navbar">


{user?(
  /*user is exist*/
  <>
  <div className="navbar-logo">
        <img src={olxlogo} alt="" />
        <div className="navbar-location">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="text" />
        </div>
        <div className="nav-search">
          <input type="text" placeholder="Search" />
          <div className="search">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
        <div className="navbar-language">
          <span>
            <p>ENGLISH</p>
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </div>
        <div className="user-dropdown">
          <div className="user">
            <FontAwesomeIcon icon={faUser}/> 
            <p>{username}</p>
            <FontAwesomeIcon icon={faAngleDown}/>
          </div>
          <div className="dropdown-content">
            <button onClick={handlelogout}>Logout</button>
          </div>
        </div>
        <div className="sellbutton">
          <img src={sell} alt="" />
        </div>
       
      </div>
        <Title/>
      </>
     
      
):(
  /*user is not exist*/
  <>
  <div className="navbar-logo">       
        <img src={olxlogo} alt="" />
        <div className="navbar-location">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="text" />
        </div>
        <div className="nav-search">
          <input type="text" placeholder="Search" />
          <div className="search">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
        <div className="navbar-language">
          <span>
            <p>ENGLISH</p>
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </div>
        <div className="user">
          <p onClick={handlelogin}>Login</p>
        </div>
        <div className="sellbutton">
          <img src={sell} alt="" />
        </div>
      </div>
        <Title/>
      </>
 
)
}



      
    </div>
  )
}

export default NavBar
