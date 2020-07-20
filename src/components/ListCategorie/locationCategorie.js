import React, { useEffect, useState } from "react";
import Recherche from "../Recherche/recherche";
import "./locationCategorie.css";
import axios from "axios";
import ImageCarroussel from "../ImageListCategorie/imageCarroussel";
import { Link, BrowserRouter as Route, Switch } from "react-router-dom";
import DetailAnnonceLoc from "../DetailAnnonce/detailAnnonceLocation";

const LocationCategorie = () => {
	const [location, setLocation] = useState([]);

	const getAnnonce = async () => {
		try {
			await axios.get("http://localhost:3001/getlocation").then(
				(response) => {
					console.log(response.data);
					setLocation(response.data);
				},
				(error) => {
					console.err(error.message);
				}
			);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		getAnnonce();
	}, []);
	return (
		<div>
			<div className="rechercheLocation">
				<Recherche />
			</div>
			<div className="cardCategorie">
				{location.map((annonces) => {
					return (
						<div className="container" key={annonces.id_annonce}>
							<div>
								<article className="card card--wide">
									<Link to={`/detail/${annonces.id_annonce}`}>
										<div className="card__media">
											<img
												src={`http://localhost:3001/${annonces.image_annonce[0]}`}
											/>
											{/* <span class="card__category">Photos</span> */}
										</div>
									</Link>
									<div className="card__content">
										<header className="card__header">
											<Link to="/detaillocation">
												<h2 className="card__title">
													{annonces.titre_annonce}
												</h2>
											</Link>
											<div className="card__subtitle">
												{annonces.montant_annonce}€
											</div>
										</header>
										<p className="card__excerpt">{annonces.descript_annonce}</p>
										<footer className="card__meta" role="contentinfo">
											<span className="card__post-date">
												{annonces.datecreate_annonce}
											</span>
										</footer>
									</div>
								</article>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default LocationCategorie;
