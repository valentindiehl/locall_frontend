import React from "react";
import axios from 'axios';
import NavBarContainer from "./components/navbar/NavBarContainer";
import UserSettingsContainer from "./components/settings/UserSettingsContainer";
import FooterContainer from "./components/footer/FooterContainer";
import GastroSettingsContainer from "./components/settings/GastroSettingsContainer";
import ActionContainerLeft from "./components/settings/ActionContainerLeft";
import Col from "react-bootstrap/Col";
import ActionContainerRight from "./components/settings/ActionContainerRight";
import Row from "react-bootstrap/Row";


export default class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navbar: {
                isLoggedIn: true
            },
            isBusiness: false,
            fromProfile: false,
            showBusiness: false
        };
        this.setRedirectToUserProfilForBusiness = this.setRedirectToUserProfilForBusiness.bind(this);
        this.setRedirectToBusinessProfile = this.setRedirectToBusinessProfile.bind(this);
    }

    componentDidMount() {
        axios.get(process.env.REACT_APP_API_URL + '/api/users/profile', {
            withCredentials: true
        })
            .then((res) => {
                if (res.data.business) {
                    this.setState({
                        isBusiness: true,
                        showBusiness: true
                    });
                } else {
                    this.setState({
                        isBusiness: false,
                        showBusiness: false
                    })
                }
            })
            .catch((err) => {
            })
    }

    setRedirectToBusinessProfile() {
        this.setState({
            fromProfile: false,
            showUserProfileForBusiness: false
        })
    }

    setRedirectToUserProfilForBusiness() {
        this.setState({
            fromProfile: true,
            showUserProfileForBusiness: true
        })
    }

    render() {
        let settingsContainer;
        if (this.state.isBusiness && !this.state.showUserProfileForBusiness) {
            settingsContainer = <GastroSettingsContainer token={this.props.match.params.token}/>
        } else if (this.state.showUserProfileForBusiness || !this.state.isBusiness){
            settingsContainer = <UserSettingsContainer token={this.props.match.params.token}/>
        }
        return (
            <>
                <NavBarContainer history={this.props.history}
                                 navbar={this.state.navbar}/>
                <Row>
                    <Col xs="3">
                        <ActionContainerLeft history={this.props.history}
                                             fromProfile={this.state.fromProfile}
                                             setRedirectToBusinessProfile={this.setRedirectToBusinessProfile}/>
                    </Col>
                    {settingsContainer}
                    <Col xs="3">
                        <ActionContainerRight history={this.props.history}
                                              isBusiness={this.state.isBusiness}
                                              fromProfile={this.state.fromProfile}
                                              setRedirectToUserProfilForBusiness={this.setRedirectToUserProfilForBusiness}/>
                    </Col>
                </Row>
                <FooterContainer isLoggedIn={true}/>
            </>
        );
    }
}
