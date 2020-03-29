import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import CompanyHeadingContainer from "./CompanyHeadingContainer";
import CompanyImageContainer from "./CompanyImageContainer";
import CompanyDescriptionContainer from "./CompanyDescriptionContainer";
import CompanyButtonContainer from "./CompanyButtonContainer";
import CloseComponent from "../rightside/CloseComponent";

import '../../css/details/companyContainer.css';
import RightSideActionComponent from "../rightside/RightSideActionComponent";


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
            }
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
                        <CompanyHeadingContainer name={this.state.data.name}
                                                 supporter={this.state.data.supporter_counter}
                                                 donations={this.state.data.donation_counter}/>
                        <CompanyImageContainer image={this.state.data.image_url}/>
                        <CompanyDescriptionContainer message={this.state.data.description}/>
                        <CompanyButtonContainer name={this.state.data.name}/>
                    </Container>
                ) : (<Container>Loading</Container>)}
            </div>
        );
    }
}
