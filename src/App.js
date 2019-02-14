import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import FlickSearcher from './containers/FlickSearcher/FlickSearcher';
import FlickPage from './containers/FlickPage/FlickPage';
import Layout from './hoc/Layout/Layout';
import Favorites from './containers/Favorites/Favorites';

class App extends Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Switch>
                        <Route path="/flick" component={FlickPage}/>
                        <Route path="/favorites" component={Favorites}/>
                        <Route path="/" component={FlickSearcher}/>
                    </Switch>
                </Layout>
            </Router>
        );
    }
}

export default App;
