import React from 'react'
import {NavbarToggler,Navbar} from 'reactstrap'


const sideFilterbutton = props => (
    <div>
        <Navbar color="faded" light>
            <NavbarToggler className="mr-2" onClick={props.click}/>
        </Navbar>
    </div>
);

export default sideFilterbutton;