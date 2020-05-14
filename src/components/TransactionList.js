import React from 'react';
import { connect } from 'react-redux';

import Transaction from './Transaction';

class TransactionList extends React.Component {

    render() {
        const transactionList = this.props.transactions.map( transaction =>{
            return <Transaction transaction={transaction}
                                key={transaction.id}/>
        });

        return (
            <ul className="list-group">
                {transactionList}
            </ul>
        )
    };
}
const mapStateToProps = (state) => {
    return {
        transactions: state.transactions
    };
}

export default connect(mapStateToProps)(TransactionList);