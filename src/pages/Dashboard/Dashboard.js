import React, { useState } from 'react';
import 'react-bootstrap-drawer/lib/style.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Navigation from '../Shared/Navigation/Navigation';
import DashNav from './DashNav/DashNav';
import MyOrder from './MyOrder/MyOrder';
import './Dashboard.css'
import { NavLink } from 'react-router-dom';

import {
	Col,
	Collapse,
	// Container,
	Row,
} from 'react-bootstrap';
import { Drawer, } from 'react-bootstrap-drawer';



const Dashboard = () => {
    // const [open, setOpen] = useState(false);

	// const handleToggle = () => setOpen(!open);
    return (     
       <div>
           {/* <DashNav></DashNav> */}
           <MyOrder></MyOrder>


       </div>
 

           
               
              
                   
               
                    

            
            
       
    );
};

export default Dashboard;