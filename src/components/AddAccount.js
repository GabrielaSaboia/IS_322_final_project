import React from 'react';
import { connect } from 'react-redux';
import { addAccount } from '../actions';


class AddAccount extends React.Component {
    state = {
        newAccount:'' }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.addAccount(this.state.newAccount);
        this.setState({ newAccount: '' })
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
           </form>
        );
    }
}

export default connect(null, {addAccount})(AddAccount);