import React, {Component} from 'react';

import FlickSearcher from './containers/FlickSearcher/FlickSearcher';
import Layout from './hoc/Layout/Layout';

class App extends Component {
    render() {
        return (
            <Layout>
                <FlickSearcher/>
            </Layout>
        );
    }
}

export default App;
