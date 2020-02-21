import React from "react";

import { Link } from "react-router-dom";


/**
 * Header component to link with Photo and Socket route and exports Header 
 */

const Header = () => (
  <header>
    <div id="container">
    <nav>
      <ul>
      <li><Link to="/">Photo</Link> </li>
      <li><Link to="/Socket">Socket</Link></li>
      </ul>
     
    </nav>

    </div>
  </header>
)
    
   
     

    




export default Header;
