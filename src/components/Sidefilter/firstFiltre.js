import React, { Component } from 'react'
import { FormGroup, Label, Input, Collapse } from 'reactstrap'
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
            <div className="firstfilter">
                <p onClick={this.openFilter} className="titlefirstfilter"> Annonces crées depuis </p>
                <div style={{marginLeft:"20px"}}>
                <Collapse isOpen={this.state.isOpen}>
                    <div>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                Un jour
                            </Label>
                        </FormGroup>
                    </div>
                    <div>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                Deux jours
                            </Label>
                        </FormGroup>
                    </div>
                    <div>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                Une semaine
                            </Label>
                        </FormGroup>
                    </div>
                    <div>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                Deux semaines
                            </Label>
                        </FormGroup>
                    </div>
                    <div>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                Un Mois
                            </Label>
                        </FormGroup>
                    </div> 
                </Collapse>   
                </div>
            </div>
        );
        
    }    
};

export default sidefilter;