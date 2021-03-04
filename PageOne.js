import React from 'react';
import './PageOne.css';


function PageOne (){
    return (
        <div>
          <TopNavBar />
          <div className="PageOne">
            <div className="Content">
              <div className="Pic"> <p>pic goes here</p> </div>
              <div className="StudentDetails"> <p>details goes here</p> </div>
            </div>
          </div>
        </div>
      );
    }
    
    function TopNavBar() {
      return (
        <div className="TopNavBar">
          <p>this is nav bar</p>
        </div>
      );
    }
    
export default PageOne;