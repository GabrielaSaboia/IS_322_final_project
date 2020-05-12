import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { addAccount, loadError} from './action';

class App extends React.Component{


componentDidMount(){
this.getData();
}

getData() {
    axios.get ('http://my-json-server.typicode.com/bnissen24/project2DB/accounts')
        .then(response => {
            this.props.addAccount(response.data);
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
        errorMessage: state.errors.addAccount
    };

}

export default connect(mapStateToProps, { addAccount, loadError })(App);