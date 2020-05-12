import React from 'react';
import { connect } from 'react-redux';
import { addAccount } from '../actions';
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";

//import Account from './Account';

class AccountsList extends React.Component {

    //addAccount = (account) => {
      //  this.props.addAccount(account.id)
   // }

}

export default connect(mapStateToProps, { addAccount })(AccountsList);