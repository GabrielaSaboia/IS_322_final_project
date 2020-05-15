const transactionsReducer = (state = [], action) => {
    switch (action.type) {

        case 'MAKE_DEPOSIT':
            return [
                ...state, {
                    name: 'Set Transation Name',
                    type: 'deposit',
                    amount: action.payload.amount,
                    accountId: action.payload.accountId
                }
            ]

        case 'MAKE_WITHDRAWAL':
            return ;

        case 'SET_TRANSACTIONS':
            return action.payload;

        default:
            return state;
    }
}

export default transactionsReducer;