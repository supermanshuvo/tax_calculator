import React from "react";
import { NavLink } from "react-router-dom";
import male from "../../src/images/01-icon.png";
import female from "../../src/images/02-icon.png";
import disable from "../../src/images/03-icon.png";
import sinior from "../../src/images/04-icon.png";


const Navbar = ({changeCategory}) => {
  //console.log(male);
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
                to="man"  onClick={()=>changeCategory('man')}
              >
            <span>
               <img src={male} alt="Happy-Man" className="icon-image img-fluid" />
               <span>
                 {/* <FontAwesomeIcon icon={faMale} size={7}/> */}
               </span>Male</span>
               
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
                <img src={female} alt="Happy-Man" className="icon-image img-fluid" />
               <span>
                 {/* <FontAwesomeIcon icon={faFemale} size={7}/> */}
                 </span>Female</span>
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
                <img src={disable} alt="Happy-Man" className="icon-image img-fluid" />
               <span>
                 {/* <FontAwesomeIcon icon={faWheelchair} size={7}/> */}
                 </span>Disabled</span>
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
                <img src={sinior} alt="Happy-Man" className="icon-image img-fluid" />
               <span>
                 {/* <FontAwesomeIcon icon={faBlind} size={7}/> */}
                 </span>OverAged(65+)</span>
              </NavLink>
            </li>
          </ul>
       
      </div>
    </>
  );
};

export default Navbar;
