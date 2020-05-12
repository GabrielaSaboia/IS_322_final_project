export const makeDeposit = (deposit) => {
    return{
        type: 'MAKE_DEPOSIT',
        payload: deposit
    }
};

export const makeWithdrawal = (withdrawal) => {
    return{
        type: 'MAKE_WITHDRAWAL',
        payload: withdrawal
    }
};

export const displayTransactions = (display) => {
    return {
        type: 'DISPLAY_TRANSACTIONS',
        payload: display
    }
};

export const addAccount = (newAccount) => {
    return{
        type: 'ADD_ACCOUNT',
        payload: newAccount
        //update payloads according to info taken to add account
    }
};

export const deleteAccount = (account) => {
    return{
        type: 'DELETE_ACCOUNT',
        payload: account
    }
};

export const loadError = errorMessage => {
    return{
        type: 'LOAD_ERROR'
    }
};

//should transactions be an action too?