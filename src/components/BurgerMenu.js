import React from 'react'
import {Nav, Button} from "react-bootstrap";
// import CastrolLogo from '../assets/images/castrol.png'
import {slide as Menu} from 'react-burger-menu'

class BurgerMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isTicker : false
        }
    }


    tickerBar = () => {
        const {isTicker} = this.state
        this.setState({
            isTicker : !isTicker
        })
    }
    render() {
        const {isTicker} = this.state
        return (
            // <div className={'col-2 bg-info row'}>
            <div onClick={e => this.tickerBar()}>
                <i className="fas fa-bars pr-3 text-white" style={{fontSize:'1.5rem', cursor: 'pointer'}} onClick={e =>this.tickerBar()} />
                {isTicker ? <Nav className="col-md-2 d-none d-md-block bg-dark sidebar p-0 animate__animated animate__fadeInLeft"
                     activeKey="/home"
                     onSelect={selectedKey => alert(`selected ${selectedKey}`)}
                >
                    {/* <Nav.Item>*/}
                    {/*<div className="sidebar-sticky float-right" onClick={e => this.tickerBar()}>x</div>*/}
                    {/*      </Nav.Item>*/}
                    <Nav.Item className={'mt-5'}>
                        <Nav.Link href="/home">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            Disabled
                        </Nav.Link>
                    </Nav.Item>
                </Nav> : null }
                </div >
                // <div><Button onClick={e =>this.tickerBar()}>Open</Button></div>}</>
            // </div>
        );
    }
}

export default BurgerMenu