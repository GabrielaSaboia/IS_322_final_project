const transactionsReducer = (state = [], action) => {
    switch (action.type) {
        case 'MAKE_DEPOSIT':
            return state + action.payload;
        case 'MAKE_WITHDRAWAL':
            return ;
        case 'SET_TRANSACTIONS':
            return action.payload;
        default:
            return state;
    }
}

export default transactionsReducer;