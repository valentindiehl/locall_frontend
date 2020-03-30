import React, {Component} from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import '../../css/search/filterContainer.css';

let selectedStyle = {
    transform: 'scale(1.10)',
};

let defaultStyle;

export default class FilterContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedFilter: 'none',
        }
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick(e) {
        //toggle selection
        if (this.state.selectedFilter === e.currentTarget.id) {
            this.setState({
                selectedFilter: 'none'
            });
            this.props.onChange('none');
        } else {
            this.setState({
                selectedFilter: e.currentTarget.id
            });
            this.props.onChange(e.currentTarget.id);
        }
    };

    render() {
        return (
            <Row className="filterRow">
                <Col>
                    <div style={this.state.selectedFilter === 'cafe' ? selectedStyle : defaultStyle} onClick={this.handleClick} id="cafe" key="key" className="filterContainer cafeFilterContainer">
                        <div className="filterContentHolder">
                            <img src="/assets/icons/cafe.svg" alt={"Cafe-Icon"}/>
                            <p>CAFÈS</p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div style={this.state.selectedFilter === 'restaurant' ? selectedStyle : defaultStyle} onClick={this.handleClick} id="restaurant"
                         className="filterContainer restaurantFilterContainer">
                        <div className="filterContentHolder">
                            <img src="/assets/icons/restaurant.svg" alt={"Restaurant-Icon"}/>
                            <p>ESSEN</p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div style={this.state.selectedFilter === 'baecker' ? selectedStyle : defaultStyle} onClick={this.handleClick} id="baecker" className="filterContainer baeckerFilterContainer">
                        <div className="filterContentHolder">
                            <img src="/assets/icons/baecker.svg" alt={"Baecker-Icon"}/>
                            <p>BÄCKER</p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div style= {this.state.selectedFilter === 'bar' ? selectedStyle : defaultStyle} onClick={this.handleClick} id="bar" className="filterContainer cocktailFilterContainer">
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