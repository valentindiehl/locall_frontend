import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import CompanyHeadingContainer from "./CompanyHeadingContainer";
import CompanyImageContainer from "./CompanyImageContainer";
import CompanyDescriptionContainer from "./CompanyDescriptionContainer";
import CompanyButtonContainer from "./CompanyButtonContainer";
import RightSideActionComponent from "../rightside/RightSideActionComponent";
import {Spinner} from "react-bootstrap";

import '../../css/details/companyContainer.css';


export default class CompanyContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        this.updateBusiness(id);
    }

    updateBusiness(id) {
        fetch(process.env.REACT_APP_API_URL + "/api/businesses/" + id, {
            headers: {
                'content-type': 'application/json'
            },
            credentials: "include"
        }).then(res => {
            return res.json()
        }).then(res => {
            this.setState({data: res});
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let newId = this.props.match.params.id;
        let oldId = prevProps.match.params.id;
        if (newId === oldId) return;
        this.updateBusiness(newId);
    }

    render() {
        return (
            <div className="companyContainer">
                {!!this.state.data ? (
                    <Container>
                        <RightSideActionComponent/>
                        <CompanyHeadingContainer name={this.state.data.name}/>
                        <CompanyImageContainer id={this.state.data._id}/>
                        <CompanyDescriptionContainer message={this.state.data.message}/>
                        <CompanyButtonContainer name={this.state.data.name} paypal={this.state.data.paypal}/>
                    </Container>
                ) : (<Container>
                    <div className="loadingSpinner">
                        <Spinner size="lg" animation="grow"/>
                    </div>
                </Container>)}
            </div>
        );
    }
}
