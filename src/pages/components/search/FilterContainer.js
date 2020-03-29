import React, {Component} from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import '../../css/search/filterContainer.css';
import Button from "react-bootstrap/Button";


export default class FilterContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedFilter: 'none',
        }
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick(e) {
        this.setState({
            selectedFilter: e.currentTarget.id
        });
        this.props.onChange(e.currentTarget.id);
    };

    render() {

        return (
            <Row className="filterRow">
                <Col>
                    <div onClick={this.handleClick} id="cafe" key="key" className="filterContainer cafeFilterContainer">
                        <div className="filterContentHolder">
                            <img src="/assets/icons/cafe.svg" alt={"Cafe-Icon"}/>
                            <p>CAFÈS</p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div onClick={this.handleClick} id="restaurant"
                         className="filterContainer restaurantFilterContainer">
                        <div className="filterContentHolder">
                            <img src="/assets/icons/restaurant.svg" alt={"Restaurant-Icon"}/>
                            <p>ESSEN</p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div onClick={this.handleClick} id="baecker" className="filterContainer barFilterContainer">
                        <div className="filterContentHolder">
                            <img src="/assets/icons/baecker.svg" alt={"Baecker-Icon"}/>
                            <p>BÄCKER</p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div onClick={this.handleClick} id="bar" className="filterContainer cocktailFilterContainer">
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