import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';

import '../../css/donation/donationButtons.css';

let stylesSelected = {
    color : 'var(--white)',
    background : 'var(--pale-teal)'
};

let stylesDefault = {
    color : '#5295a5',
    background : 'var(--white-two)'
};

export default class DonationButton extends Component {
    constructor(props) {
        super(props);
        this.state = {hovered: false};
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
    }

    handleMouseOver() {
        this.setState({hovered: true});
    }

    handleMouseOut() {
        this.setState({hovered: false});
    }

    render() {

        //select style
        let buttonStyle;
        if (this.state.hovered || this.props.selected) {
            buttonStyle = stylesSelected;
         }
         else {
             buttonStyle = stylesDefault;
         }

        //select icon
        let iconPath;
        if(this.props.icon === 'money'){
            if(this.state.hovered || this.props.selected){
                iconPath = '/assets/icons/geld.svg';
            } else
                iconPath = '/assets/icons/geld-blue.svg';
        } else {
            if(this.state.hovered || this.props.selected){
                iconPath = '/assets/icons/cafe.svg'
            } else {iconPath = '/assets/icons/cafe-blue.svg'}
        }

   return (
            <div style = {buttonStyle} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} className="donationButtonContainer">
                <img src={iconPath} alt={this.props.description}/>
                <p >{this.props.article}</p>
                <h3 >{this.props.price}</h3>
            </div>
        );
    }
}