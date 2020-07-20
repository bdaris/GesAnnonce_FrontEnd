import React from 'react'
import './Sidebar.css'
import ProfilePicture from './ProfilePicture'

const sideDrawer = props =>{
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses = 'side-drawer open'
    }
    return(
        <div className={drawerClasses}>
            <div>
                <ProfilePicture />
            </div>
            <div>
                <nav >
                    <ul>
                        <li><a href="/">Compte</a></li> 
                        <li><a href="/">Déposer une annonce</a></li>
                        <li><a href="/">Favoris</a></li> 
                        <li><a href="/">Gérer ses annonces</a></li> 
                        <li><a href="/">Message</a></li> 
                        <li><a href="/">About</a></li> 
                        <li><a href="/">Contact</a></li> 
                    </ul>
                </nav>
            </div> 
        </div>
    )
};
// class sideDrawer extends React.Component {
//     showSettings (event) {
//       event.preventDefault();
//     }
//       render () {
//         return (
//             <div>
//                  <Menu left>
//                     <a id="home" className="menu-item" href="/">Home</a>
//                     <a id="about" className="menu-item" href="/about">About</a>
//                     <a id="contact" className="menu-item" href="/contact">Contact</a>
//                     <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
//                 </Menu>
//             </div>
         
//         );
//     }
// }

export default sideDrawer;