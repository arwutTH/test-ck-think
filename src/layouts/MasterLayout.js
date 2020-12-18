import React from 'react'
import Topbar from "../components/Topbar";
import Footer from "../components/Footer"

function withMasterLayout(WithComponent) {
    class MasterLayout extends React.Component {
        render() {
            // return <div className="container p-0">
            return <div className="container">
                <Topbar/>
                <WithComponent {...this.props} {...this.state} />
                {/*<Footer/>*/}
                {/*{this.getData()}*/}
            </div>
        }
    }

    return MasterLayout
}

export default withMasterLayout