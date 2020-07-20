import React, { useEffect, useState } from "react";
import axios from "axios";
import APi_URl from "../../Api_url";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./detailAnnonceLocation.css";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";
import ShowMoreText from "react-show-more-text";

const DetailLocation = (props) => {
	const [imageAnnonce, setImageAnnonce] = useState([]);
	const [tab_image, setTab_image] = useState([]);

	const getAnnonceByid = async (req, res) => {
		try {
			await axios
				.get(`${APi_URl}/getannonceid?id=${props.match.params.id}`)
				.then(
					(response) => {
						setImageAnnonce(response.data);
						setTab_image(response.data.image_annonce);
					},
					(error) => {
						console.log(error.message);
					}
				);
		} catch (err) {
			console.log(err.message);
		}
	};
	useEffect(() => {
		getAnnonceByid();
	}, []);

	return (
		<div className="container">
			<div>
				<AwesomeSlider
					cssModule={AwesomeSliderStyles}
					className="awesomeslider"
				>
					{tab_image.map((tabimage) => {
						return (
							<div className="carousselDetail">
								<img src={`http://localhost:3001/${tabimage}`} alt="sbdj" />
							</div>
						);
					})}
				</AwesomeSlider>
			</div>
			<div className="annoncedescript">
				<div>
					<button className="btn btn-primary"> Message </button>
				</div>
				<div>
					<h4>{imageAnnonce.titre_annonce}</h4>
				</div>
				<div className="card__subtitle">{imageAnnonce.montant_annonce}€</div>
				<ShowMoreText
					lines={2}
					more="Afficher plus"
					less="Afficher moins"
					anchorClass=""
					expanded={false}
					width={1090}
				>
					<div>{imageAnnonce.descript_annonce}</div>
				</ShowMoreText>
			</div>
		</div>
	);
};
export default DetailLocation;
