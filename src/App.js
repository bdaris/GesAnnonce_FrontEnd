import React, { Component } from "react";
import Menu from "./components/Menubar/Menu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LocCategorie from "./components/ListCategorie/locationCategorie";
import Connexion from "./components/Connexion/connexion";
import MainContainer from "./components/MainContainer/mainContainer";
import CreateAnnonce from "./components/CreateAnnonce/createAnnonce";
import DetAnnonceLocation from "./components/DetailAnnonce/detailAnnonceLocation";
import CovoitCategorie from "./components/ListCategorie/covoiturageCategorie";
import OffreStageCategorie from "./components/ListCategorie/offreStageCategorie";
import OffreEmploiCategorie from "./components/ListCategorie/offreEmploiCategorie";
import EvenementCategorie from "./components/ListCategorie/evenementCategorie";
import CreateCompte from "./components/CreerCompte/createCompte"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/footer";

//CSS
import "./App.css";

class App extends Component {
	render() {
		return (
			<div style={{ height: "100%" }} className="parent" id="main">
				<div id="container">
					<div id="main">
						<Router>
							<ToastContainer />
							<div>
								<Menu />
							</div>
							<Switch>
								<Route exact path="/" component={MainContainer} />
								<Route path="/connexion" component={Connexion} />
								<Route path="/location" component={LocCategorie} />
								<Route path="/covoiturage" component={CovoitCategorie} />
								<Route path="/offrestage" component={OffreStageCategorie} />
								<Route path="/offreemploi" component={OffreEmploiCategorie} />
								<Route path="/evenements" component={EvenementCategorie} />
								<Route path="/createannonce" component={CreateAnnonce} />
								<Route path="/detail/:id" component={DetAnnonceLocation} />
								<Route path="/createaccount" component={CreateCompte} />
							</Switch>
						</Router>
					</div>
				</div>
				<div id="footer">
					<Footer />
				</div>
			</div>
		);
	}
}
export default App;
