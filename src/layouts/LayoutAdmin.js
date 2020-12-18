import React from 'react'
import Topbar from "../components/Topbar";
import _ from 'lodash'

function withLayoutAdmin(WithComponent) {
    class LayoutAdmin extends React.Component {
        componentDidMount() {
            let userInfo = sessionStorage.getItem('userInfo')
            userInfo = JSON.parse(userInfo)
           if(userInfo === null) {
               this.props.history.push('/admin/login-page')
           }
        }

        clear = () => {
             sessionStorage.removeItem('userInfo')
             this.props.history.push('/admin/login-page')
        }

        render() {
            return <div className={'container-fluid p-0'}>
                {/*<Topbar isAdmin={true} />*/}
                <Topbar clearSession={this.clear} isAdminPage />
                <div className={'row mr-0 justify-content-center mt-3'}>
                <div className={'col-10'}>
                    <WithComponent {...this.props} {...this.state} />
                </div>
                </div>
                {/*{this.getData()}*/}
            </div>
        }
    }

    return LayoutAdmin
}

export default withLayoutAdmin