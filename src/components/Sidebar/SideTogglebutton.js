import React from 'react'
import { NavbarToggler,Navbar } from 'reactstrap'
import './SideToggleButton.css'


const drawerTogglebutton = props => (
    <div>
        <Navbar color="faded" light className="toogle">
            <NavbarToggler className="mr-2" onClick={props.click}/>
        </Navbar>
    </div>
);

export default drawerTogglebutton;