import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMale,faFemale,faWheelchair,faBlind } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  return (
    <>
      <div className="container nav-div" id="nav_id">
      
        
          <ul className="nav_links">
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="menu_active"
                className="nav-link active"
                aria-current="page"
                to="man"
              >
            <span>
               <span><FontAwesomeIcon icon={faMale} size={7}/></span>Male</span>
               
              </NavLink>
            </li>

            {/* link 2 */}

            <li className="nav-item">
              <NavLink
                exact
                activeClassName="menu_active"
                className="nav-link active"
                aria-current="page"
                to="woman"
              >
                <span>
               <span><FontAwesomeIcon icon={faFemale} size={7}/></span>Female</span>
              </NavLink>
            </li>

            {/* link 3 */}

            <li className="nav-item">
              <NavLink
                exact
                activeClassName="menu_active"
                className="nav-link active"
                aria-current="page"
                to="disabled"
              >
                <span>
               <span><FontAwesomeIcon icon={faWheelchair} size={7}/></span>Disabled</span>
              </NavLink>
            </li>

            {/* link 4 */}

            <li className="nav-item">
              <NavLink
                exact
                activeClassName="menu_active"
                className="nav-link active"
                aria-current="page"
                to="oldage"
              >
                <span>
               <span><FontAwesomeIcon icon={faBlind} size={7}/></span>OverAged(65+)</span>
              </NavLink>
            </li>
          </ul>
       
      </div>
    </>
  );
};

export default Navbar;
