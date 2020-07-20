import React, { Component } from "react";
import Fistfilter from "../Sidefilter/firstFiltre";
import Secondfilter from "../Sidefilter/secondFilter";
import Thirdfilter from "../Sidefilter//thirdFilter";
import Recherche from "../Recherche/recherche";
import Categorie from "../Categorie/categorie";
import Footer from "../Footer/footer";
import './mainContainer.css'

class MainContainer extends Component {
	render() {
		return (
			<div>
				<div className="main">
					<div className="rechercheCheck">
						<div className="recherche">
							<Recherche />
						</div>
						<Categorie />
					</div>
				</div>
			</div>
		);
	}
}

export default MainContainer;
