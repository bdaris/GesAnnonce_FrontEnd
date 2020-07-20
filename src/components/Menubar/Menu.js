import React, { Component } from "react"
import './Menu.css'
import SideTogglebutton from '../Sidebar/SideTogglebutton'
import Logo from '../Logo/logo'
import  Backdrop from '../Backdrop/Backdrop'
import SideBarDrawer from '../Sidebar/SideBarDraw'

class toolbar extends Component{
    state ={
        sideBarDrawOpen: false
      }

      drawerToggleClickHandler = () => {
        this.setState((prevState) => {
          return {sideBarDrawOpen: !prevState.sideBarDrawOpen};
        });
      };
      
      backdropClickHandler = () => {
        this.setState({sideBarDrawOpen: false})
       }

    render(){
        let backdrop;

    if(this.state.sideBarDrawOpen){
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
        return(
    <header className="toolbar">
        <nav className="toolbar__navigation">
             <div className="ToggleMenubutton">
                <SideTogglebutton click={this.drawerToggleClickHandler}/>
             </div>
             <SideBarDrawer show={this.state.sideBarDrawOpen}/>
            {backdrop}
             <div >
                 <Logo/>
             </div>
             <div className="spacer" />
             <div className="toolbar__navigation__items">
                 <ul>
                    <li> <a href="/"> Accueil </a> </li>
                    <li> <a href="/connexion"> Connexion </a> </li>                    
                    <li> <a href="/"> Favoris </a> </li>
                    <li> <a href="/createannonce"> Déposer une annonce </a> </li>
                 </ul>
             </div>
        </nav>
    </header>
    )
    }
}


export default toolbar