import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/custom.css'
import './App.css';
import Testprogram from "./pages/Testprogram";
import 'animate.css/animate.min.css'
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import 'react-block-ui/style.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" component={Testprogram}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
