import React, {Component} from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import * as PropTypes from "prop-types";

/**
 * Stateless component for rendering a single FAQ accordion element
 */
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

AccordionElement.propTypes = {
	/** Identifying the accordion element*/
	eventKey: PropTypes.number.isRequired,
	/** Click handler for accordion for when toggle has been clicked */
	onClick: PropTypes.func.isRequired,
	/** The FAQ question */
	question: PropTypes.string.isRequired,
	/** The FAQ answer */
	answer: PropTypes.string.isRequired
}

/**
 * Stateless component responsible for rendering the FAQ page.
 */
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
				key={item}
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

FAQPageRenderer.propTypes = {
	/** Array of FAQ objects, each consisting of a question and an answer */
	faqs: PropTypes.array.isRequired,
	/** Click handler for accordion for when toggle has been clicked */
	onClick: PropTypes.func.isRequired
}
