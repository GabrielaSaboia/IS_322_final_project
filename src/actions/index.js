export const makeDeposit = (accountId, amount) => {
    return{
        type: 'MAKE_DEPOSIT',
        payload: { accountId, amount }
    }
};

export const makeWithdrawal = (withdrawal) => {
    return{
        type: 'MAKE_WITHDRAWAL',
        payload: withdrawal
    }
};

export const setTransactions = (display) => {
    return {
        type: 'SET_TRANSACTIONS',
        payload: display
    }
};

export const setAccounts = (accounts) => {
    return {
        type: 'SET_ACCOUNTS',
        payload: accounts
    }
};

export const addAccount = (newAccount, balance) => {
    return{
        type: 'ADD_ACCOUNT',
        payload: newAccount,
        payload2: balance
        //update payloads according to info taken to add account
    }
};

export const deleteAccount = (accountId) => {
    return{
        type: 'DELETE_ACCOUNT',
        payload: accountId
    }
};

export const loadError = errorMessage => {
    return{
        type: 'LOAD_ERROR'
    }
};

export const transactionError = errorMessage => {
    return{
        type: 'TRANSACTION_ERROR'
    }
};

//should transactions be an action too?