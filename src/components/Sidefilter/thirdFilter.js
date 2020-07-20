import React, { Component } from "react";
import { Collapse } from "reactstrap";
import "./sidefiltre.css";

class sidefilter extends Component {
	constructor(props) {
		super(props);
		this.state = { isOpen: false };
		this.openFilter = this.openFilter.bind(this);
	}

	openFilter = () => {
		this.setState((state) => ({
			isOpen: !state.isOpen,
		}));
	};
	render() {
		return (
			<div className="thirdfilter">
				<p onClick={this.openFilter} className="titlefirstfilter">
					{" "}
					Prix{" "}
				</p>
				<div>
					<Collapse isOpen={this.state.isOpen}>
						<div className="filterPrix">
							<input
								type="text"
								style={{ width: "80px" }}
								name="minPrix"
								className="minPrix form-control"
								placeholder="min"
							/>{" "}
							<br />
							<input
								type="text"
								style={{ width: "80px" }}
								name="maxPrix"
								className="maxPrix form-control"
								placeholder="max"
							/>
						</div>
					</Collapse>
				</div>
			</div>
		);
	}
}

export default sidefilter;
