const DEFAULT_STATE = {
    get_accounts: '',
    get_transactions:''
};

const errorReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'LOAD_ERROR':
            return {
                ...state,
                get_accounts:''
            }
        case 'TRANSACTION_ERROR':
            return {
                ...state,
                get_transactions:''
            }
        default:
            return true;
    }
};

export default errorReducer;