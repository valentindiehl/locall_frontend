import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GastroInfoContainer from "./components/gastroprofil/GastroInfoContainer";

import './css/gastroprofil/gastroProfil.css';


export default class GastroProfil extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navbar: {
                isLoggedIn: true
            }
        }

    }


    componentDidMount() {
        const {id} = this.props.match.params;
        fetch(process.env.REACT_APP_API_URL + "/v1/businesses/" + id, {
            headers: {
                'content-type': 'application/json'
            },
            credentials: "include"
        }).then(res => {
            return res.json()
        }).then(res => this.setState({data: res}));
    }


    render() {
        return (
            <>
                <Container className="profilContainer">
                    <h3>Profil bearbeiten</h3>
                    <Row className="firstRow">

                        <Col className="spenden">
                            <GastroInfoContainer/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}
