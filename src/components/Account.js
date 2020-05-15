import React from 'react';

const Account = props => {
    return(
        <li className="card" style={{padding: '10px'}}>
            <h5 style={{padding: '10px'}}>Account Owner: { props.account.name } </h5>
            <p style={{padding: '10px'}}>
                Balance: ${ props.account.balance }
            </p>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <button type="button"
                        onClick={() =>
                            props.deleteAccount(props.account)}
                        className="btn btn-danger"
                        style={{ margin: '10px', width: '75px' }}>
                    Delete
                </button>
                <button type="button"
                        onClick={() =>
                            props.makeWithdrawal(props.account)}
                        className="btn btn-warning"
                        style={{ margin: '10px', width: '100px' }}>
                    Withdraw
                </button>
                <button type="button"
                        onClick={() =>
                            props.makeDeposit(props.account)}
                        className="btn btn-success"
                        style={{ margin: '10px', width: '90px' }}>
                    Deposit
                </button>
            </div>
        </li>
    );
};

export default Account;