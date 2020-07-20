import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
	render() {
		return (
			<footer>
				<div className="footer">
					<div className="inner-footer">
						<div className="footer-items">
							<h3>Mentions Légales</h3>
							<div className="border">
								<p>
									Conditions générales d'utilisation Règles de diffusion, de
									référencement et de déréférencement Conditions Générales de
									vente Vos droits et obligations
								</p>
							</div>
						</div>

						<div className="footer-items">
							<h3>Liens rapides</h3>
							<div className="border">
								<ul>
									<a href="">
										<li>Accueil</li>
									</a>
									<a href="">
										<li>Déposer une annonce</li>
									</a>
									<a href="">
										<li>Favoris</li>
									</a>
									<a href="">
										<li>Messages</li>
									</a>
								</ul>
							</div>
						</div>

						<div className="footer-items">
							<h3>Contacter-nous</h3>
							<div className="border">
								<ul>
									<a href="">
										<li>
											<i class="fa fa-map-marker" aria-hidden="true"></i> 90000
											Belfort cedex
										</li>
									</a>
									<a href="">
										<li>
											<i class="fa fa-phone" aria-hidden="true"></i> +33 (0) 3
											84 58 30 00
										</li>
									</a>
									<a href="">
										<li>
											<i class="fa fa-envelope" aria-hidden="true"></i>{" "}
											Serviceannonce@utbm.fr
										</li>
									</a>
								</ul>

								<div id="sociaux">
									<a href="">
										<i
											id="facebook"
											className="fab fa-facebook fa-lg"
											aria-hidden="true"
										></i>
									</a>
									<a href="">
										<i
											id="insta"
											className="fab fa-instagram fa-lg"
											aria-hidden="true"
										></i>
									</a>
									<a href="">
										<i
											id="google"
											className="fab fa-google-plus fa-lg"
											aria-hidden="true"
										></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}
export default Footer;
