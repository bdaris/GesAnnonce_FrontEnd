import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./connexion.css";

class Connecter extends Component {
	render() {
		return (
			<div>
				<div className="card mb-3 box">
					<div className=" bg-primary card-header ">
						<h5>Bienvenue sur la page de connexion!</h5>
					</div>
					<div className="card-body">
						<form className="form">
							<div className="card-title">
								<div className="form-row" id="nom">
									<div className="col">
										<label for="exampleInputEmail1">
											<strong>E-mail</strong>
										</label>
										<input
											type="email"
											className="form-control"
											id="exampleInputEmail1"
											aria-describedby="emailHelp"
											placeholder="Email"
										/>
									</div>
								</div>
							</div>
							<div className="card-title">
								<div className="form-row">
									<div className="col">
										<label for="exampleInputPassword1">
											<strong>Mot de passe</strong>
										</label>
										<input
											type="password"
											className="form-control"
											id="inputPassword4"
											placeholder="Mot de passe"
										/>
									</div>
								</div>
							</div>

							<div className="card-title">
								<button
									type="submit"
									className="btn btn-primary btn-lg btn-block"
								>
									Se connecter
								</button>
							</div>
							<div className="card-footer bg-transparent">
								<label>
									{" "}
									Vous n'avez pas de compte?
									<Link to="/createaccount">
										<a>Créer un compte</a>
									</Link>{" "}
								</label>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
export default Connecter;
