import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import FooterContainer from "./FooterContainer";
import NavBarContainer from "../navbar/NavBarContainer";

import '../../css/footer/privacyPolicyContainer.css';


export default class PrivacyPolicyContainer extends Component {

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
                <NavBarContainer navbar={this.state.navbar}/>
                <Container className="privacyPolicyContainer">
                    <h1>Datenschutzerklärung</h1>
                    <h2>Einleitung</h2>
                    <p>Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer
                        personenbezogenen Daten (nachfolgend auch kurz als "Daten“ bezeichnet) wir zu welchen Zwecken
                        und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten
                        Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen als
                        auch insbesondere auf unseren Webseiten, in mobilen Applikationen sowie innerhalb externer
                        Onlinepräsenzen, wie z.B. unserer Social-Media-Profile (nachfolgend zusammenfassend bezeichnet
                        als "Onlineangebot“).</p>
                    <p>Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</p>
                    <p>Stand: 31. März 2020</p><h2>Inhaltsübersicht</h2>
                    <ul className="index">
                        <li><a className="index-link" href="#m14">Einleitung</a></li>
                        <li><a className="index-link" href="#m3">Verantwortlicher</a></li>
                        <li><a className="index-link" href="#mOverview">Übersicht der Verarbeitungen</a></li>
                        <li><a className="index-link" href="#m13">Maßgebliche Rechtsgrundlagen</a></li>
                        <li><a className="index-link" href="#m27">Sicherheitsmaßnahmen</a></li>
                        <li><a className="index-link" href="#m25">Übermittlung und Offenbarung von personenbezogenen
                            Daten</a></li>
                        <li><a className="index-link" href="#m24">Datenverarbeitung in Drittländern</a></li>
                        <li><a className="index-link" href="#m134">Einsatz von Cookies</a></li>
                        <li><a className="index-link" href="#m182">Kontaktaufnahme</a></li>
                        <li><a className="index-link" href="#m735">Videokonferenzen, Onlinemeetings, Webinare und
                            Bildschirm-Sharing</a></li>
                        <li><a className="index-link" href="#m225">Bereitstellung des Onlineangebotes und Webhosting</a>
                        </li>
                        <li><a className="index-link" href="#m263">Webanalyse und Optimierung</a></li>
                        <li><a className="index-link" href="#m136">Präsenzen in sozialen Netzwerken</a></li>
                        <li><a className="index-link" href="#m328">Plugins und eingebettete Funktionen sowie Inhalte</a>
                        </li>
                        <li><a className="index-link" href="#m12">Löschung von Daten</a></li>
                        <li><a className="index-link" href="#m15">Änderung und Aktualisierung der
                            Datenschutzerklärung</a></li>
                        <li><a className="index-link" href="#m10">Rechte der betroffenen Personen</a></li>
                        <li><a className="index-link" href="#m42">Begriffsdefinitionen</a></li>
                    </ul>
                    <h2 id="m3">Verantwortlicher</h2><h2 id="mOverview">Übersicht der Verarbeitungen</h2><p>Die
                    nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung
                    zusammen und verweist auf die betroffenen Personen.</p><h3>Arten der verarbeiteten Daten</h3>
                    <ul>
                        <li>Bestandsdaten (z.B. Namen, Adressen).</li>
                        <li>Inhaltsdaten (z.B. Texteingaben, Fotografien, Videos).</li>
                        <li>Kontaktdaten (z.B. E-Mail, Telefonnummern).</li>
                        <li>Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).</li>
                        <li>Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten).</li>
                    </ul>
                    <h3>Kategorien betroffener Personen</h3>
                    <ul>
                        <li>Kommunikationspartner.</li>
                        <li>Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).</li>
                    </ul>
                    <h3>Zwecke der Verarbeitung</h3>
                    <ul>
                        <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.</li>
                        <li>Besuchsaktionsauswertung.</li>
                        <li>Büro- und Organisationsverfahren.</li>
                        <li>Kontaktanfragen und Kommunikation.</li>
                        <li>Profiling (Erstellen von Nutzerprofilen).</li>
                        <li>Remarketing.</li>
                        <li>Reichweitenmessung (z.B. Zugriffsstatistiken, Erkennung wiederkehrender Besucher).</li>
                        <li>Tracking (z.B. interessens-/verhaltensbezogenes Profiling, Nutzung von Cookies).</li>
                        <li>Vertragliche Leistungen und Service.</li>
                    </ul>
                    <h3 id="m13">Maßgebliche Rechtsgrundlagen</h3><p>Im Folgenden teilen wir die Rechtsgrundlagen der
                    Datenschutzgrundverordnung (DSGVO), auf deren Basis wir die personenbezogenen Daten verarbeiten,
                    mit. Bitte beachten Sie, dass zusätzlich zu den Regelungen der DSGVO die nationalen
                    Datenschutzvorgaben in Ihrem bzw. unserem Wohn- und Sitzland gelten können. Sollten ferner im
                    Einzelfall speziellere Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese in der
                    Datenschutzerklärung mit.</p>
                    <ul>
                        <li><strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO)</strong> - Die betroffene Person hat
                            ihre Einwilligung in die Verarbeitung der sie betreffenden personenbezogenen Daten für einen
                            spezifischen Zweck oder mehrere bestimmte Zwecke gegeben.
                        </li>
                        <li><strong>Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b.
                            DSGVO)</strong> - Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen
                            Vertragspartei die betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen
                            erforderlich, die auf Anfrage der betroffenen Person erfolgen.
                        </li>
                        <li><strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO)</strong> - Die
                            Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines
                            Dritten erforderlich, sofern nicht die Interessen oder Grundrechte und Grundfreiheiten der
                            betroffenen Person, die den Schutz personenbezogener Daten erfordern, überwiegen.
                        </li>
                    </ul>
                    <p><strong>Nationale Datenschutzregelungen in Deutschland</strong>: Zusätzlich zu den
                        Datenschutzregelungen der Datenschutz-Grundverordnung gelten nationale Regelungen zum
                        Datenschutz in Deutschland. Hierzu gehört insbesondere das Gesetz zum Schutz vor Missbrauch
                        personenbezogener Daten bei der Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das BDSG
                        enthält insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht auf Löschung, zum
                        Widerspruchsrecht, zur Verarbeitung besonderer Kategorien personenbezogener Daten, zur
                        Verarbeitung für andere Zwecke und zur Übermittlung sowie automatisierten Entscheidungsfindung
                        im Einzelfall einschließlich Profiling. Des Weiteren regelt es die Datenverarbeitung für Zwecke
                        des Beschäftigungsverhältnisses (§ 26 BDSG), insbesondere im Hinblick auf die Begründung,
                        Durchführung oder Beendigung von Beschäftigungsverhältnissen sowie die Einwilligung von
                        Beschäftigten. Ferner können Landesdatenschutzgesetze der einzelnen Bundesländer zur Anwendung
                        gelangen.</p>
                    <h2 id="m27">Sicherheitsmaßnahmen</h2><p>Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter
                    Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der
                    Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten
                    und des Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete technische
                    und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.</p>
                    <p>Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und
                        Verfügbarkeit von Daten durch Kontrolle des physischen und elektronischen Zugangs zu den Daten
                        als auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der Sicherung der
                        Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine
                        Wahrnehmung von Betroffenenrechten, die Löschung von Daten und Reaktionen auf die Gefährdung der
                        Daten gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei
                        der Entwicklung bzw. Auswahl von Hardware, Software sowie Verfahren entsprechend dem Prinzip des
                        Datenschutzes, durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen.</p>
                    <h2 id="m25">Übermittlung und Offenbarung von personenbezogenen Daten</h2><p>Im Rahmen unserer
                    Verarbeitung von personenbezogenen Daten kommt es vor, dass die Daten an andere Stellen,
                    Unternehmen, rechtlich selbstständige Organisationseinheiten oder Personen übermittelt oder sie
                    ihnen gegenüber offengelegt werden. Zu den Empfängern dieser Daten können z.B. Zahlungsinstitute im
                    Rahmen von Zahlungsvorgängen, mit IT-Aufgaben beauftragte Dienstleister oder Anbieter von Diensten
                    und Inhalten, die in eine Webseite eingebunden werden, gehören. In solchen Fall beachten wir die
                    gesetzlichen Vorgaben und schließen insbesondere entsprechende Verträge bzw. Vereinbarungen, die dem
                    Schutz Ihrer Daten dienen, mit den Empfängern Ihrer Daten ab.</p>
                    <h2 id="m24">Datenverarbeitung in Drittländern</h2><p>Sofern wir Daten in einem Drittland (d.h.,
                    außerhalb der Europäischen Union (EU), des Europäischen Wirtschaftsraums (EWR)) verarbeiten oder die
                    Verarbeitung im Rahmen der Inanspruchnahme von Diensten Dritter oder der Offenlegung bzw.
                    Übermittlung von Daten an andere Personen, Stellen oder Unternehmen stattfindet, erfolgt dies nur im
                    Einklang mit den gesetzlichen Vorgaben. </p>
                    <p>Vorbehaltlich ausdrücklicher Einwilligung oder vertraglich oder gesetzlich erforderlicher
                        Übermittlung verarbeiten oder lassen wir die Daten nur in Drittländern mit einem anerkannten
                        Datenschutzniveau, zu denen die unter dem "Privacy-Shield" zertifizierten US-Verarbeiter
                        gehören, oder auf Grundlage besonderer Garantien, wie z.B. vertraglicher Verpflichtung durch
                        sogenannte Standardschutzklauseln der EU-Kommission, des Vorliegens von Zertifizierungen oder
                        verbindlicher interner Datenschutzvorschriften, verarbeiten (Art. 44 bis 49 DSGVO,
                        Informationsseite der EU-Kommission: <a
                            href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de"
                            target="_blank">https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de</a> ).
                    </p>
                    <h2 id="m134">Einsatz von Cookies</h2><p>Cookies sind Textdateien, die Daten von besuchten Websites
                    oder Domains enthalten und von einem Browser auf dem Computer des Benutzers gespeichert werden. Ein
                    Cookie dient in erster Linie dazu, die Informationen über einen Benutzer während oder nach seinem
                    Besuch innerhalb eines Onlineangebotes zu speichern. Zu den gespeicherten Angaben können z.B. die
                    Spracheinstellungen auf einer Webseite, der Loginstatus, ein Warenkorb oder die Stelle, an der ein
                    Video geschaut wurde, gehören. Zu dem Begriff der Cookies zählen wir ferner andere Technologien, die
                    die gleichen Funktionen wie Cookies erfüllen (z.B., wenn Angaben der Nutzer anhand pseudonymer
                    Onlinekennzeichnungen gespeichert werden, auch als "Nutzer-IDs" bezeichnet)</p>
                    <p><strong>Die folgenden Cookie-Typen und Funktionen werden unterschieden:</strong></p>
                    <ul>
                        <li><strong>Temporäre Cookies (auch: Session- oder Sitzungs-Cookies):</strong> Temporäre Cookies
                            werden spätestens gelöscht, nachdem ein Nutzer ein Online-Angebot verlassen und seinen
                            Browser geschlossen hat.
                        </li>
                        <li><strong>Permanente Cookies:</strong> Permanente Cookies bleiben auch nach dem Schließen des
                            Browsers gespeichert. So kann beispielsweise der Login-Status gespeichert oder bevorzugte
                            Inhalte direkt angezeigt werden, wenn der Nutzer eine Website erneut besucht. Ebenso können
                            die Interessen von Nutzern, die zur Reichweitenmessung oder zu Marketingzwecken verwendet
                            werden, in einem solchen Cookie gespeichert werden.
                        </li>
                        <li><strong>First-Party-Cookies:</strong> First-Party-Cookies werden von uns selbst gesetzt.
                        </li>
                        <li><strong>Third-Party-Cookies (auch: Drittanbieter-Cookies)</strong>: Drittanbieter-Cookies
                            werden hauptsächlich von Werbetreibenden (sog. Dritten) verwendet, um Benutzerinformationen
                            zu verarbeiten.
                        </li>
                        <li><strong>Notwendige (auch: essentielle oder unbedingt erforderliche)
                            Cookies:</strong> Cookies können zum einen für den Betrieb einer Webseite unbedingt
                            erforderlich sein (z.B. um Logins oder andere Nutzereingaben zu speichern oder aus Gründen
                            der Sicherheit).
                        </li>
                        <li><strong>Statistik-, Marketing- und Personalisierungs-Cookies</strong>: Ferner werden Cookies
                            im Regelfall auch im Rahmen der Reichweitenmessung eingesetzt sowie dann, wenn die
                            Interessen eines Nutzers oder sein Verhalten (z.B. Betrachten bestimmter Inhalte, Nutzen von
                            Funktionen etc.) auf einzelnen Webseiten in einem Nutzerprofil gespeichert werden. Solche
                            Profile dienen dazu, den Nutzern z.B. Inhalte anzuzeigen, die ihren potentiellen Interessen
                            entsprechen. Dieses Verfahren wird auch als "Tracking", d.h., Nachverfolgung der
                            potentiellen Interessen der Nutzer bezeichnet. . Soweit wir Cookies oder
                            "Tracking"-Technologien einsetzen, informieren wir Sie gesondert in unserer
                            Datenschutzerklärung oder im Rahmen der Einholung einer Einwilligung.
                        </li>
                    </ul>
                    <p><strong>Hinweise zu Rechtsgrundlagen: </strong> Auf welcher Rechtsgrundlage wir Ihre
                        personenbezogenen Daten mit Hilfe von Cookies verarbeiten, hängt davon ab, ob wir Sie um eine
                        Einwilligung bitten. Falls dies zutrifft und Sie in die Nutzung von Cookies einwilligen, ist die
                        Rechtsgrundlage der Verarbeitung Ihrer Daten die erklärte Einwilligung. Andernfalls werden die
                        mithilfe von Cookies verarbeiteten Daten auf Grundlage unserer berechtigten Interessen (z.B. an
                        einem betriebswirtschaftlichen Betrieb unseres Onlineangebotes und dessen Verbesserung)
                        verarbeitet oder, wenn der Einsatz von Cookies erforderlich ist, um unsere vertraglichen
                        Verpflichtungen zu erfüllen.</p>
                    <p><strong>Allgemeine Hinweise zum Widerruf und Widerspruch (Opt-Out): </strong> Abhängig davon, ob
                        die Verarbeitung auf Grundlage einer Einwilligung oder gesetzlichen Erlaubnis erfolgt, haben Sie
                        jederzeit die Möglichkeit, eine erteilte Einwilligung zu widerrufen oder der Verarbeitung Ihrer
                        Daten durch Cookie-Technologien zu widersprechen (zusammenfassend als "Opt-Out" bezeichnet). Sie
                        können Ihren Widerspruch zunächst mittels der Einstellungen Ihres Browsers erklären, z.B., indem
                        Sie die Nutzung von Cookies deaktivieren (wobei hierdurch auch die Funktionsfähigkeit unseres
                        Onlineangebotes eingeschränkt werden kann). Ein Widerspruch gegen den Einsatz von Cookies zu
                        Zwecken des Onlinemarketings kann auch mittels einer Vielzahl von Diensten, vor allem im Fall
                        des Trackings, über die Webseiten <a href="https://optout.aboutads.info"
                                                             target="_blank">https://optout.aboutads.info</a> und <a
                            href="https://www.youronlinechoices.com/"
                            target="_blank">https://www.youronlinechoices.com/</a> erklärt werden. Daneben können Sie
                        weitere Widerspruchshinweise im Rahmen der Angaben zu den eingesetzten Dienstleistern und
                        Cookies erhalten.</p>
                    <p><strong>Verarbeitung von Cookie-Daten auf Grundlage einer Einwilligung</strong>: Bevor wir Daten
                        im Rahmen der Nutzung von Cookies verarbeiten oder verarbeiten lassen, bitten wir die Nutzer um
                        eine jederzeit widerrufbare Einwilligung. Bevor die Einwilligung nicht ausgesprochen wurde,
                        werden allenfalls Cookies eingesetzt, die für den Betrieb unseres Onlineangebotes erforderlich
                        sind. Deren Einsatz erfolgt auf der Grundlage unseres Interesses und des Interesses der Nutzer
                        an der erwarteten Funktionsfähigkeit unseres Onlineangebotes.</p>
                    <ul className="m-elements">
                        <li><strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z.B. besuchte Webseiten, Interesse
                            an Inhalten, Zugriffszeiten), Meta-/Kommunikationsdaten (z.B. Geräte-Informationen,
                            IP-Adressen).
                        </li>
                        <li><strong>Betroffene Personen:</strong> Nutzer (z.B. Webseitenbesucher, Nutzer von
                            Onlinediensten).
                        </li>
                        <li><strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO),
                            Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).
                        </li>
                    </ul>
                    <h2 id="m182">Kontaktaufnahme</h2><p>Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular,
                    E-Mail, Telefon oder via soziale Medien) werden die Angaben der anfragenden Personen verarbeitet,
                    soweit dies zur Beantwortung der Kontaktanfragen und etwaiger angefragter Maßnahmen erforderlich
                    ist.</p>
                    <p>Die Beantwortung der Kontaktanfragen im Rahmen von vertraglichen oder vorvertraglichen
                        Beziehungen erfolgt zur Erfüllung unserer vertraglichen Pflichten oder zur Beantwortung von
                        (vor)vertraglichen Anfragen und im Übrigen auf Grundlage der berechtigten Interessen an der
                        Beantwortung der Anfragen.</p>
                    <ul className="m-elements">
                        <li><strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.B. Namen, Adressen), Kontaktdaten
                            (z.B. E-Mail, Telefonnummern), Inhaltsdaten (z.B. Texteingaben, Fotografien, Videos).
                        </li>
                        <li><strong>Betroffene Personen:</strong> Kommunikationspartner.</li>
                        <li><strong>Zwecke der Verarbeitung:</strong> Kontaktanfragen und Kommunikation.</li>
                        <li><strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen (Art. 6
                            Abs. 1 S. 1 lit. b. DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).
                        </li>
                    </ul>
                    <h2 id="m225">Bereitstellung des Onlineangebotes und Webhosting</h2><p>Um unser Onlineangebot sicher
                    und effizient bereitstellen zu können, nehmen wir die Leistungen von einem oder mehreren
                    Webhosting-Anbietern in Anspruch, von deren Servern (bzw. von ihnen verwalteten Servern) das
                    Onlineangebot abgerufen werden kann. Zu diesen Zwecken können wir Infrastruktur- und
                    Plattformdienstleistungen, Rechenkapazität, Speicherplatz und Datenbankdienste sowie
                    Sicherheitsleistungen und technische Wartungsleistungen in Anspruch nehmen.</p>
                    <p>Zu den im Rahmen der Bereitstellung des Hostingangebotes verarbeiteten Daten können alle die
                        Nutzer unseres Onlineangebotes betreffenden Angaben gehören, die im Rahmen der Nutzung und der
                        Kommunikation anfallen. Hierzu gehören regelmäßig die IP-Adresse, die notwendig ist, um die
                        Inhalte von Onlineangeboten an Browser ausliefern zu können, und alle innerhalb unseres
                        Onlineangebotes oder von Webseiten getätigten Eingaben.</p>
                    <p><strong>Erhebung von Zugriffsdaten und Logfiles</strong>: Wir selbst (bzw. unser
                        Webhostinganbieter) erheben Daten zu jedem Zugriff auf den Server (sogenannte Serverlogfiles).
                        Zu den Serverlogfiles können die Adresse und Name der abgerufenen Webseiten und Dateien, Datum
                        und Uhrzeit des Abrufs, übertragene Datenmengen, Meldung über erfolgreichen Abruf, Browsertyp
                        nebst Version, das Betriebssystem des Nutzers, Referrer URL (die zuvor besuchte Seite) und im
                        Regelfall IP-Adressen und der anfragende Provider gehören.</p>
                    <p>Die Serverlogfiles können zum einen zu Zwecken der Sicherheit eingesetzt werden, z.B., um eine
                        Überlastung der Server zu vermeiden (insbesondere im Fall von missbräuchlichen Angriffen,
                        sogenannten DDoS-Attacken) und zum anderen, um die Auslastung der Server und ihre Stabilität
                        sicherzustellen.</p>
                    <ul className="m-elements">
                        <li><strong>Verarbeitete Datenarten:</strong> Inhaltsdaten (z.B. Texteingaben, Fotografien,
                            Videos), Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten),
                            Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).
                        </li>
                        <li><strong>Betroffene Personen:</strong> Nutzer (z.B. Webseitenbesucher, Nutzer von
                            Onlinediensten).
                        </li>
                        <li><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f.
                            DSGVO).
                        </li>
                    </ul>
                    <h2 id="m263">Webanalyse und Optimierung</h2><p>Die Webanalyse (auch als "Reichweitenmessung"
                    bezeichnet) dient der Auswertung der Besucherströme unseres Onlineangebotes und kann Verhalten,
                    Interessen oder demographische Informationen zu den Besuchern, wie z.B. das Alter oder das
                    Geschlecht, als pseudonyme Werte umfassen. Mit Hilfe der Reichweitenanalyse können wir z.B.
                    erkennen, zu welcher Zeit unser Onlineangebot oder dessen Funktionen oder Inhalte am häufigsten
                    genutzt werden oder zur Wiederverwendung einladen. Ebenso können wir nachvollziehen, welche Bereiche
                    der Optimierung bedürfen. </p>
                    <p>Neben der Webanalyse können wir auch Testverfahren einsetzen, um z.B. unterschiedliche Versionen
                        unseres Onlineangebotes oder seiner Bestandteile zu testen und optimieren.</p>
                    <p>Zu diesen Zwecken können sogenannte Nutzerprofile angelegt und in einer Datei (sogenannte
                        "Cookie") gespeichert oder ähnliche Verfahren mit dem gleichen Zweck genutzt werden. Zu diesen
                        Angaben können z.B. betrachtete Inhalte, besuchte Webseiten und dort genutzte Elemente und
                        technische Angaben, wie der verwendete Browser, das verwendete Computersystem sowie Angaben zu
                        Nutzungszeiten gehören. Sofern Nutzer in die Erhebung ihrer Standortdaten eingewilligt haben,
                        können je nach Anbieter auch diese verarbeitet werden.</p>
                    <p>Es werden ebenfalls die IP-Adressen der Nutzer gespeichert. Jedoch nutzen wir ein
                        IP-Masking-Verfahren (d.h., Pseudonymisierung durch Kürzung der IP-Adresse) zum Schutz der
                        Nutzer. Generell werden die im Rahmen von Webanalyse, A/B-Testings und Optimierung keine
                        Klardaten der Nutzer (wie z.B. E-Mail-Adressen oder Namen) gespeichert, sondern Pseudonyme.
                        D.h., wir als auch die Anbieter der eingesetzten Software kennen nicht die tatsächliche
                        Identität der Nutzer, sondern nur den für Zwecke der jeweiligen Verfahren in deren Profilen
                        gespeicherten Angaben.</p>
                    <p><strong>Hinweise zu Rechtsgrundlagen:</strong> Sofern wir die Nutzer um deren Einwilligung in den
                        Einsatz der Drittanbieter bitten, ist die Rechtsgrundlage der Verarbeitung von Daten die
                        Einwilligung. Ansonsten werden die Daten der Nutzer auf Grundlage unserer berechtigten
                        Interessen (d.h. Interesse an effizienten, wirtschaftlichen und empfängerfreundlichen
                        Leistungen) verarbeitet. In diesem Zusammenhang möchten wir Sie auch auf die Informationen zur
                        Verwendung von Cookies in dieser Datenschutzerklärung hinweisen.</p>
                    <ul className="m-elements">
                        <li><strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z.B. besuchte Webseiten, Interesse
                            an Inhalten, Zugriffszeiten), Meta-/Kommunikationsdaten (z.B. Geräte-Informationen,
                            IP-Adressen).
                        </li>
                        <li><strong>Betroffene Personen:</strong> Nutzer (z.B. Webseitenbesucher, Nutzer von
                            Onlinediensten).
                        </li>
                        <li><strong>Zwecke der Verarbeitung:</strong> Reichweitenmessung (z.B. Zugriffsstatistiken,
                            Erkennung wiederkehrender Besucher), Tracking (z.B. interessens-/verhaltensbezogenes
                            Profiling, Nutzung von Cookies), Besuchsaktionsauswertung, Profiling (Erstellen von
                            Nutzerprofilen).
                        </li>
                        <li><strong>Sicherheitsmaßnahmen:</strong> IP-Masking (Pseudonymisierung der IP-Adresse).</li>
                        <li><strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO),
                            Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).
                        </li>
                    </ul>
                    <p><strong>Eingesetzte Dienste und Diensteanbieter:</strong></p>
                    <ul className="m-elements">
                        <li><strong>Matomo:</strong> Die durch das Cookie erzeugte Informationen über Ihre Benutzung
                            dieser Webseite werden nur auf unserem Server gespeichert und nicht an Dritte weitergegeben;
                            Dienstanbieter: Webanalyse/ Reichweitenmessung im Selbsthosting; Löschung von Daten: Die
                            Cookies haben eine Speicherdauer von maximal 13 Monaten; Widerspruchsmöglichkeit (Opt-Out):
                            Nutzer können der Verarbeitung ihrer Daten durch Matomo jederzeit mit Wirkung für die
                            Zukunft widersprechen. In diesem Fall wird in ihrem Browser ein sog. Opt-Out-Cookie
                            abgelegt, was zur Folge hat, dass Matomo keinerlei Sitzungsdaten mehr erhebt. Wenn Nutzer
                            ihre Cookies löschen, so hat dies jedoch zur Folge, dass auch das Opt-Out-Cookie gelöscht
                            wird und daher von den Nutzern erneut aktiviert werden muss..
                        </li>
                    </ul>
                    <h2 id="m136">Präsenzen in sozialen Netzwerken</h2><p>Wir unterhalten Onlinepräsenzen innerhalb
                    sozialer Netzwerke und verarbeiten in diesem Rahmen Daten der Nutzer, um mit den dort aktiven
                    Nutzern zu kommunizieren oder um Informationen über uns anzubieten.</p>
                    <p>Wir weisen darauf hin, dass dabei Daten der Nutzer außerhalb des Raumes der Europäischen Union
                        verarbeitet werden können. Hierdurch können sich für die Nutzer Risiken ergeben, weil so z.B.
                        die Durchsetzung der Rechte der Nutzer erschwert werden könnte. Im Hinblick auf US-Anbieter, die
                        unter dem Privacy-Shield zertifiziert sind oder vergleichbare Garantien eines sicheren
                        Datenschutzniveaus bieten, weisen wir darauf hin, dass sie sich damit verpflichten, die
                        Datenschutzstandards der EU einzuhalten.</p>
                    <p>Ferner werden die Daten der Nutzer innerhalb sozialer Netzwerke im Regelfall für Marktforschungs-
                        und Werbezwecke verarbeitet. So können z.B. anhand des Nutzungsverhaltens und sich daraus
                        ergebender Interessen der Nutzer Nutzungsprofile erstellt werden. Die Nutzungsprofile können
                        wiederum verwendet werden, um z.B. Werbeanzeigen innerhalb und außerhalb der Netzwerke zu
                        schalten, die mutmaßlich den Interessen der Nutzer entsprechen. Zu diesen Zwecken werden im
                        Regelfall Cookies auf den Rechnern der Nutzer gespeichert, in denen das Nutzungsverhalten und
                        die Interessen der Nutzer gespeichert werden. Ferner können in den Nutzungsprofilen auch Daten
                        unabhängig der von den Nutzern verwendeten Geräte gespeichert werden (insbesondere, wenn die
                        Nutzer Mitglieder der jeweiligen Plattformen sind und bei diesen eingeloggt sind).</p>
                    <p>Für eine detaillierte Darstellung der jeweiligen Verarbeitungsformen und der
                        Widerspruchsmöglichkeiten (Opt-Out) verweisen wir auf die Datenschutzerklärungen und Angaben der
                        Betreiber der jeweiligen Netzwerke.</p>
                    <p>Auch im Fall von Auskunftsanfragen und der Geltendmachung von Betroffenenrechten weisen wir
                        darauf hin, dass diese am effektivsten bei den Anbietern geltend gemacht werden können. Nur die
                        Anbieter haben jeweils Zugriff auf die Daten der Nutzer und können direkt entsprechende
                        Maßnahmen ergreifen und Auskünfte geben. Sollten Sie dennoch Hilfe benötigen, dann können Sie
                        sich an uns wenden.</p>
                    <ul className="m-elements">
                        <li><strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.B. Namen, Adressen), Kontaktdaten
                            (z.B. E-Mail, Telefonnummern), Inhaltsdaten (z.B. Texteingaben, Fotografien, Videos),
                            Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten),
                            Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).
                        </li>
                        <li><strong>Betroffene Personen:</strong> Nutzer (z.B. Webseitenbesucher, Nutzer von
                            Onlinediensten).
                        </li>
                        <li><strong>Zwecke der Verarbeitung:</strong> Kontaktanfragen und Kommunikation, Tracking (z.B.
                            interessens-/verhaltensbezogenes Profiling, Nutzung von Cookies), Remarketing,
                            Reichweitenmessung (z.B. Zugriffsstatistiken, Erkennung wiederkehrender Besucher).
                        </li>
                        <li><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f.
                            DSGVO).
                        </li>
                    </ul>
                    <p><strong>Eingesetzte Dienste und Diensteanbieter:</strong></p>
                    <ul className="m-elements">
                        <li><strong>Instagram :</strong> Soziales Netzwerk; Dienstanbieter: Instagram Inc., 1601 Willow
                            Road, Menlo Park, CA, 94025, USA; Website: <a href="https://www.instagram.com"
                                                                          target="_blank">https://www.instagram.com</a>;
                            Datenschutzerklärung: <a href="https://instagram.com/about/legal/privacy"
                                                     target="_blank">https://instagram.com/about/legal/privacy</a>.
                        </li>
                        <li><strong>Facebook:</strong> Soziales Netzwerk; Dienstanbieter: Facebook Ireland Ltd., 4 Grand
                            Canal Square, Grand Canal Harbour, Dublin 2, Irland, Mutterunternehmen: Facebook, 1 Hacker
                            Way, Menlo Park, CA 94025, USA; Website: <a href="https://www.facebook.com"
                                                                        target="_blank">https://www.facebook.com</a>;
                            Datenschutzerklärung: <a href="https://www.facebook.com/about/privacy"
                                                     target="_blank">https://www.facebook.com/about/privacy</a>; Privacy
                            Shield (Gewährleistung Datenschutzniveau bei Verarbeitung von Daten in den USA): <a
                                href="https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active"
                                target="_blank">https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active</a>;
                            Widerspruchsmöglichkeit (Opt-Out): Einstellungen für Werbeanzeigen: <a
                                href="https://www.facebook.com/settings?tab=ads"
                                target="_blank">https://www.facebook.com/settings?tab=ads</a>; Zusätzliche Hinweise zum
                            Datenschutz: Vereinbarung über gemeinsame Verarbeitung personenbezogener Daten auf
                            Facebook-Seiten: <a href="https://www.facebook.com/legal/terms/page_controller_addendum"
                                                target="_blank">https://www.facebook.com/legal/terms/page_controller_addendum</a>,
                            Datenschutzhinweise für Facebook-Seiten: <a
                                href="https://www.facebook.com/legal/terms/information_about_page_insights_data"
                                target="_blank">https://www.facebook.com/legal/terms/information_about_page_insights_data</a>.
                        </li>
                        <li><strong>Twitter:</strong> Soziales Netzwerk; Dienstanbieter: Twitter Inc., 1355 Market
                            Street, Suite 900, San Francisco, CA 94103, USA; Datenschutzerklärung: <a
                                href="https://twitter.com/de/privacy" target="_blank">https://twitter.com/de/privacy</a>,
                            (Einstellungen) <a href="https://twitter.com/personalization"
                                               target="_blank">https://twitter.com/personalization</a>; Privacy Shield
                            (Gewährleistung Datenschutzniveau bei Verarbeitung von Daten in den USA): <a
                                href="https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&status=Active"
                                target="_blank">https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&status=Active</a>.
                        </li>
                        <li><strong>YouTube:</strong> Soziales Netzwerk; Dienstanbieter: Google Ireland Limited, Gordon
                            House, Barrow Street, Dublin 4, Irland, Mutterunternehmen: Google LLC, 1600 Amphitheatre
                            Parkway, Mountain View, CA 94043, USA; Datenschutzerklärung: <a
                                href="https://policies.google.com/privacy"
                                target="_blank">https://policies.google.com/privacy</a>; Privacy Shield (Gewährleistung
                            Datenschutzniveau bei Verarbeitung von Daten in den USA): <a
                                href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active"
                                target="_blank">https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active</a>;
                            Widerspruchsmöglichkeit (Opt-Out): <a href="https://adssettings.google.com/authenticated"
                                                                  target="_blank">https://adssettings.google.com/authenticated</a>.
                        </li>
                    </ul>
                    <h2 id="m328">Plugins und eingebettete Funktionen sowie Inhalte</h2><p>Wir binden in unser
                    Onlineangebot Funktions- und Inhaltselemente ein, die von den Servern ihrer jeweiligen Anbieter
                    (nachfolgend bezeichnet als "Drittanbieter”) bezogen werden. Dabei kann es sich zum Beispiel um
                    Grafiken, Videos oder Social-Media-Schaltflächen sowie Beiträge handeln (nachfolgend einheitlich
                    bezeichnet als "Inhalte”).</p>
                    <p>Die Einbindung setzt immer voraus, dass die Drittanbieter dieser Inhalte die IP-Adresse der
                        Nutzer verarbeiten, da sie ohne die IP-Adresse die Inhalte nicht an deren Browser senden
                        könnten. Die IP-Adresse ist damit für die Darstellung dieser Inhalte oder Funktionen
                        erforderlich. Wir bemühen uns, nur solche Inhalte zu verwenden, deren jeweilige Anbieter die
                        IP-Adresse lediglich zur Auslieferung der Inhalte verwenden. Drittanbieter können ferner
                        sogenannte Pixel-Tags (unsichtbare Grafiken, auch als "Web Beacons" bezeichnet) für statistische
                        oder Marketingzwecke verwenden. Durch die "Pixel-Tags" können Informationen, wie der
                        Besucherverkehr auf den Seiten dieser Webseite, ausgewertet werden. Die pseudonymen
                        Informationen können ferner in Cookies auf dem Gerät der Nutzer gespeichert werden und unter
                        anderem technische Informationen zum Browser und zum Betriebssystem, zu verweisenden Webseiten,
                        zur Besuchszeit sowie weitere Angaben zur Nutzung unseres Onlineangebotes enthalten als auch mit
                        solchen Informationen aus anderen Quellen verbunden werden.</p>
                    <p><strong>Hinweise zu Rechtsgrundlagen:</strong> Sofern wir die Nutzer um deren Einwilligung in den
                        Einsatz der Drittanbieter bitten, ist die Rechtsgrundlage der Verarbeitung von Daten die
                        Einwilligung. Ansonsten werden die Daten der Nutzer auf Grundlage unserer berechtigten
                        Interessen (d.h. Interesse an effizienten, wirtschaftlichen und empfängerfreundlichen
                        Leistungen) verarbeitet. In diesem Zusammenhang möchten wir Sie auch auf die Informationen zur
                        Verwendung von Cookies in dieser Datenschutzerklärung hinweisen.</p>
                    <p><strong>Einbindung von Drittsoftware, Skripten oder Frameworks (z. B. jQuery)</strong>: Wir
                        binden in unser Onlineangebot Software ein, die wir von Servern anderer Anbieter abrufen (z.B.
                        Funktions-Bibliotheken, die wir zwecks Darstellung oder Nutzerfreundlichkeit unseres
                        Onlineangebotes verwenden). Hierbei erheben die jeweiligen Anbieter die IP-Adresse der Nutzer
                        und können diese zu Zwecken der Übermittlung der Software an den Browser der Nutzer sowie zu
                        Zwecken der Sicherheit, als auch zur Auswertung und Optimierung ihres Angebotes verarbeiten.</p>
                    <ul className="m-elements">
                        <li><strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z.B. besuchte Webseiten, Interesse
                            an Inhalten, Zugriffszeiten), Meta-/Kommunikationsdaten (z.B. Geräte-Informationen,
                            IP-Adressen).
                        </li>
                        <li><strong>Betroffene Personen:</strong> Nutzer (z.B. Webseitenbesucher, Nutzer von
                            Onlinediensten).
                        </li>
                        <li><strong>Zwecke der Verarbeitung:</strong> Bereitstellung unseres Onlineangebotes und
                            Nutzerfreundlichkeit, Vertragliche Leistungen und Service.
                        </li>
                        <li><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f.
                            DSGVO).
                        </li>
                    </ul>
                    <p><strong>Eingesetzte Dienste und Diensteanbieter:</strong></p>
                    <ul className="m-elements">
                        <li><strong>Google Fonts:</strong> Wir binden die Schriftarten ("Google Fonts") des Anbieters
                            Google ein, wobei die Daten der Nutzer allein zu Zwecken der Darstellung der Schriftarten im
                            Browser der Nutzer verwendet werden. Die Einbindung erfolgt auf Grundlage unserer
                            berechtigten Interessen an einer technisch sicheren, wartungsfreien und effizienten Nutzung
                            von Schriftarten, deren einheitlicher Darstellung sowie unter Berücksichtigung möglicher
                            lizenzrechtlicher Restriktionen für deren Einbindung. Dienstanbieter: Google Ireland
                            Limited, Gordon House, Barrow Street, Dublin 4, Irland, Mutterunternehmen: Google LLC, 1600
                            Amphitheatre Parkway, Mountain View, CA 94043, USA; Website: <a
                                href="https://fonts.google.com/" target="_blank">https://fonts.google.com/</a>;
                            Datenschutzerklärung: <a href="https://policies.google.com/privacy"
                                                     target="_blank">https://policies.google.com/privacy</a>; Privacy
                            Shield (Gewährleistung Datenschutzniveau bei Verarbeitung von Daten in den USA): <a
                                href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active"
                                target="_blank">https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active</a>.
                        </li>
                        <li><strong>OpenStreetMap:</strong> Wir binden die Landkarten des Dienstes \"OpenStreetMap\"
                            ein, die auf Grundlage der Open Data Commons Open Database Lizenz (ODbL) durch die
                            OpenStreetMap Foundation (OSMF) angeboten werden. Die Daten der Nutzer werden durch
                            OpenStreetMap ausschließlich zu Zwecken der Darstellung der Kartenfunktionen und zur
                            Zwischenspeicherung der gewählten Einstellungen verwendet. Zu diesen Daten können
                            insbesondere IP-Adressen und Standortdaten der Nutzer gehören, die jedoch nicht ohne deren
                            Einwilligung (im Regelfall im Rahmen der Einstellungen ihrer Mobilgeräte vollzogen) erhoben
                            werden. Dienstanbieter: OpenStreetMap Foundation (OSMF); Website: <a
                                href="https://www.openstreetmap.de" target="_blank">https://www.openstreetmap.de</a>;
                            Datenschutzerklärung: <a href="https://wiki.openstreetmap.org/wiki/Privacy_Policy"
                                                     target="_blank">https://wiki.openstreetmap.org/wiki/Privacy_Policy</a>.
                        </li>
                        <li><strong>Mapbox:</strong> Die Karten des Dienstes "OpenStreetMap" werden durch den Dienst Mapbox
                        eingebunden. Mapbox dient zur Visualisierung interaktiver Karten. Durch die Nutzung von Mapbox
                        können Informationen einschließlich Ihrer IP-Adresse an Mapbox in den USA übertragen werden. Die Datenschutzerklärung
                        von Mapbox kann unter <a href="https://www.mapbox.com/privacy" target="_blank">https://www.mapbox.com/privacy</a> abgerufen werden. </li>
                        <li><strong>ReCaptcha:</strong> Wir binden die Funktion "ReCaptcha" zur Erkennung von Bots, z.B.
                            bei Eingaben in Onlineformularen, ein. Die Verhaltensangaben der Nutzer (z.B. Mausbewegungen
                            oder Abfragen) werden ausgewertet, um Menschen von Bots unterscheiden zu können.
                            Dienstanbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland,
                            Mutterunternehmen: Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA;
                            Website: <a href="https://www.google.com/recaptcha/"
                                        target="_blank">https://www.google.com/recaptcha/</a>; Datenschutzerklärung: <a
                                href="https://policies.google.com/privacy"
                                target="_blank">https://policies.google.com/privacy</a>; Privacy Shield (Gewährleistung
                            Datenschutzniveau bei Verarbeitung von Daten in den USA): <a
                                href="https://www.privacyshield.gov/participant?id=a2zt0000000TRkEAAW&status=Active"
                                target="_blank">https://www.privacyshield.gov/participant?id=a2zt0000000TRkEAAW&status=Active</a>;
                            Widerspruchsmöglichkeit (Opt-Out): Opt-Out-Plugin: <a
                                href="https://tools.google.com/dlpage/gaoptout?hl=de"
                                target="_blank">https://tools.google.com/dlpage/gaoptout?hl=de</a>, Einstellungen für
                            die Darstellung von Werbeeinblendungen: <a
                                href="https://adssettings.google.com/authenticated"
                                target="_blank">https://adssettings.google.com/authenticated</a>.
                        </li>
                    </ul>
                    <h2 id="m12">Löschung von Daten</h2><p>Die von uns verarbeiteten Daten werden nach Maßgabe der
                    gesetzlichen Vorgaben gelöscht, sobald deren zur Verarbeitung erlaubten Einwilligungen widerrufen
                    werden oder sonstige Erlaubnisse entfallen (z.B., wenn der Zweck der Verarbeitung dieser Daten
                    entfallen ist oder sie für den Zweck nicht erforderlich sind).</p>
                    <p>Sofern die Daten nicht gelöscht werden, weil sie für andere und gesetzlich zulässige Zwecke
                        erforderlich sind, wird deren Verarbeitung auf diese Zwecke beschränkt. D.h., die Daten werden
                        gesperrt und nicht für andere Zwecke verarbeitet. Das gilt z.B. für Daten, die aus handels- oder
                        steuerrechtlichen Gründen aufbewahrt werden müssen oder deren Speicherung zur Geltendmachung,
                        Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen
                        natürlichen oder juristischen Person erforderlich ist.</p>
                    <p>Weitere Hinweise zu der Löschung von personenbezogenen Daten können ferner im Rahmen der
                        einzelnen Datenschutzhinweise dieser Datenschutzerklärung erfolgen.</p>
                    <h2 id="m15">Änderung und Aktualisierung der Datenschutzerklärung</h2><p>Wir bitten Sie, sich
                    regelmäßig über den Inhalt unserer Datenschutzerklärung zu informieren. Wir passen die
                    Datenschutzerklärung an, sobald die Änderungen der von uns durchgeführten Datenverarbeitungen dies
                    erforderlich machen. Wir informieren Sie, sobald durch die Änderungen eine Mitwirkungshandlung
                    Ihrerseits (z.B. Einwilligung) oder eine sonstige individuelle Benachrichtigung erforderlich
                    wird.</p>
                    <p>Sofern wir in dieser Datenschutzerklärung Adressen und Kontaktinformationen von Unternehmen und
                        Organisationen angeben, bitten wir zu beachten, dass die Adressen sich über die Zeit ändern
                        können und bitten die Angaben vor Kontaktaufnahme zu prüfen.</p>
                    <h2 id="m10">Rechte der betroffenen Personen</h2><p>Ihnen stehen als Betroffene nach der DSGVO
                    verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 18 und 21 DSGVO ergeben:</p>
                    <ul>
                        <li><strong>Widerspruchsrecht: Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen
                            Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen
                            Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen;
                            dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Werden die Sie
                            betreffenden personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, haben Sie
                            das Recht, jederzeit Widerspruch gegen die Verarbeitung der Sie betreffenden
                            personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das
                            Profiling, soweit es mit solcher Direktwerbung in Verbindung steht.</strong></li>
                        <li><strong>Widerrufsrecht bei Einwilligungen:</strong> Sie haben das Recht, erteilte
                            Einwilligungen jederzeit zu widerrufen.
                        </li>
                        <li><strong>Auskunftsrecht:</strong> Sie haben das Recht, eine Bestätigung darüber zu verlangen,
                            ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere
                            Informationen und Kopie der Daten entsprechend den gesetzlichen Vorgaben.
                        </li>
                        <li><strong>Recht auf Berichtigung:</strong> Sie haben entsprechend den gesetzlichen Vorgaben
                            das Recht, die Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie
                            betreffenden unrichtigen Daten zu verlangen.
                        </li>
                        <li><strong>Recht auf Löschung und Einschränkung der Verarbeitung:</strong> Sie haben nach
                            Maßgabe der gesetzlichen Vorgaben das Recht, zu verlangen, dass Sie betreffende Daten
                            unverzüglich gelöscht werden, bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben eine
                            Einschränkung der Verarbeitung der Daten zu verlangen.
                        </li>
                        <li><strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht, Sie betreffende Daten,
                            die Sie uns bereitgestellt haben, nach Maßgabe der gesetzlichen Vorgaben in einem
                            strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder deren Übermittlung an
                            einen anderen Verantwortlichen zu fordern.
                        </li>
                        <li><strong>Beschwerde bei Aufsichtsbehörde:</strong> Sie haben ferner nach Maßgabe der
                            gesetzlichen Vorgaben das Recht, bei einer Aufsichtsbehörde, insbesondere in dem
                            Mitgliedstaat Ihres gewöhnlichen Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des
                            mutmaßlichen Verstoßes Beschwerde einzulegen, wenn Sie der Ansicht sind, dass die
                            Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die DSGVO verstößt.
                        </li>
                    </ul>
                    <h2 id="m42">Begriffsdefinitionen</h2><p>In diesem Abschnitt erhalten Sie eine Übersicht über die in
                    dieser Datenschutzerklärung verwendeten Begrifflichkeiten. Viele der Begriffe sind dem Gesetz
                    entnommen und vor allem im Art. 4 DSGVO definiert. Die gesetzlichen Definitionen sind verbindlich.
                    Die nachfolgenden Erläuterungen sollen dagegen vor allem dem Verständnis dienen. Die Begriffe sind
                    alphabetisch sortiert.</p>
                    <ul className="glossary">
                        <li><strong>Besuchsaktionsauswertung:</strong> "Besuchsaktionsauswertung" (englisch "Conversion
                            Tracking") bezeichnet ein Verfahren, mit dem die Wirksamkeit von Marketingmaßnahmen
                            festgestellt werden kann. Dazu wird im Regelfall ein Cookie auf den Geräten der Nutzer
                            innerhalb der Webseiten, auf denen die Marketingmaßnahmen erfolgen, gespeichert und dann
                            erneut auf der Zielwebseite abgerufen. Beispielsweise können wir so nachvollziehen, ob die
                            von uns auf anderen Webseiten geschalteten Anzeigen erfolgreich waren).
                        </li>
                        <li><strong>IP-Masking:</strong> Als "IP-Masking” wird eine Methode bezeichnet, bei der das
                            letzte Oktett, d.h., die letzten beiden Zahlen einer IP-Adresse, gelöscht wird, damit die
                            IP-Adresse nicht mehr der eindeutigen Identifizierung einer Person dienen kann. Daher ist
                            das IP-Masking ein Mittel zur Pseudonymisierung von Verarbeitungsverfahren, insbesondere im
                            Onlinemarketing
                        </li>
                        <li><strong>Personenbezogene Daten:</strong> "Personenbezogene Daten“ sind alle Informationen,
                            die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden
                            "betroffene Person“) beziehen; als identifizierbar wird eine natürliche Person angesehen,
                            die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen,
                            zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung (z.B. Cookie) oder zu einem
                            oder mehreren besonderen Merkmalen identifiziert werden kann, die Ausdruck der physischen,
                            physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen
                            Identität dieser natürlichen Person sind.
                        </li>
                        <li><strong>Profiling:</strong> Als "Profiling“ wird jede Art der automatisierten Verarbeitung
                            personenbezogener Daten bezeichnet, die darin besteht, dass diese personenbezogenen Daten
                            verwendet werden, um bestimmte persönliche Aspekte, die sich auf eine natürliche Person
                            beziehen (je nach Art des Profilings gehören dazu Informationen betreffend das Alter, das
                            Geschlecht, Standortdaten und Bewegungsdaten, Interaktion mit Webseiten und deren Inhalten,
                            Einkaufsverhalten, soziale Interaktionen mit anderen Menschen) zu analysieren, zu bewerten
                            oder, um sie vorherzusagen (z.B. die Interessen an bestimmten Inhalten oder Produkten, das
                            Klickverhalten auf einer Webseite oder den Aufenthaltsort). Zu Zwecken des Profilings werden
                            häufig Cookies und Web-Beacons eingesetzt.
                        </li>
                        <li><strong>Reichweitenmessung:</strong> Die Reichweitenmessung (auch als Web Analytics
                            bezeichnet) dient der Auswertung der Besucherströme eines Onlineangebotes und kann das
                            Verhalten oder Interessen der Besucher an bestimmten Informationen, wie z.B. Inhalten von
                            Webseiten, umfassen. Mit Hilfe der Reichweitenanalyse können Webseiteninhaber z.B. erkennen,
                            zu welcher Zeit Besucher ihre Webseite besuchen und für welche Inhalte sie sich
                            interessieren. Dadurch können sie z.B. die Inhalte der Webseite besser an die Bedürfnisse
                            ihrer Besucher anpassen. Zu Zwecken der Reichweitenanalyse werden häufig pseudonyme Cookies
                            und Web-Beacons eingesetzt, um wiederkehrende Besucher zu erkennen und so genauere Analysen
                            zur Nutzung eines Onlineangebotes zu erhalten.
                        </li>
                        <li><strong>Remarketing:</strong> Vom "Remarketing“ bzw. "Retargeting“ spricht man, wenn z.B. zu
                            Werbezwecken vermerkt wird, für welche Produkte sich ein Nutzer auf einer Webseite
                            interessiert hat, um den Nutzer auf anderen Webseiten an diese Produkte, z.B. in
                            Werbeanzeigen, zu erinnern.
                        </li>
                        <li><strong>Tracking:</strong> Vom "Tracking“ spricht man, wenn das Verhalten von Nutzern über
                            mehrere Onlineangebote hinweg nachvollzogen werden kann. Im Regelfall werden im Hinblick auf
                            die genutzten Onlineangebote Verhaltens- und Interessensinformationen in Cookies oder auf
                            Servern der Anbieter der Trackingtechnologien gespeichert (sogenanntes Profiling). Diese
                            Informationen können anschließend z.B. eingesetzt werden, um den Nutzern Werbeanzeigen
                            anzuzeigen, die voraussichtlich deren Interessen entsprechen.
                        </li>
                        <li><strong>Verantwortlicher:</strong> Als "Verantwortlicher“ wird die natürliche oder
                            juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit
                            anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet,
                            bezeichnet.
                        </li>
                        <li><strong>Verarbeitung:</strong> "Verarbeitung" ist jeder mit oder ohne Hilfe automatisierter
                            Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit
                            personenbezogenen Daten. Der Begriff reicht weit und umfasst praktisch jeden Umgang mit
                            Daten, sei es das Erheben, das Auswerten, das Speichern, das Übermitteln oder das Löschen.
                        </li>
                    </ul>
                    <p className="seal"><a href="https://datenschutz-generator.de/?l=de"
                                           title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken."
                                           target="_blank">Erstellt mit kostenlosem Datenschutz-Generator.de von Dr.
                        Thomas Schwenke</a></p>
                </Container>
                <FooterContainer isLoggedIn={false}/>
            </div>
        );
    }
}
