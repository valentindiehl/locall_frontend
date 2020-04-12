import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import SocialLinks from "./SocialLinks";
import FooterLinks from "./FooterLinks";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as PropTypes from "prop-types";

import '../../css/footer/footerContainer.css';


export default class FooterContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		this.setState({
			width: window.innerWidth
		});
		window.addEventListener('resize', () => {
			this.setState({
				width: window.innerWidth
			})
		});
	}

	render() {
		return (
			<Container fluid className={"minimalFooterContainer footerContainer"}>
				<MinimalFooter width={this.state.width}/>
			</Container>
		);
	}
}

class MinimalFooter extends Component {
	render() {
		return (
			<footer>
				<Row className="minimalFooterRow">
					<Col>
						<Row>
							<Col className={"adabayCol"} xs={4}>
								<a href="https://adabay.rocks" target="_blank" rel="noopener noreferrer">
									<img className="adabayLogo" src={"/assets/icons/adabayLogo.png"}
										 alt={"AdabayLogo"}/>
									<p className="adabayHosting">HOSTED BY ADABAY GMBH <br/>
										DIGITAL MEDIA AGENCY</p>
								</a>
							</Col>
							<Col className={"footerInfo"} xs={8}>
								<Container fluid>
									<Row className={"infoRow"}>
										<Col lg={2} className={"copyright"}>
											© {(new Date().getFullYear())} LOCALL
										</Col>
										<Col lg={4}>
											<SocialLinks with={this.props.width}/>
										</Col>
										<Col lg={5}>
											<FooterLinks/>
										</Col>
									</Row>
								</Container>
							</Col>
						</Row>
					</Col>
				</Row>
			</footer>
		);
	}
}

MinimalFooter.propTypes = {width: PropTypes.number};
