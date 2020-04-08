import React, {Component} from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

const AccordionElement = (props) => {
	return (
		<Card>
			<Accordion.Toggle as={Card.Header} eventKey={props.eventKey} onClick={props.onClick}>
				{props.question}
			</Accordion.Toggle>
			<Accordion.Collapse eventKey={props.eventKey}>
				<Card.Body>{props.answer}</Card.Body>
			</Accordion.Collapse>
		</Card>
	)
}

export default class FAQPageRenderer extends Component {

	constructor(props) {
		super(props);
		this.renderAccordionElements = this.renderAccordionElements.bind(this);
	}

	renderAccordionElements() {
		return this.props.faqs.map((faq, item) => {
			return <AccordionElement
				question={faq.question}
				answer={faq.answer}
				eventKey={item}
				onClick={this.props.onClick}
			/>
		})
	}

	render() {
		return (
			<div>
				<div className="box-heading">
					<img className="iconProfile" src={"/assets/icons/search.svg"} alt={"Suche-Icon"}/>
					<h4>Häufig gestellte Fragen</h4>
				</div>
				<div className="faqContent">
					<Accordion>
						{this.renderAccordionElements()}
					</Accordion>
				</div>
			</div>
		)
	}
}
