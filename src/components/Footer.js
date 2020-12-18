import React from "react";
import {Navbar} from "react-bootstrap";
import BurgerMenu from "./BurgerMenu";
import CastrolLogoSvg from "../assets/images/castrol.svg";

class Footer extends React.Component {
    render() {
        return (

            <div className={'row'}>
                <div className="col-12 d-flex parent pr-0 mt-5" style={{
                    left: 0,
                    bottom: 0,
                    width: '100%',
                    backgroundColor: '#009343',
                    color : '#009343'
                }}>
                    footer
                </div>
            </div>
        )
    }
}

export default Footer