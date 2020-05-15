import React from 'react';
import { connect } from 'react-redux';
import { addAccount, makeDeposit } from '../actions';


class AddAccount extends React.Component {
    state = {
        newAccount:'',
        newBalance:''}

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.addAccount(this.state.newAccount);
        this.setState({ newAccount: '' })

        this.props.makeDeposit(this.state.newAccount);
        this.setState( {newBalance: '' })
    }

    render() {
        return (
           <form className="form-group" onSubmit={this.onFormSubmit}>
               <h5>Enter New Account Information</h5>

               <label htmlFor="newAccount">Name</label>
               <input type="text" className="form-control"
                      name="newAccount"
                      value={this.state.newAccount}
                   onChange={(e) =>
                       this.setState({newAccount: e.target.value})} />

               <label htmlFor="newBalance">Initial Deposit</label>
               <input type="text" className="form-control"
                      name="newBalance"
                      value={this.state.newBalance}
                      onChange={(e) =>
                          this.setState({newBalance: e.target.value})} />

                          <button className="btn btn-success" value='submit'>Submit</button>
           </form>
        );
    }
}

export default connect(null, {addAccount, makeDeposit})(AddAccount);