import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {withRouter} from 'react-router-dom';

import '../../css/gastroprofil/gastroProfil.css';


class GastroInfoContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {

            data: {
                image_url: '',
                name: '',
                type: '',
                address: '',
                description: '',
                errorMessage: ''

            },

        };

        console.log(this.props);

    }

    componentDidMount() {
        console.log("Gastro Info Container Did mount");
        const {id} = this.props.match.params;
        fetch(process.env.REACT_APP_API_URL + "/api/businesses/" + id, {
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => {
            return res.json()
        }).then(res => {
            console.log(res);
            this.setState({
                data: res
            });
        });
    }


    handleFormSubmit = () => {

        if (this.state.data.name === '') {
            this.setState({
                errorMessage: 'Bitte gebe den Namen deines Lokals ein!'
            });
        }

        if (this.state.data.address === '') {
            this.setState({
                errorMessage: 'Bitte gebe die Adresse deines Lokals ein!'
            });
        }
        if (this.state.data.city === '') {
            this.setState({
                errorMessage: 'Bitte gebe die Stadt deines Lokals ein!'
            });
        }

        if (this.state.data.description === '') {
            this.setState({
                errorMessage: 'Bitte gebe eine Beschreibung für dein Lokal ein!'
            });
        } else if (this.state.data.description.length > 150) {
            this.setState({
                errorMessage: 'Die Beschreibung für dein Lokal darf nicht mehr als 150 Zeichen besitzen!'
            })
        }


    };

    handleChange = () => {
        console.log("change yay");
    };

    resetChange = () => {
        console.log("no change yay");
    };

    render() {
        return (

            <div className="gastroInfoContainer">
                <div className="headingColumn">
                    <img className="iconProfile" src={"/assets/icons/edit.png"} alt={"Edit-Icon"}/>
                    <h4> Lokalinformationen</h4>
                </div>


                <div className="content">
                    <Form className="profileForm" >
                        <Form.Row>
                            <Form.Group className="lokalFotoChange">
                                <Form.Label className="label">Foto</Form.Label>
                                <div className="lokalFotoReihe">
                                    <img className="lokalFoto" src={this.state.data.image_url} alt={"Lokal Bild"}/>
                                    <Button id="buttonChange" variant="link" type="submit" className="button-transfer">
                                        Ändern
                                    </Button>
                                </div>

                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group className="lokalName">
                                <Form.Label className="label">Name des Lokals</Form.Label>
                                <input
                                    value={this.state.data.name}
                                    type="text"
                                    className="form-control"
                                    name="lokalName"
                                    formNoValidate
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridState" className="inputForm" id="gastroDropdown">
                                <Form.Label className="label">Art</Form.Label>
                                <Form.Control as="select" value={this.state.data.type} onChange={this.handleChange}>
                                    <option value="café">Café</option>
                                    <option value="restaurant">Restaurant</option>
                                    <option value="bar">Bar</option>
                                    <option value="bäckerei">Bäckerei</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row className="rowTwo">
                            <Form.Group className="inputForm">
                                <Form.Label className="label">Adresse</Form.Label>
                                <input
                                    value={this.state.data.address}
                                    type="text"
                                    className="form-control"
                                    name="lokalName"
                                    formNoValidate
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                            <Form.Group className="inputForm">
                                <Form.Label className="label">Stadt</Form.Label>
                                <input
                                    value={this.state.data.address}
                                    type="text"
                                    className="form-control"
                                    name="lokalName"
                                    formNoValidate
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                        </Form.Row>

                        <div className="textFields">
                            <Form.Group className="textForm">
                                <Form.Label className="label">Beschreibung (max. 150 Zeichen)</Form.Label>
                                <Form.Control
                                    value={this.state.data.description}
                                    className="textArea"
                                    as="textarea"
                                    rows="4"
                                    onChange={this.handleChange}
                                />
                            </Form.Group>

                        </div>
                    </Form>

                    <Button id="buttonSave" variant="link" type="submit" className="button-transfer"
                            style={{marginTop: "23px"}} onClick={this.handleFormSubmit}>
                        Speichern
                    </Button>
                    <Button id="buttonExit" variant="link" type="submit" className="button-transfer"
                            style={{marginTop: "23px"}} onClick={this.resetChange}>
                        Abbrechen
                    </Button>
                    <p className='error-message'>{this.state.errorMessage}</p>
                </div>
            </div>
        );
    }
}

export default withRouter(GastroInfoContainer)
