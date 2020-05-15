const accountsReducer = (state =[], action) => {
    let accountIndex;
 switch (action.type) {
     case 'ADD_ACCOUNT':
         return [
             ...state, {
                 name: action.payload,
                 id: state.length + 1,
                 balance: action.payload.balance
         } //maybe add another payload to add account action
         ];

     case 'SET_ACCOUNTS':
         return action.payload;

     case 'DELETE_ACCOUNT':
         accountIndex = state.findIndex(t =>
             t.id === action.payload);
         let accountList = [...state];
         accountList.splice(accountIndex, 1);
         return accountList;

    case 'MAKE_DEPOSIT':
        accountIndex = state.findIndex(t =>
             t.id === action.payload.accountId);
        const newState = [ ...state ];
        newState[accountIndex].balance += action.payload.amount;
        return newState;

         default:
         return state;
 }
}

export default accountsReducer;