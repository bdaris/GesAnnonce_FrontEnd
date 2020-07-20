import React from "react";
import "./categorie.css";
import covoiturage from "./Assets/covoiturage.jpg"; // Tell webpack this JS file uses this image
import emploie from "./Assets/emploie.jpg";
import stage from "./Assets/stage.jpg";
import evènement from "./Assets/evènement.jpg";
import location from "./Assets/location.jpg";
import { Link } from "react-router-dom";

const CategorieAnnonce = () => {
	return (
		<div>
			<div
				className="main-carousel"
				data-flickity='{ "cellAlign": "center","wrapAround": true,"freeScroll": true }'
			>
				<div className="cell">
					<Link to="/location">
						{" "}
						<img src={location} alt="location" />
						<h5 id="lien">Location</h5>
					</Link>
				</div>

				<div className="cell">
					<Link to="/covoiturage">
						<img src={covoiturage} alt="covoiturage" />
						<h5 id="lien">Covoiturage</h5>
					</Link>{" "}
				</div>

				<div className="cell">
					<Link to="/offrestage">
						<img src={stage} alt="offre de stage" />
						<h5 id="lien">Offre de stage</h5>
					</Link>
				</div>

				<div className="cell">
					<Link to="/offreemploi">
						<img src={emploie} alt="offre d'emploie" />
						<h5 id="lien">Offre d'emploie</h5>
					</Link>
				</div>

				<div className="cell">
					<Link to={"/evenements"}>
						<img src={evènement} alt="evenement" />
						<h5 id="lien">Evènement</h5>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CategorieAnnonce;
