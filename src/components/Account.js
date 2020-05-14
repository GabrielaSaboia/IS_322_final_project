import React from 'react';

const Account = props => {
    return(
        <li className="card" style={{padding: '10px'}}>
            <h5 style={{padding: '10px'}}>Account Owner: { props.account.name } </h5>
            <p style={{padding: '10px'}}>
                Balance: ${ props.account.balance }
            </p>
            <button type="button"
                    onClick={() =>
                        props.deleteAccount(props.account)}
                    className="btn btn-primary"
                    style={{float: 'right', width: '75px' }}>
                Delete
            </button>
        </li>
    );
};

export default Account;