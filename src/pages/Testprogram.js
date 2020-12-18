import React from 'react'
import withMasterLayout from "../layouts/MasterLayout"
import axios from 'axios'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import {
    Alert,
    Form,
    InputGroup,
    FormControl,
    Button,
    Table
} from 'react-bootstrap'
import _ from 'lodash'
import BlockUi from 'react-block-ui';
import moment from 'moment'

class Testprogram extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fakerData: null,
            dataDic: {
                id: "ลำดับ",
                userId: "รหัสเลข",
                title: "หัวข้อ",
                completed: "เสร็จสิ้น"
            },
            blocking: false


        }
    }

    componentDidMount() {
        this.toggleBlocking()
    }

    handleDate = () => {
        return <div className={"row"}>
            <div className="col-6">
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="date"
                        aria-describedby="basic-addon1"
                        type={"date"}
                    />
                </InputGroup>
            </div>
            <div className="col-6">
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="time"
                        aria-describedby="basic-addon1"
                        type={"time"}
                    />
                </InputGroup>
            </div>
        </div>
    }
    handleTable = () => {
        const {fakerData, dataDic, test = true} = this.state
        return <BootstrapTable data={fakerData} pagination={true} keyField={'id'} ref='table'
                               options={this.setOption()}
        >
            {_.map(fakerData, (eachV, idx) => {
                if (idx === 0) {
                    return _.map(eachV, (value, key) => {
                        return <TableHeaderColumn dataField={key} dataAlign="center"
                                                  dataSort={true}>{dataDic[key] ? dataDic[key] : key}</TableHeaderColumn>
                    })
                }
            })}
        </BootstrapTable>
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
            page: 1,  // which page you want to show as default
            sizePerPageList: [{
                text: '5', value: 5
            }, {
                text: '10', value: 10
            }, {
                text: 'All', value: fakerData?.length
            }], // you can change the dropdown list for size per page
            sizePerPage: 5,  // which size per page you want to locate as default
            pageStartIndex: 1, // where to start counting the pages
            paginationSize: 3,  // the pagination bar size.
            prePage: 'Prev', // Previous page button text
            nextPage: 'Next', // Next page button text
            firstPage: 'First', // First page button text
            lastPage: 'Last', // Last page button text
            // paginationShowsTotal: this.renderShowsTotal,  // Accept bool or function
            paginationPosition: 'bottom',  // default is bottom, top and both is all available
            //  hideSizePerPage: true ,// You can hide the dropdown for sizePerPage
            // alwaysShowAllBtns: true, // Always show next and previous button
            // withFirstAndLast: false //Hide the going to First and Last page button

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
        axios.get(`http://jsonplaceholder.typicode.com/todos/`).then(resp => {
            this.setState({
                fakerData: resp?.data
            })
        }).finally(e => {
            this.setState({blocking: !this.state.blocking})
        })
    }


    render() {
        const {fakerData} = this.state
        console.log(fakerData)
        return (
            <div className={'col-12'}>
                {this.handleDate()}
                <div className="row">
                    <div className="col-lg-12 mb-2">
                        <Button className="btn btn-success float-right"  onClick={e => this.toggleBlocking()}>feactData</Button>
                    </div>
                </div>
                <BlockUi tag="div" blocking={this.state.blocking}>
                    {this.handleTable()}
                </BlockUi>
            </div>
        );
    }
}

export default withMasterLayout(Testprogram)