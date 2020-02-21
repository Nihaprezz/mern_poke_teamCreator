import React from 'react';
import { Route, Switch , withRouter } from "react-router-dom"
import './App.css';

import Nav from "./components/Nav"
import GenerateTeamContainer from "./containers/GenerateTeamCont"
import AllTeamsContainer from "./containers/AllTeamsContainer"
import TeamEdit from "./containers/TeamEdit"

function App() {
  return (
    <div className="App">
        < Nav />

        < Switch>
          <Route exact path="/" component={GenerateTeamContainer}/>
          <Route exact path="/teams" component={AllTeamsContainer} />
          <Route exact path="/team/:id/edit" render={(props) => {
            return < TeamEdit teamId={props.match.params.id} />
          }} />
        </Switch>
        

    </div>  
  );
}

export default withRouter(App);
