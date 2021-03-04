import React from "react";
import { Link } from 'react-router-dom';


function PageNavBar() {
    return (
          <div className="PageNavBar">
        <ul>

        <li> <Link to="/">Page one</Link> </li>

        <li> <Link to="/PageTwo">Page Two</Link> </li>

        <li> 
            <Link to="/PageThree">Page Three</Link>
         </li >

        </ul >

          </div >
        );
}

export default PageNavBar;