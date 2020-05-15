const transactionsReducer = (state = [], action) => {
    switch (action.type) {

        case 'MAKE_DEPOSIT':
            console.log(action.payload);

            const accountIndex = state.findIndex(t =>
            t.id === action.payload);
            let newList = [...state];
            let balance = newList[accountIndex].amount;


        return [
            ...state, {
            id: state.length +1,
                balance: state.amount + action.payload
        }
            ];

        case 'MAKE_WITHDRAWAL':
            return ;

        case 'SET_TRANSACTIONS':
            return action.payload;

        default:
            return state;
    }
}

export default transactionsReducer;