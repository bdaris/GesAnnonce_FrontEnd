import React from "react";
import "./checkbox.css";
import axios from "axios";
import API_URL from "../../Api_url";

const checkbox = (props) => {
	const recherche = async (req, res) => {
		return await axios.post(`${API_URL}/recherche`).then(
			(response) => {},
			(error) => {}
		);
	};

	return (
		<div className="container_checkbox">
			<div className="columns">
				<div className="column1">
					<label className="checkbox">
						<input type="checkbox" /> Covoiturage
					</label>
				</div>
				<div className="column2">
					<label className="checkbox">
						<input type="checkbox" /> Location/Colocation
					</label>
				</div>
			</div>
			<div className="columns">
				<div className="column3 ">
					<label className="checkbox">
						<input type="checkbox" /> Offre de stage
					</label>
				</div>
				<div className="column4">
					<label className="checkbox">
						<input type="checkbox" /> Offre d'emploi
					</label>
				</div>
			</div>
			<div>
				{" "}
				<button className="button is-outlined is-medium" id="button">
					Rechercher
				</button>
			</div>
		</div>
	);
};
export default checkbox;
