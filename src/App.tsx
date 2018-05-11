import * as React from 'react';
import { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route } from "react-router-dom";
import { getUsers } from "./Api/GitHub/github";
import { IUser } from './Api/GitHub/github.types';
import Filter from './Filter';
import Issues from './Issues';
import Navbar from "./Navbar";

export interface IApplicationContext {
    users: IUser[]
};

// tslint:disable-next-line:no-empty
export const ApplicationContext = React.createContext<IApplicationContext>({ users: [] as IUser[] });

class App extends Component<{}, IApplicationContext> {
    public state = {
        users: []
    }
    public componentDidMount() {
        this.getUsers();
    }
    public getUsers = () => {
        getUsers()
            .then(users => this.setState({
                ...this.state,
                users
            }))

        return <React.Fragment />
    }
    public render() {
        return <ApplicationContext.Provider value={this.state}>
            <BrowserRouter>
                <React.Fragment>
                    <Navbar />
                    <Route exact={true} path="/" component={Issues} />
                    <Route path="/filters" component={Filter} />
                </React.Fragment>
            </BrowserRouter >
        </ApplicationContext.Provider>;
    }
}

export default hot(module)(App);