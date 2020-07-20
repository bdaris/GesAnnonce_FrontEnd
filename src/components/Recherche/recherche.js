import React, { useState } from "react";
import Checkbox from "./checkbox";
import "./recherche.css";
import axios from "axios";
import API_URL from "../../Api_url";

const Recherche = () => {

	const [name, setFile] = useState([]);

	const fileSelectHandler = (e) => {
		setFile(e.target.value);
	};
	console.log(name)
	return (
		<div>
			<div className="control has-icons-left">
				<input
					className="input is-medium"
					type="text"
					placeholder="Recherche"
					onChange={fileSelectHandler}
				/>
				<span className="icon is-small is-left">
					<i className="fas fa-search"></i>
				</span>
			</div>
			<div>
				<Checkbox namesearch={name} />
			</div>
		</div>
	);
};

export default Recherche;
