// A cafe holds several tables (i.e. chatrooms)

import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import TableComponent from "./chat/TableComponent";
import StreamContainer from "./chat/StreamContainer";
import '../css/cafe.css';
import {socket} from "../../App";
import FooterContainer from "./footer/FooterContainer";

export default class CafeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {tables: {}, myTable: null};
        this.joinTable = this.joinTable.bind(this);
    }

    componentDidMount() {
        const self = this;
        socket.on('tableException', console.log)
        socket.on('updateTables', function (data) {
            self.setState({tables: data})
        });
        socket.on('joinedTable', function (data) {
            console.log("Joined table!", data);
            self.setState({tables: data.tables, myTable: data.tableId});
        });
        socket.on('leftTable', function (data) {
            self.setState({tables: data, myTable: null});
        });
        socket.emit('requestTables');
    }


    joinTable(id) {
        socket.emit('joinTable', {tableId: id});
    }

    addTable = () => {
        socket.emit('addTable');
    }

    renderTables() {
        return Object.entries(this.state.tables).map((t, i) => {
            const tableId = t[0];
            const table = t[1];
            const className = tableId === this.state.myTable ? 'active' : '';
            return (
                <TableComponent
                    key={tableId}
                    tableName={"Tisch " + table.nickName}
                    styleName={className}
                    tableId={tableId}
                    participants={table.length}
                    join={this.joinTable}
                />
            )
        });
    }

    render() {
        return (
            <>
                <Container>
                    <h1>MainCafé</h1>
                    <Container className="tableContainer">
                        <Container id="tables"/>
                        {this.renderTables()}
                        <StreamContainer updateCount={this.updateTableCount}
                                         socket={this.socket}
                                         room={this.state.tables[this.state.myTable]}
                                         ref={streamContainer => {
                                             this.streamContainer = streamContainer;
                                         }}
                        />
                    </Container>
                </Container>
                <FooterContainer isLoggedIn={true}/>
            </>
        );
    }

}
