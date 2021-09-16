import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMale,faFemale,faWheelchair,faBlind } from '@fortawesome/free-solid-svg-icons'


const Navbar = ({changeCategory}) => {
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
                to="man" onClick={()=>changeCategory('man')}
              >
            <span>
               <span><FontAwesomeIcon icon={faMale} /></span>Male</span>
               
              </NavLink>
            </li>

            {/* link 2 */}

            <li className="nav-item">
              <NavLink
                exact
                activeClassName="menu_active"
                className="nav-link active"
                aria-current="page"
                to="woman" onClick={()=>changeCategory('woman')}
              >
                <span>
               <span><FontAwesomeIcon icon={faFemale} /></span>Female</span>
              </NavLink>
            </li>

            {/* link 3 */}

            <li className="nav-item">
              <NavLink
                exact
                activeClassName="menu_active"
                className="nav-link active"
                aria-current="page"
                to="disabled" onClick={()=>changeCategory('disabled')}
              >
                <span>
               <span><FontAwesomeIcon icon={faWheelchair} /></span>Disabled</span>
              </NavLink>
            </li>

            {/* link 4 */}

            <li className="nav-item">
              <NavLink
                exact
                activeClassName="menu_active"
                className="nav-link active"
                aria-current="page"
                to="oldage" onClick={()=>changeCategory('oldage')}
              >
                <span>
               <span><FontAwesomeIcon icon={faBlind} /></span>OverAged(65+)</span>
              </NavLink>
            </li>
          </ul>
       
      </div>
    </>
  );
};

export default Navbar;
