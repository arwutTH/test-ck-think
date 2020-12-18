import React from 'react'
import {Button,Navbar} from "react-bootstrap"
import CastrolLogoSvg from '../assets/images/castrol.svg'
import headerBgBig from '../assets/images/header_bg_big.png'

class Topbar extends React.Component {
    constructor(props) {
        super(props);

    }

    clearSession = () => {
        // sessionStorage.removeItem('userInfo')
        // this.props.history.push('/admin/login-page')
    }

    render() {
        return (
            <div className={'row'}>
                <div className={'col-12 '}>
                    <Navbar bg="dark" variant="dark">

                    </Navbar>

                </div>
            </div>
        );
    }
}

export default Topbar