const accountsReducer = (state =[], action) => {
 switch (action.type) {
     case 'ADD_ACCOUNT':
         return [
             ...state, {
                 name: action.payload,
                 id: state.length + 1,
         } //maybe add another payload to add account action
         ];

     case 'SET_ACCOUNTS':
         return action.payload;

     case 'DELETE_ACCOUNT':
         const accountIndex = state.findIndex(t =>
             t.id === action.payload);
         let accountList = [...state];
         accountList.splice(accountIndex, 1);
         return accountList;

         default:
         return state;
 }
}

export default accountsReducer;