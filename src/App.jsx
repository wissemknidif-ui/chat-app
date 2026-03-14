import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const MainApp = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <h1>Welcome to the Chat App</h1>
                </Route>
                <Route path="/chat">
                    <h1>Chat Room</h1>
                </Route>
                <Route path="*">
                    <h1>404 - Page Not Found</h1>
                </Route>
            </Switch>
        </Router>
    );
};

export default MainApp;