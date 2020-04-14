import React, {Component} from "react";
import Row from "react-bootstrap/Row";
import StreamContainer from "./stream/DescriptionContainer";
import DonationContainer from "./donation/DescriptionContainer";
import DescriptionContainer from "./description/DescriptionContainer";
import Col from "react-bootstrap/Col";

export default class LeftContainer extends Component {
	render() {
		return (
			<>
				<Row>
					<Col md={12}>
						<StreamContainer/>
					</Col>
				</Row>
				<Row>
					<Col md={6}>
						<DonationContainer/>
					</Col>
					<Col md={6}>
						<DescriptionContainer/>
					</Col>
				</Row>
			</>
		)
	}
}
