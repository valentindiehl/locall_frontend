import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import FooterContainer from "./FooterContainer";

import '../../css/footer/imprintContainer.css';

export default class ImprintContainer extends Component {

    constructor() {
        super();
        this.state = {
            navbar: {
                isLoggedIn: false,
                hideLogin: true
            }
        }
    }

    render() {
        return (
            <div className="Fade">
                <Container className="imprintContainer">
                    <h1>Impressum</h1>
                    <Container className="imprintTextContainer">
                        <p>
                            COMPITENCIES GmbH<br/>
                            Steinbockstraße 21<br/>
                            36041 Fulda
                        </p>

                        <p>
                            Telefon: +49 661 25049737<br/>
                            E-Mail: info@compitencies.com
                        </p>

                        <p>
                            Vertreten durch:<br/><br/>
                            Geschäftsführer: Peter Müller (Dipl.-Inf.), Jonas Müller (M.Sc.)
                        </p>
                        <p>
                            Registereintrag:<br/><br/>

                            Eingetragen im Handelsregister.<br/>
                            Registergericht: Fulda<br/>
                            Registernummer: HRB 6999<br/>
                        </p>
                        <p>
                            Umsatzsteuer-ID:<br/><br/>
                            Umsatzsteuer-Identifikationsnummer nach §27a Umsatzsteuergesetz: DE309856765
                        </p>
                    </Container>
                </Container>
            </div>
        );
    }
}
