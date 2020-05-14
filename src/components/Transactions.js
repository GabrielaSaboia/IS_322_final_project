import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


import TransactionList from './TransactionList';
import { setTransactions, transactionError} from '../actions';


class App extends React.Component{

    componentDidMount(){
        this.getData();
    }

    //get transactions from db
    getData() {
        axios.get ('http://my-json-server.typicode.com/bnissen24/project2DB/transactions')
            .then(response => {
                this.props.setTransactions(response.data);
            }).catch(error => {
                this.props.transactionError();
        });
    }

    render(){
        return (
            <div className="container">
                <TransactionList/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        errorMessage: state.errors.get_transactions
    };
}

export default connect(mapStateToProps, { transactionError, setTransactions })(App);