Option 1: Banking Application
Description
This project requires you to make a basic banking application that follows these requirements. It should have a list of accounts and their current balance (stored in Redux). A list of transactions for all modifications made to the balance of each account (also stored in redux). Then ways to deposit and withdraw money, as well as add and delete existing accounts. A Video of this project working fully can be found in Moodle under Final Project Requirements.
Requirements
1. Display a list of all accounts and their current balance on the home page.
a. Accounts should be retrieved from an API (JSON Test Server) and stored in Redux State.
i. Can use my API with Data I already setup
b. See Redux Containers and State Video in Moodle
c. See Making API Requests Video in Moodle
d. See Making API Requests with Redux Video in Moodle
2. Keep a record of all transactions for each account. These should be displayed on a transactions page. (Filters are not needed but are always good for extra credit)
a. Accounts should be retrieved from an API (JSON Test Server) and stored in Redux State.
3. An account page that should:
a. Display the accounts information, balance, and transaction history.
b. Account ID and info should be retrieved from the URL
c. Button to Delete and Edit the account
d. Ability to add and deposit money to account. This should create a new transaction
record as well as update the balance for the account everywhere it’s displayed e. Resources
i. See Redux Containers and State Video in Moodle ii. See Working with Lists Video in Moodle
iii. See Redux Actions and Changing State Video in Moodle
iv. See React Router Video in Moodle
4. Add Account Page (3+ Members Only)
a. A form with the ability to create a new account with an initial balance
b. See Redux Actions and Changing State Video in Moodle
5. Edit Account Page (3+ Members Only)
a. A form with the ability to change an accounts name and current balance
b. A transaction should be created to withdraw or deposit money to match new balance.