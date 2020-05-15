import React from 'react';
import { connect } from 'react-redux';
import { deleteAccount, makeDeposit, makeWithdrawal } from '../actions';

import Account from './Account';

class AccountsList extends React.Component {

    deleteAccount = (account) => {
        this.props.deleteAccount(account.id);
   }

    makeDeposit = (account) => {
        this.props.makeDeposit(account.id);
    }

    makeWithdrawal = (account) => {
        this.props.makeWithdrawal(account.id);
    }


   render() {
        const accountsList = this.props.accounts.map(account => {
            return <Account account={account}
                            key={account.id}
                            deleteAccount={this.deleteAccount}
                            makeDeposit={this.makeDeposit}
                            makeWithdrawal={this.makeWithdrawal}/>
        });

        return(
            <ul className="list-group">
                {accountsList}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        accounts: state.accounts
    };
}

export default connect(mapStateToProps, { deleteAccount, makeDeposit, makeWithdrawal })(AccountsList);