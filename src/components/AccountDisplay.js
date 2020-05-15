import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


import AccountsList from './AccountsList';
import './AccountDisplay.css';
import { setAccounts, loadError} from '../actions';


class App extends React.Component{

    componentDidMount(){
        this.getData();
    }
//get accounts from database
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
            <div className="container card_position">
                <AccountsList/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        errorMessage: state.errors.get_accounts
    };
}

export default connect(mapStateToProps, { setAccounts, loadError })(App);