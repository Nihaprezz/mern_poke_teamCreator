import React from 'react';
import { Route, Switch , withRouter } from "react-router-dom"
import './App.css';


import GenerateTeamContainer from "./containers/GenerateTeamCont"
import AllTeamsContainer from "./containers/AllTeamsContainer"
import Nav from "./components/Nav"

function App() {
  return (
    <div className="App">
        < Nav />

        < Switch>
          <Route exact path="/" component={GenerateTeamContainer}/>
          <Route exact path="/teams" component={AllTeamsContainer} />
        </Switch>
        

    </div>  
  );
}

export default withRouter(App);
