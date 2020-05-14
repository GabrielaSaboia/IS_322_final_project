import React from 'react';

const Transaction = props => {

    return (
        <li className="list-group-item">
        <h5 style={{ float: 'left' }} > Transaction reason: {props.transaction.name}</h5>
        <h5 style={{ float: 'right' }} >Amount: {props.transaction.amount}</h5>
    </li>
    )
};

export default Transaction;