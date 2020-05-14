const transactionsReducer = (state = [], action) => {
    switch (action.type) {

        case 'MAKE_DEPOSIT':
            /*
            const accountIndex = state.findIndex(t =>
            t.id === action.payload);
            let newBalance = [...state];
            newBalance.splice( accountIndex, 1,  );
            */
            return;

        case 'MAKE_WITHDRAWAL':
            return ;

        case 'SET_TRANSACTIONS':
            return action.payload;

        default:
            return state;
    }
}

export default transactionsReducer;