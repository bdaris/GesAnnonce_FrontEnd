import React, { Component } from 'react'
import {  Collapse } from 'reactstrap'
import './sidefiltre.css'

class sidefilter extends Component {  
    constructor(props){
        super(props);
        this.state = {isOpen:false};
        this.openFilter = this.openFilter.bind(this);
    }
        
    openFilter = () => {
        this.setState(state => ({
            isOpen: !state.isOpen
          }))
    }
    render(){
        return(
            <div className="secondfilter">
                <p onClick={this.openFilter} className="titlefirstfilter"> Superficie en m² </p>
                <div>
                <Collapse isOpen={this.state.isOpen}>
                    <div className="filterSuperficie">
                        <input type="text" style={{width:"80px"}} name="minSuperficie" className="minSuperficie form-control" placeholder="min"/> <br/>
                        <input type="text" style={{width:"80px"}}  name="maxSuperficie" className="maxSuperficie form-control" placeholder="max"/>
                    </div>
                </Collapse>
                </div>    
            </div>
        );
        
    }    
};

export default sidefilter;