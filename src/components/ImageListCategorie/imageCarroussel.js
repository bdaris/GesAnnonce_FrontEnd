import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import APi_URl from "../../Api_url";
import { toast } from "react-toastify";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./imageCarroussel.css";

const CarrousselImage = (props) => {
	const [imageAnnonce, setImageAnnonce] = useState([]);

	const getimageAnnonce = async (req, res) => {
		try {
			await axios.get(`${APi_URl}/imageannonce?id=${props.idannonce}`).then(
				(res) => {
					console.log(res.data);
				},
				(error) => {
					toast.error(error.data, {
						position: "top-center",
						autoClose: 4000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
				}
			);
		} catch (error) {
			toast.error(error.data, {
				position: "top-center",
				autoClose: 4000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
	};
	useEffect(() => {
		getimageAnnonce();
	}, []);
	return (
		<div>
			<div style={{ width: "100px" }}>
				<Carousel infiniteLoop autoPlay interval={4000} showStatus={false}>
					{imageAnnonce.map((annonces) => {
						return (
							<div>
								<div className="carousel-cell1" key={annonces.id_annonce}>
									{" "}
									<img
										src={`http://localhost:3001/${annonces.image_annonce}`}
										alt={annonces.image_annonce}
										className="card-img-left"
									/>
								</div>
							</div>
						);
					})}
				</Carousel>
			</div>
		</div>
	);
};
export default CarrousselImage;
