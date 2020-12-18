import React from 'react'
import {Navbar} from "react-bootstrap"

class Topbar extends React.Component {
    constructor(props) {
        super(props);

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