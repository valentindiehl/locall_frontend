import React, {Component} from 'react';
import {Container} from "react-bootstrap";

import '../../css/footer/imprintContainer.css';
import FooterContainer from "./FooterContainer";

export default class ImprintContainer extends Component {
    render() {
        return (
            <>
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
                <FooterContainer isLoggedIn={false}/>
            </>
        );
    }
}
