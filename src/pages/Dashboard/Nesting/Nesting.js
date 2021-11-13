import React from 'react';
import MyOrder from '../MyOrder/MyOrder';
import './Nesting.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    NavLink
  } from "react-router-dom";
import CreateAdmin from '../CreateAdmin/CreateAdmin';

const Nesting = () => {

      let { path, url } = useRouteMatch();
    return (
        
              <div className="w-50 nest-left">   
   {/* <nav id="sidebar"> */}
       
           <h3>Bootstrap Sidebar</h3>
      

       <ul class="list-unstyled components">
           <p>Dummy Heading</p>
        
           <li>
           <Link to="/myorder">My Order </Link>
           </li>
        
           <li>
           <Link to={`${url}`}> Dashboard  </Link>
           </li>
           <li>
           <Link to={`${url}/addReview`}> Review </Link>
           </li>
           <li>
           <Link to={`${url}/createAdmin`}> Create Admin  </Link>
           </li>
          
       </ul>
   {/* </nav> */}
   <Switch>
        <Route exact path={path}>
          <MyOrder></MyOrder>
        </Route>
        <Route path={`${path}/:createAdmin`}>
         <CreateAdmin></CreateAdmin>
        </Route>
      </Switch>

   

</div>


                 
      
    );
};

export default Nesting;