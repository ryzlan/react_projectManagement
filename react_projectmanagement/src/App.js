import React, { Component } from 'react';
import {BrowserRouter ,Switch , Route  } from  'react-router-dom';

import Navbar from './component/layouts/Navbar'
import Dashboard from './component/dashboard/Dashboard';
import ProjectDetails from './component/project/ProjectDetail';
import SignIn from './component/auth/SignIn';
import SignUp from './component/auth/Signup';
import CreateProject from './component/project/CreateProject';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact  path="/" component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreateProject} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
