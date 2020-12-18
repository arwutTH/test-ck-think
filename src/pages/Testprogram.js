import React from 'react'
import axios from 'axios'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import {
    InputGroup,
    FormControl,
    Button
} from 'react-bootstrap'
import BlockUi from 'react-block-ui';
import Topbar from "../components/Topbar";

class Testprogram extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fakerData: null,
            blocking: false
        }
    }

    componentDidMount() {
        this.toggleBlocking()
    }

    renderShowsTotal(start, to, total) {
        return (
            <p style={{color: 'blue'}}>
                From {start} to {to}, totals is {total}&nbsp;&nbsp;(its a customize text)
            </p>
        );
    }

    setOption = () => {
        const {fakerData} = this.state
        const options = {
            page: 1,
            sizePerPageList: [{
                text: '5', value: 5
            }, {
                text: '10', value: 10
            }, {
                text: 'All', value: fakerData?.length
            }],
            sizePerPage: 5,
            pageStartIndex: 1,
            paginationSize: 3,
            prePage: 'Prev',
            nextPage: 'Next',
            firstPage: 'First',
            lastPage: 'Last',
            paginationPosition: 'bottom'
        };
        return options
    }
    toggleBlocking = () => {
        this.setState({blocking: !this.state.blocking})
        setTimeout(() => {
            this.fetchData()
        }, 1000)
    }
    fetchData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/todos/`).then(resp => {
            this.setState({
                fakerData: resp?.data
            })
        }).finally(e => {
            this.setState({blocking: !this.state.blocking})
        })
    }


    render() {
        const {fakerData} = this.state
        return (
            <div className="container">
                <Topbar/>
                <div className={'col-12'}>
                    <div className="row">
                        <div className="col-lg-12 mb-2">
                            <Button className="btn btn-success float-right"
                                    onClick={e => this.toggleBlocking()}>feactData</Button>
                            <div className="col-3 float-right">
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="time"
                                        aria-describedby="basic-addon1"
                                        type={"time"}
                                    />
                                </InputGroup>
                            </div>
                            <div className="col-3 float-right">
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="date"
                                        aria-describedby="basic-addon1"
                                        type={"date"}
                                        data-provide="datepicker" data-date-language="th-th"
                                    />
                                </InputGroup>
                            </div>

                        </div>
                    </div>
                    <BlockUi tag="div" blocking={this.state.blocking}>
                        <BootstrapTable data={fakerData} pagination={true} ref='table' search
                                        options={this.setOption()}
                        >
                            <TableHeaderColumn dataField={"id"} dataAlign="center" isKey={true}
                                               dataSort={true}>ลำดับ</TableHeaderColumn>
                            <TableHeaderColumn dataField={"userId"} dataAlign="center"
                                               dataSort={true}>รหัสเลข</TableHeaderColumn>
                            <TableHeaderColumn dataField={"title"} dataAlign="left"
                                               dataSort={true}>หัวข้อ</TableHeaderColumn>
                            <TableHeaderColumn dataField={"completed"} dataAlign="center"
                                               dataSort={true}>เสร็จสิ้น</TableHeaderColumn>
                        </BootstrapTable>
                    </BlockUi>
                </div>
            </div>

        );
    }
}

export default Testprogram