import React, {Component} from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import '../css/filterContainer.css';


export default class FilterContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row className="filterRow">
                <Col>
                    <div className="filterContainer cafeFilterContainer">
                        <div className="filterContentHolder">
                            <img src="/assets/icons/cafe.svg" alt={"Cafe-Icon"}/>
                            <p>CAFÈS</p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="filterContainer restaurantFilterContainer">
                        <div className="filterContentHolder">
                            <img src="/assets/icons/restaurant.svg" alt={"Restaurant-Icon"}/>
                            <p>ESSEN</p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="filterContainer barFilterContainer">
                        <div className="filterContentHolder">
                            <img src="/assets/icons/baecker.svg" alt={"Kneipe-Icon"}/>
                            <p>BÄCKER</p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="filterContainer cocktailFilterContainer">
                        <div className="filterContentHolder">
                            <img src="/assets/icons/cocktail.svg" alt={"Bar-Icon"}/>
                            <p>BARS</p>
                        </div>
                    </div>
                </Col>
            </Row>
        );
    }
}