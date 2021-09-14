import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainNav from './navigation/MainNav';
import SetGet from './components/projects/SetGet';
import Home from './components/Home';
import Projects from './components/Projects';


import './App.css';

function App(){
    return(
        <div className="App">
            <Router>
                <MainNav />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/projects" exact component={Projects} />
                    <Route path="/projects/storage" exact component={SetGet} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;