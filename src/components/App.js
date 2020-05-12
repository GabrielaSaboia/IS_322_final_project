import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { setAccounts, loadError} from '../actions';

class App extends React.Component{


componentDidMount(){
this.getData();
}

getData() {
    axios.get ('http://my-json-server.typicode.com/bnissen24/project2DB/accounts')
        .then(response => {
            this.props.setAccounts(response.data);
        }).catch(error => {
            this.props.loadError();
    });
}

render(){
return (
    <div className="container">
            App
        </div>
        );
}
}

const mapStateToProps = (state) => {
    return {
        errorMessage: state.errors.setAccounts
    };

}

export default connect(mapStateToProps, { setAccounts, loadError })(App);