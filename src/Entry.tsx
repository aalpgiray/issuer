import * as React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route } from "react-router-dom";
import App from './App';
import Filter from './Filter';
import Navbar from "./Navbar";

const Entry = () => <BrowserRouter>
    <React.Fragment>
        <Navbar />
        <Route exact={true} path="/" component={App} />
        <Route path="/filters" component={Filter} />
    </React.Fragment>
</BrowserRouter>;

export default hot(module)(Entry);