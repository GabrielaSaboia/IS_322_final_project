import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import PageTabs from './PageTabs';
import AccountDisplay from './AccountDisplay';
import AddAccount from './AddAccount';
import Transactions from './Transactions';
import VariablePage from './VariablePage';

const App = () => {
return(
    <div>
    <BrowserRouter>
    <PageTabs/>
        <div>
        <Route path="/" exact component={AccountDisplay} />
        <Route path="/page2"  component={Transactions} />
        <Route path="/page3"  component={AddAccount} />
        <Route path="/page/:id" component={VariablePage} />
        </div>
    </BrowserRouter>
    </div>
)
}

export default App;