import React, { Component, useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";
import { Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast, ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { withRouter } from "react-router-dom";

const CONTAINER = styled.div`
	background: #f7f9fa;
	height: auto;
	width: 90%;
	margin: 5em auto;
	color: snow;
	-webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
	-moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
	box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);

	@media (min-width: 786px) {
		width: 60%;
	}

	label {
		color: #24b9b6;
		font-size: 1.2em;
		font-weight: 400;
	}

	h1 {
		color: #24b9b6;
		padding-top: 0.5em;
	}

	.form-group {
		margin-bottom: 2.5em;
	}

	.error {
		border: 2px solid #f52547;
	}

	.error-message {
		color: #f52547;
		padding: 0.5em 0.2em;
		height: 1em;
		position: absolute;
		font-size: 0.8em;
	}
	// #imageid {
	// 	width: 13rem;
	// 	float: right;
	// 	margin-top: -35px;
	// }
	// #inputNameimage {
	// 	width: 20rem;
	// }
	// #textareaDescription {
	// 	border: 1px solid #ccc;
	// 	border-radius: 4px;
	// 	box-sizing: border-box;
	// }

	#dropzoneStryle{
		width: "100%",
		height: "auto",
		borderWidth: 2,
		borderColor: "rgb(102, 102, 102)",
		borderStyle: "dashed",
		borderRadius: 5,
		color: "black"
	}
`;

const MYFORM = styled(Form)`
	width: 90%;
	text-align: left;
	padding-top: 2em;
	padding-bottom: 2em;

	@media (min-width: 786px) {
		width: 50%;
	}
`;

const BUTTON = styled(Button)`
	background: #1863ab;
	border: none;
	font-size: 1.2em;
	font-weight: 400;

	&:hover {
		background: #1d3461;
	}
`;

// RegEx for phone number validation

// Schema for yup
const validationSchema = Yup.object().shape({
	titre: Yup.string().required("*Veuillez donner un titre à votre annonce"),
	description: Yup.string().required(
		"*Veuillez entrer une description de votre annonce"
	),
	categorie: Yup.string().required("*Veuillez entrer une categorie"),
	ville: Yup.string().required("*Veuillez entrer la ville de votre annonce"),
});

const CreateAnnonce = (props) => {
	const [categorie, setCategorie] = useState([]);
	var imageFormMulter = new FormData();
	var formdata = [];

	const getcategorie = async () => {
		try {
			const response = await axios.get("http://localhost:3001/getallcategorie");
			const categorieData = response.data;
			setCategorie(categorieData);
		} catch (err) {
			console.error(err.message);
		}
	};

	const fileSelectedHandler = (e) => {
		for (var i = 0; i < e.target.files.length; i++) {
			imageFormMulter.append(`attachments`, e.target.files[i]);
			formdata.push(e.target.files[i].name);
		}
	};
	useEffect(() => {
		getcategorie();
	}, []);
	return (
		<CONTAINER>
			<Fragment>
				<h2 style={{ color: "#121212", textAlign: "center" }}>
					{" "}
					Ajouter une annonce{" "}
				</h2>
			</Fragment>
			<Formik
				initialValues={{
					titre: "",
					description: "",
					categorie: "",
					montant: "",
					ville: "",
					photo: [],
				}}
				validationSchema={validationSchema}
				onSubmit={async (values) => {
					return await (props.history.push("/"),
					Promise.all([
						axios
							.post("http://localhost:3001/annonce", {
								titre: values.titre,
								description: values.description,
								montant: values.montant,
								ville: values.ville,
								idcategorie: values.categorie,
								attachment: formdata,
							})
							.then((response) => {
								toast.success(response.data, {
									position: "top-center",
									autoClose: 3000,
									hideProgressBar: false,
									closeOnClick: true,
									pauseOnHover: true,
									draggable: true,
									progress: undefined,
								});
							}),
						(error) => {
							toast.error(error.message, {
								position: "top-center",
								autoClose: 4000,
								hideProgressBar: false,
								closeOnClick: true,
								pauseOnHover: true,
								draggable: true,
								progress: undefined,
							});
						},
						axios.post("http://localhost:3001/upload", imageFormMulter),
					]));
				}}
				// onSubmit={(values,setSubmitting) => {
				// 	// When button submits form and form is in the process of submitting, submit button is disabled
				// 	setSubmitting(true);

				// 	insertannonce();
				// 	// Simulate submitting to database, shows us values submitted, resets form

				// }}
			>
				{/* Callback function containing Formik state and helpers that handle common form actions */}
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
				}) => (
					<MYFORM onSubmit={handleSubmit} className="mx-auto">
						{console.log(values)}
						<Form.Group controlId="formName">
							<Form.Label>Titre :</Form.Label>
							<Form.Control
								type="text"
								/* This name property is used to access the value of the form element via values.nameOfElement */
								name="titre"
								placeholder="Titre de votre annonce"
								/* Set onChange to handleChange */
								onChange={handleChange}
								/* Set onBlur to handleBlur */
								onBlur={handleBlur}
								/* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
								value={values.titre}
								/* Check if the name field (this field) has been touched and if there is an error, if so add the .error class styles defined in the CSS (make the input box red) */
								className={touched.titre && errors.titre ? "error" : null}
							/>
							{/* Applies the proper error message from validateSchema when the user has clicked the element and there is an error, also applies the .error-message CSS class for styling */}
							{touched.titre && errors.titre ? (
								<div className="error-message">{errors.titre}</div>
							) : null}
						</Form.Group>
						<ToastContainer
							position="top-center"
							autoClose={4000}
							hideProgressBar={false}
							newestOnTop={false}
							closeOnClick
							rtl={false}
							pauseOnFocusLoss
							draggable
							pauseOnHover
							transition={Flip}
						/>
						<Form.Group controlId="formEmail">
							<Form.Label>Description :</Form.Label>
							<textarea
								type="text"
								name="description"
								id="textareaDescription"
								placeholder="Description complète de votre annonce"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.description}
								className="form-control"
							/>
							{touched.description && errors.description ? (
								<div className="error-message">{errors.description}</div>
							) : null}
						</Form.Group>
						<Form.Group controlId="formEmail">
							<Form.Label>Catégorie :</Form.Label>
							<Form>
								<Field as="select" name="categorie" className="form-control">
									<option>-- Selectionner une catégorie --</option>
									{categorie.map((categories) => {
										return (
											<option
												key={categories.num_categorie}
												value={categories.num_categorie}
											>
												{categories.lib_categorie}
											</option>
										);
									})}
								</Field>
								{touched.categorie && errors.categorie ? (
									<div className="error-message">{errors.categorie}</div>
								) : null}
							</Form>
							{touched.email && errors.categorie ? (
								<div className="error-message">{errors.categorie}</div>
							) : null}
						</Form.Group>
						<Form.Group controlId="formPhone">
							<Form.Label>Montant :</Form.Label>
							<Form.Control
								type="number"
								name="montant"
								placeholder="Montant de l'annonce"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.montant}
								className={touched.montant && errors.montant ? "error" : null}
							/>
							{touched.montant && errors.montant ? (
								<div className="error-message">{errors.montant}</div>
							) : null}
						</Form.Group>
						<Form.Group controlId="formBlog">
							<Form.Label>Ville :</Form.Label>
							<Form.Control
								type="text"
								name="ville"
								placeholder="ville de votre annonce"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.ville}
								className={touched.ville && errors.ville ? "error" : null}
							/>
							{touched.ville && errors.ville ? (
								<div className="error-message">{errors.ville}</div>
							) : null}
						</Form.Group>
						<Form.Group>
							<label>Photo :</label>
							<Form.Control
								type="file"
								name="photo"
								multiple
								onChange={fileSelectedHandler}
								onBlur={handleBlur}
								accept="image/*"
								className="form-control"
							/>{" "}
						</Form.Group>
						<BUTTON variant="primary" type="submit" disabled={isSubmitting}>
							Ajouter
						</BUTTON>
					</MYFORM>
				)}
			</Formik>
		</CONTAINER>
	);
};

export default withRouter(CreateAnnonce);
